'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Reveal } from '@/components/site/Reveal';
import { SITE, whatsappLink } from '@/lib/site';
import { Hero } from '@/components/site/Hero';

const schema = z.object({
  name: z.string().trim().min(2, 'Ingresá tu nombre completo.').max(100),
  email: z.string().trim().email('Ingresá un email válido.').max(255),
  subject: z.string().trim().min(3, 'Contanos brevemente el motivo.').max(120),
  message: z
    .string()
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(1000),
});

type FormValues = z.infer<typeof schema>;

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: FormValues) {
    const text = `Consulta desde el formulario de la web\n\nNombre: ${data.name}\nEmail: ${data.email}\nAsunto: ${data.subject}\n\n${data.message}`;
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    toast.success('Abrimos WhatsApp con tu consulta lista para enviar.');
    reset();
  }

  return (
    <div className="flex flex-col gap-6 pb-10 md:gap-8 md:pb-12">
      {/* Hero Principal */}
      <Hero
        variant="side-by-side"
        title={
          <>
            Comunicate con nosotros:{' '}
            <span className="text-honey-deep">nos encantaría saber de vos.</span>
          </>
        }
        description="Pedidos, regalos corporativos, donaciones o voluntariado: escribinos y te respondemos a la brevedad."
        imageSrc="/images/team/01.png"
        imageAlt="Persona cosiendo a mano un bolso de lona recuperada"
      />

      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          
          {/* Columna Lateral: Datos de contacto y Mapa */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <section
                aria-label="Información de contacto"
                className="surface-card rounded-3xl p-6 sm:p-8"
              >
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance-tight">
                  Datos de contacto
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  ¿Tenés preguntas o necesitás más información? Escribinos y te respondemos lo antes posible.
                </p>

                <ul className="mt-6 space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex flex-wrap gap-1.5">
                    <span className="font-semibold text-foreground">Email:</span>{' '}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="underline underline-offset-4 text-olive hover:text-foreground transition-colors"
                      aria-label={`Enviar correo a ${SITE.email}`}
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex flex-wrap gap-1.5">
                    <span className="font-semibold text-foreground">WhatsApp:</span>{' '}
                    <a
                      href={whatsappLink('Hola PlanBee, quiero hacer una consulta.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 text-olive hover:text-foreground transition-colors"
                      aria-label="Abrir conversación de WhatsApp con PlanBee"
                    >
                      Escribinos directamente
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Ubicación:</span>{' '}
                    {SITE.address}
                  </li>
                </ul>
              </section>

              {/* Mapa de Google */}
              <div className="surface-card overflow-hidden rounded-3xl border border-border/70">
                <iframe
                  title="Mapa con la ubicación del taller de PlanBee"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.7700181745276!2d-68.83397752576391!3d-32.886392268845256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09ad76329f53%3A0x5369bf7f5babaa15!2sPlanBee!5e1!3m2!1ses!2sar!4v1786215118592!5m2!1ses!2sar"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Columna Principal: Formulario de Contacto */}
          <Reveal delay={0.15}>
            <section
              aria-label="Formulario de mensaje directo"
              className="surface-card rounded-3xl p-6 sm:p-8"
            >
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance-tight">
                Envianos un mensaje
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Completá tus datos y te contactaremos a la brevedad.
              </p>

              <form
                className="mt-6 space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Nombre */}
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nombre y apellido</Label>
                  <Input
                    id="name"
                    maxLength={100}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="Ej: Luciana Gómez"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="text-xs font-semibold text-destructive"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    maxLength={255}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="ejemplo@correo.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs font-semibold text-destructive"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Asunto */}
                <div className="space-y-1.5">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    maxLength={120}
                    aria-required="true"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    placeholder="Ej: Consulta por regalos corporativos"
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      role="alert"
                      className="text-xs font-semibold text-destructive"
                    >
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="space-y-1.5">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    maxLength={1000}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Escribí acá tu consulta o detalle de tu pedido..."
                    {...register('message')}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="text-xs font-semibold text-destructive"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Botón de Enviar */}
                <Button
                  type="submit"
                  size="lg"
                  className="min-h-12 w-full font-semibold shadow-xs"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Preparando consulta...' : 'Enviar consulta por WhatsApp'}
                </Button>
              </form>
            </section>
          </Reveal>

        </div>
      </div>
    </div>
  );
}