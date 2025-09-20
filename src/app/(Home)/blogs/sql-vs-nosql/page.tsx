import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function BlogSqlVsNoSqlPage() {
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
              <p className="text-base font-semibold leading-7 text-primary">Backend</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Bases de Datos SQL vs. NoSQL: ¿Cuál elegir?
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Entiende las diferencias clave, ventajas y casos de uso de las bases de datos relacionales y no relacionales para tomar la mejor decisión para tu proyecto.
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
                Publicado el 25 de Julio, 2024 &middot; 7 min de lectura
              </p>
            </header>

            <figure>
              <Image
                className="w-full rounded-2xl object-cover"
                src="https://picsum.photos/seed/blog6/1200/600"
                alt="Diagrama comparando bases de datos"
                width={1200}
                height={600}
                data-ai-hint="database server diagram"
              />
            </figure>

            <div className="prose prose-invert lg:prose-xl max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80">
              <p>
                Una de las decisiones arquitectónicas más importantes al iniciar un nuevo proyecto es la elección de la base de datos. La batalla principal se libra entre dos grandes paradigmas: SQL y NoSQL. No se trata de cuál es "mejor", sino de cuál es la herramienta adecuada para el trabajo que tienes entre manos.
              </p>

              <h2>SQL (Bases de Datos Relacionales)</h2>
              <p>
                Las bases de datos SQL (Structured Query Language) han sido el estándar durante décadas. Piensa en ellas como una colección de hojas de cálculo interconectadas. Los datos se almacenan en **tablas**, que tienen **filas** (registros) y **columnas** (atributos) con un esquema estricto y predefinido.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>Ejemplos:</strong> PostgreSQL, MySQL, SQL Server, Oracle.</li>
                <li><strong>Estructura:</strong> Esquema rígido, datos en tablas relacionadas.</li>
                <li><strong>Consistencia:</strong> Siguen las propiedades ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad), lo que garantiza la fiabilidad de las transacciones.</li>
                <li><strong>Ideal para:</strong> Aplicaciones que requieren alta integridad de datos y transacciones complejas, como sistemas bancarios, comercio electrónico o cualquier aplicación donde los datos están altamente estructurados y relacionados.</li>
              </ul>
              
              <div className="not-prose my-8">
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery16/800/500"
                        alt="Una sala de servidores de bases de datos"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="database server room"
                      />
                    </CarouselItem>
                    <CarouselItem>
                       <Image
                        src="https://picsum.photos/seed/gallery17/800/500"
                        alt="Un diagrama de entidad-relación en una pizarra"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="entity relationship diagram"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery18/800/500"
                        alt="Código SQL en un editor"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="sql code editor"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <h2>NoSQL (Bases de Datos No Relacionales)</h2>
              <p>
                NoSQL ("Not Only SQL") surgió como una respuesta a las necesidades de las aplicaciones web a gran escala. Son mucho más flexibles y escalables horizontalmente. En lugar de tablas, utilizan diferentes modelos de datos.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>Tipos y Ejemplos:</strong>
                    <ul>
                      <li>**Documentales:** MongoDB, CouchDB (datos en documentos tipo JSON).</li>
                      <li>**Clave-Valor:** Redis, DynamoDB (diccionarios gigantes).</li>
                      <li>**Columnares:** Cassandra, HBase (optimizadas para consultas sobre grandes volúmenes de datos).</li>
                      <li>**Grafos:** Neo4j, Amazon Neptune (para datos altamente conectados como redes sociales).</li>
                    </ul>
                </li>
                <li><strong>Estructura:</strong> Esquema dinámico o inexistente.</li>
                <li><strong>Escalabilidad:</strong> Generalmente escalan horizontalmente (añadiendo más servidores), lo que las hace perfectas para big data.</li>
                <li><strong>Ideal para:</strong> Datos no estructurados o semi-estructurados, aplicaciones que necesitan una latencia muy baja, y sistemas que manejan grandes volúmenes de datos, como redes sociales, aplicaciones de IoT y analítica en tiempo real.</li>
              </ul>

              <h2>La Decisión: ¿Cómo Elegir?</h2>
              
              <blockquote>
                <p>No hay una bala de plata. La elección depende de tu caso de uso específico.</p>
              </blockquote>

              <p>Hazte estas preguntas:</p>
              <ul>
                <li><strong>¿Están mis datos altamente relacionados?</strong> Si tienes usuarios, pedidos, productos y necesitas hacer `JOINs` complejos, **SQL** es probablemente una apuesta segura.</li>
                <li><strong>¿Necesito flexibilidad máxima y un desarrollo rápido?</strong> Si tu esquema de datos cambia constantemente o trabajas con datos heterogéneos, **NoSQL** brilla.</li>
                <li><strong>¿Cuál es mi prioridad, consistencia o disponibilidad?</strong> Para transacciones financieras, la consistencia de **SQL** es crucial. Para un feed de red social, la disponibilidad de **NoSQL** es más importante.</li>
                <li><strong>¿Cómo espero escalar?</strong> Si prevés un crecimiento masivo y necesitas distribuir tu base de datos en muchos servidores, **NoSQL** suele ser más fácil de escalar horizontalmente.</li>
              </ul>

              <p>
                Hoy en día, es común ver arquitecturas híbridas (polyglot persistence) donde las empresas utilizan tanto bases de datos SQL como NoSQL para diferentes partes de su aplicación, aprovechando lo mejor de ambos mundos.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
