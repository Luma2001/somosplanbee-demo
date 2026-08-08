import { SITE, whatsappLink } from '@/lib/site';

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

/** 
 * Representación flexible de la línea de pedido. 
 * Soporta tanto la estructura del CartStore ({ code, name, ... }) 
 * como el objeto de producto completo.
 */
export interface OrderLine {
  code?: string;
  name?: string;
  material?: string;
  product?: {
    id: string;
    name: string;
    material?: string;
  };
  quantity: number;
}

export interface Order {
  lines: OrderLine[];
  customer: CustomerData;
}

/** Horas de empleo inclusivo garantizadas por un pedido. */
export function impactHours(lines: OrderLine[]): number {
  return lines.reduce((sum, l) => sum + l.quantity, 0) * (SITE.hoursPerProduct || 1);
}

/** Mensaje estructurado del pedido, listo para enviar por WhatsApp. */
export function buildOrderMessage(order: Order): string {
  const items = order.lines
    .map((l) => {
      const name = l.name || l.product?.name || 'Producto';
      const material = l.material || l.product?.material;
      const detail = material ? ` (${material})` : '';
      return `• ${l.quantity} × ${name}${detail}`;
    })
    .join('\n');

  return [
    `Hola ${SITE.shortName || 'Plan Bee'}, quiero hacer un pedido:`,
    '',
    items,
    '',
    `Nombre: ${order.customer.name}`,
    `Email: ${order.customer.email}`,
    `Teléfono: ${order.customer.phone}`,
    order.customer.notes ? `Observaciones: ${order.customer.notes}` : 'Observaciones: -',
    '',
    `Impacto estimado: ${impactHours(order.lines)} horas de empleo inclusivo.`,
  ].join('\n');
}

/**
 * Proveedor de checkout. La arquitectura permite sumar Mercado Pago
 * u pasarelas de pago implementando esta interfaz.
 */
export interface CheckoutProvider {
  id: string;
  label: string;
  checkout: (order: Order) => Promise<void> | void;
}

export const whatsappCheckout: CheckoutProvider = {
  id: 'whatsapp',
  label: 'Finalizar pedido por WhatsApp',
  checkout: (order) => {
    if (typeof window !== 'undefined') {
      window.open(whatsappLink(buildOrderMessage(order)), '_blank', 'noopener,noreferrer');
    }
  },
};

/** Registro de proveedores disponibles. */
export const CHECKOUT_PROVIDERS: CheckoutProvider[] = [whatsappCheckout];