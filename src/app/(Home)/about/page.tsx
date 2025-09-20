
'use client';
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SplitText from "@/components/SplitText";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL", 
  "Python", "Docker", "Kubernetes", "GenAI", "Tailwind CSS",
  "DevOps", "Bases de Datos", "Arquitectura"
];

export default function AboutPage() {

  return (
    <div className="relative min-h-screen w-full bg-background/80 py-24 sm:py-32">
      <div className="aurora-bg">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>
      <main className="relative isolate">
        {/* Encabezado */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
             <SplitText
              text="Sobre {Dev/Blog}"
              tag="h1"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Un espacio dedicado a explorar el universo del desarrollo de software, desde el frontend hasta el backend, pasando por la IA y las mejores prácticas de la industria.
            </p>
          </div>
        </div>

        {/* Sección Principal */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-start">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl shadow-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Concepto abstracto de desarrollo de software"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                data-ai-hint="abstract technology code"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-4xl font-bold">{"{Dev/Blog}"}</h2>
                <p className="text-lg text-primary">Código, Creatividad, Comunidad</p>
              </div>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Nuestra Misión
              </h2>
              <p>
                En {"{Dev/Blog}"}, creemos que el conocimiento debe ser libre, accesible y compartido. Nuestra misión es desmitificar conceptos complejos del desarrollo de software, presentándolos de una manera clara, práctica y atractiva. Queremos ser el puente entre la teoría y la aplicación real, ayudando a los desarrolladores a crecer y a superar sus desafíos técnicos.
              </p>
              <p>
                Este blog nació de una profunda pasión por aprender, enseñar y, sobre todo, construir. Es un espacio para que tanto desarrolladores novatos como experimentados puedan encontrar contenido valioso, descubrir nuevas herramientas y mantenerse al día con las tendencias de una industria que nunca deja de evolucionar.
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-foreground pt-4">
                Nuestra Filosofía
              </h3>
              <p>
                Fomentamos la curiosidad, el debate y la colaboración. Creemos en el poder del código abierto y en la construcción de una comunidad sólida y solidaria. Cada artículo, tutorial y guía está diseñado no solo para informar, sino para inspirar a los lectores a experimentar, a fallar, a aprender y a llevar sus habilidades al siguiente nivel.
              </p>
            </div>
          </div>
        </div>

        {/* Galería de Imágenes */}
        <div className="my-24 sm:my-32">
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
                 <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Un Vistazo al Mundo del Desarrollo</h2>
                 <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Desde la colaboración en equipo hasta las complejas líneas de código, el desarrollo de software es un campo multifacético. Esta galería captura algunos de sus momentos.
                </p>
            </div>
            <div className="not-prose my-16">
              <Carousel 
                className="w-full max-w-4xl mx-auto" 
                opts={{ loop: true }}
                plugins={[]}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Un editor de código con sintaxis resaltada" width={800} height={500} className="w-full rounded-lg object-cover" data-ai-hint="code editor screen" />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Un equipo de desarrolladores colaborando" width={800} height={500} className="w-full rounded-lg object-cover" data-ai-hint="team collaboration office" />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Diagrama de arquitectura en una pizarra" width={800} height={500} className="w-full rounded-lg object-cover" data-ai-hint="whiteboard architecture" />
                  </CarouselItem>
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Servidores en un data center" width={800} height={500} className="w-full rounded-lg object-cover" data-ai-hint="data center servers" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12"/>
              </Carousel>
            </div>
        </div>

        {/* Tecnologías y Autor */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                <div>
                     <h3 className="text-3xl font-bold tracking-tight text-foreground">
                        Tecnologías que Exploramos
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Nos mantenemos a la vanguardia, explorando y explicando un amplio espectro de tecnologías para ofrecer una perspectiva completa del ecosistema de desarrollo actual.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                            {tech}
                        </Badge>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl bg-card/50 p-8 backdrop-blur-sm border border-border">
                    <div className="flex items-center gap-6">
                        <Image 
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Retrato de Alex Rivera"
                            width={100}
                            height={100}
                            className="rounded-full shadow-lg"
                            data-ai-hint="person portrait"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-foreground">Conoce al Autor</h3>
                            <p className="text-lg text-primary">Alex Rivera</p>
                        </div>
                    </div>
                    <p className="mt-6 text-muted-foreground">
                        "Soy un desarrollador y comunicador apasionado por hacer la tecnología más humana. Este blog es mi contribución a la comunidad que tanto me ha dado. ¿Tienes alguna pregunta o idea? ¡Hablemos!"
                    </p>
                    <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary group">
                        Contacta conmigo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>

      </main>
    </div>
  )
}
