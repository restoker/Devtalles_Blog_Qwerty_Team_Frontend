
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function BlogDockerPage() {
  return (
    <div className="relative min-h-screen w-full bg-background/80">
      <div className="aurora-bg">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>
      <main className="relative isolate pt-24 sm:pt-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-16">
          <article className="space-y-12">
            <header className="text-center">
              <p className="text-base font-semibold leading-7 text-primary">DevOps</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Docker: Contenedores para un Desarrollo Consistente
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Descubre cómo Docker simplifica el desarrollo y despliegue de aplicaciones empaquetándolas en contenedores ligeros y portátiles.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4">
                <div className="flex items-center gap-x-2">
                  <Image 
                    src="https://picsum.photos/seed/author/40/40" 
                    alt="Foto del autor"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-50"
                    data-ai-hint="person portrait"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-foreground">
                      Alex Rivera
                    </p>
                    <p className="text-muted-foreground">Desarrollador y Escritor</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Publicado el 20 de Julio, 2024 &middot; 8 min de lectura
              </p>
            </header>

            <figure>
              <Image
                className="w-full rounded-2xl object-cover"
                src="https://picsum.photos/seed/blog4/1200/600"
                alt="Logo de Docker con contenedores"
                width={1200}
                height={600}
                data-ai-hint="docker containers logo"
              />
            </figure>

            <div className="prose prose-invert lg:prose-xl max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80">
              <p>
                Si alguna vez has escuchado la frase "¡Pero en mi máquina sí funciona!", entonces necesitas conocer Docker. Docker es una plataforma de código abierto que resuelve este problema (y muchos otros) mediante el uso de **contenedores**.
              </p>

              <h2>¿Qué es un Contenedor?</h2>
              <p>
                Imagina un contenedor como una caja ligera y portátil que contiene todo lo que una aplicación necesita para funcionar: el código, el entorno de ejecución, las librerías, las variables de entorno y los archivos de configuración. Este contenedor es independiente del sistema operativo anfitrión.
              </p>
              
              <p>
                A diferencia de las máquinas virtuales, que virtualizan un sistema operativo completo, los contenedores virtualizan el propio sistema operativo. Esto los hace increíblemente ligeros, rápidos de iniciar y eficientes en el uso de recursos.
              </p>
              
              <div className="not-prose my-8">
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery19/800/500"
                        alt="Contenedores de carga en un puerto"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="shipping containers port"
                      />
                    </CarouselItem>
                    <CarouselItem>
                       <Image
                        src="https://picsum.photos/seed/gallery20/800/500"
                        alt="Diagrama de arquitectura de Docker"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="docker architecture diagram"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery21/800/500"
                        alt="Terminal con comandos de Docker"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="docker commands terminal"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <h2>Principales Ventajas de Docker</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>Portabilidad:</strong> Construye una vez, ejecuta en cualquier lugar. Un contenedor que funciona en tu portátil de desarrollo funcionará exactamente igual en producción.</li>
                <li><strong>Consistencia:</strong> Elimina las diferencias entre los entornos de desarrollo, pruebas y producción.</li>
                <li><strong>Aislamiento:</strong> Las aplicaciones en diferentes contenedores están aisladas entre sí, mejorando la seguridad y evitando conflictos de dependencias.</li>
                <li><strong>Eficiencia:</strong> Los contenedores comparten el kernel del sistema operativo anfitrión, lo que los hace mucho más eficientes en recursos que las máquinas virtuales.</li>
                <li><strong>Microservicios:</strong> Docker es la tecnología perfecta para construir y desplegar arquitecturas de microservicios, donde cada servicio se ejecuta en su propio contenedor.</li>
              </ul>
              
              <h2>El `Dockerfile`: La Receta de tu Contenedor</h2>
              <p>
                Para construir una imagen de Docker (la plantilla para tus contenedores), se utiliza un archivo de texto llamado `Dockerfile`. Este archivo contiene una serie de instrucciones paso a paso.
              </p>

              <div className="not-prose my-6">
                <pre className="rounded-xl bg-card border border-border p-4 text-sm overflow-x-auto">
                  <code className="font-mono">
                    {`
# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto que la aplicación usará
EXPOSE 3000

# El comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
`}
                  </code>
                </pre>
              </div>

              <blockquote>
                <p>Docker ha democratizado el uso de contenedores, haciéndolo accesible para todos los desarrolladores y cambiando fundamentalmente la forma en que construimos, enviamos y ejecutamos software.</p>
              </blockquote>

              <p>
                Empezar a usar Docker puede parecer intimidante al principio, pero la inversión de tiempo se paga con creces en productividad, consistencia y una menor cantidad de dolores de cabeza durante el despliegue. Es una herramienta esencial en el arsenal de cualquier desarrollador moderno.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
