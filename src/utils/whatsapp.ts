import { CartItem } from '@/store/useCartStore';

const PHONE_NUMBER = '5492616904353'; // Reemplazar con el número real de PlanBee

export function generateWhatsAppLink(cart: CartItem[], customNotes?: string): string {
  if (cart.length === 0) return '#';

  let message = `¡Hola Plan Bee! 👋 Quisiera solicitar una cotización para el siguiente pedido de merchandising:\n\n`;

  cart.forEach((item) => {
    message += `• *${item.name}* (${item.code})\n  Cantidad: ${item.quantity} un.\n`;
  });

  if (customNotes && customNotes.trim() !== '') {
    message += `\n✏️ *Notas de personalización / Consulta:*\n"${customNotes.trim()}"\n`;
  }

  message += `\n¿Me confirman disponibilidad y presupuesto? ¡Muchas gracias!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}