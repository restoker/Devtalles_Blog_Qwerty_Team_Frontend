
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SplitText from "@/components/SplitText";

const faqs = [
  {
    question: "¿Quién está detrás de {Dev/Blog}?",
    answer:
      "Mi nombre es Alex Rivera, soy un desarrollador de software y escritor apasionado por la tecnología. Creé este blog como una forma de compartir mis conocimientos, explorar nuevas ideas y conectar con otros entusiastas del desarrollo.",
  },
  {
    question: "¿Con qué tecnologías está construido este blog?",
    answer:
      "Este sitio está construido con un stack moderno y eficiente: Next.js para el framework de React, Tailwind CSS para el estilizado 'utility-first', y Framer Motion para las animaciones. El contenido se renderiza estáticamente para un rendimiento óptimo.",
  },
    {
    question: "¿Con qué frecuencia publicas nuevo contenido?",
    answer:
      "Mi objetivo es publicar al menos un artículo nuevo cada semana. Sin embargo, la calidad es mi principal prioridad, por lo que a veces puedo tardar un poco más para asegurar que cada publicación sea valiosa e informativa.",
  },
  {
    question: "¿Puedo sugerir temas para futuras publicaciones?",
    answer:
      "¡Absolutamente! Estoy siempre en busca de nuevas ideas y me encantaría saber qué temas te interesan. Puedes contactarme a través del formulario de contacto o en mis redes sociales para enviarme tus sugerencias.",
  },
  {
    question: "¿Es posible contribuir como autor invitado?",
    answer:
      "Actualmente no estoy aceptando publicaciones de invitados, pero es algo que podría considerar en el futuro a medida que la comunidad crezca. Si tienes una idea excepcional, no dudes en ponerte en contacto.",
  },
  {
    question: "¿El código de los tutoriales está disponible en algún lugar?",
    answer:
      "Sí, siempre que sea posible, enlazaré a un repositorio de GitHub con el código fuente completo de los proyectos o ejemplos que se discuten en las publicaciones. Busca los enlaces dentro de los artículos.",
  },
  {
    question: "¿Cómo puedo mantenerme actualizado con las nuevas publicaciones?",
    answer:
      "Por ahora, la mejor manera es visitar el blog regularmente. Estoy trabajando en implementar un sistema de suscripción por correo electrónico para que puedas recibir notificaciones directamente en tu bandeja de entrada.",
  },
  {
    question: "¿El blog tiene algún tipo de monetización?",
    answer:
      "Actualmente, el blog no tiene anuncios ni contenido patrocinado. Es un proyecto personal mantenido por mí. En el futuro, podría explorar formas de monetización que no comprometan la experiencia del usuario, como cursos o productos digitales.",
  },
    {
    question: "¿Cómo puedo contactarte para colaboraciones o preguntas?",
    answer:
      "La mejor manera de contactarme es a través de la página de 'Contacto'. Respondo a los mensajes tan pronto como me es posible. También puedes encontrarme en LinkedIn y otras redes sociales.",
  },
];


export default function FaqsPage() {
  return (
    <div className="relative min-h-screen w-full bg-background/80 py-24 sm:py-32">
      <div className="aurora-bg">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>
      <main className="relative isolate">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <SplitText
              text="Preguntas Frecuentes (FAQ)"
              tag="h1"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ¿Tienes alguna pregunta? Aquí encontrarás las respuestas a las dudas más comunes sobre el blog y su contenido.
            </p>
          </div>

          <div className="mt-20">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  )
}
