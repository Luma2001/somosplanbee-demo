"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { SITE, whatsappLink } from "@/lib/site";
import { Hero } from "@/components/site/Hero";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre completo.").max(100),
  email: z.string().trim().email("Ingresá un email válido.").max(255),
  subject: z.string().trim().min(3, "Contanos brevemente el motivo.").max(120),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres.").max(1000),
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
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    window.open(
      whatsappLink(
        `Consulta desde el formualrio de la web\n\nNombre: ${data.name}\nEmail: ${data.email}\nAsunto: ${data.subject}\n\n${data.message}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Abrimos WhatsApp con tu consulta lista para enviar.");
    reset();
  }

  return (
    <div className="container-page py-4">

      <Hero
          variant="side-by-side"
          title={
            <>
              Comunicate con nosotros:{" "}
              <span className="text-honey-deep"> nos encantaría saber de vos. </span>
            </>
          }
          description="Pedidos, regalos corporativos, donaciones o voluntariado: escribinos y te respondemos a la brevedad."
          imageSrc="/images/team/01.png"
          imageAlt="Persona cosiendo a mano un bolso de lona recuperada"
      />      

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {/* Datos de contacto */}
        <Reveal delay={0.1}>
          <div className="space-y-4">
            <div className="surface-card p-6">
              <h2 className="font-display text-xl font-semibold">Datos de contacto</h2>
              <p className="text-sm text-muted-foreground">
                ¿Tenés preguntas o necesitas más información? Escríbenos y te respondemos lo antes posible.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href={whatsappLink("Hola PlanBee, quiero hacer una consulta.")}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Escribinos
                  </a>
                </li>
                <li>Ubicación: {SITE.address}</li>
              </ul>
            </div>

            <div className="surface-card overflow-hidden">
              <iframe
                title="Mapa con la ubicación del taller de PlanBee"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.7700181745276!2d-68.83397752576391!3d-32.886392268845256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09ad76329f53%3A0x5369bf7f5babaa15!2sPlanBee!5e1!3m2!1ses!2sar!4v1786215118592!5m2!1ses!2sar"
                className="h-88 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
        {/* Formulario de contacto */}
        <Reveal>
          <form className="surface-card space-y-5 p-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className="font-display text-xl font-semibold">Formulario de contacto</h2>

            <div className="space-y-1.5">
              <Label htmlFor="name">Nombre y apellido</Label>
              <Input
                id="name"
                maxLength={100}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="text-sm font-medium text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                maxLength={255}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-sm font-medium text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                maxLength={120}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                {...register("subject")}
              />
              {errors.subject && (
                <p id="subject-error" role="alert" className="text-sm font-medium text-destructive">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                rows={5}
                maxLength={1000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="text-sm font-medium text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" size="lg" className="min-h-12 w-full" disabled={isSubmitting}>
              Enviar consulta
            </Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}