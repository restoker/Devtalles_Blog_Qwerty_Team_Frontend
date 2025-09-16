import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function BlogComponentesReactPage() {
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
              <p className="text-base font-semibold leading-7 text-primary">React</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                El Poder de los Componentes en React
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Aprende a pensar en componentes reutilizables y a construir interfaces de usuario complejas de manera declarativa y eficiente.
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
                Publicado el 18 de Julio, 2024 &middot; 7 min de lectura
              </p>
            </header>

            <figure>
              <Image
                className="w-full rounded-2xl object-cover"
                src="https://picsum.photos/seed/blog3/1200/600"
                alt="Diagrama de componentes de React"
                width={1200}
                height={600}
                data-ai-hint="react code components"
              />
            </figure>

            <div className="prose prose-invert lg:prose-xl max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80">
              <p>
                La idea central de React es simple, pero revolucionaria: construir interfaces de usuario (UI) a partir de pequeñas piezas aisladas y reutilizables llamadas **componentes**. En lugar de pensar en una página web como un gran bloque de HTML, React nos anima a descomponerla en `Header`, `Sidebar`, `Article`, `Button`, etc.
              </p>

              <h2>¿Qué es un Componente?</h2>
              <p>
                En su forma más simple, un componente es una función de JavaScript que devuelve JSX (una sintaxis similar a HTML). Estos componentes pueden tener su propio estado interno, manejar la lógica y recibir datos a través de `props`.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>Son reutilizables:</strong> Un componente `Button` se puede usar en toda tu aplicación, siempre con el mismo estilo y comportamiento.</li>
                <li><strong>Son componibles:</strong> Puedes construir componentes complejos a partir de otros más simples. Una `Card` puede estar compuesta por un `Image`, un `Title` y un `Button`.</li>
                <li><strong>Son aislados:</strong> Los estilos y la lógica de un componente no afectan a otros, lo que facilita enormemente la depuración y el mantenimiento.</li>
              </ul>
              
              <h2>Componentes de Presentación vs. Contenedores</h2>
              <p>
                Una práctica común es dividir los componentes en dos categorías:
              </p>
              <ul>
                <li><strong>Componentes de Presentación (Dumb):</strong> Se preocupan por cómo se ven las cosas. Reciben datos vía `props` y los renderizan. No suelen tener estado propio. Por ejemplo, un `UserProfile` que solo muestra un nombre y una foto.</li>
                <li><strong>Componentes Contenedores (Smart):</strong> Se preocupan por cómo funcionan las cosas. Manejan el estado, obtienen datos de una API y pasan esos datos a los componentes de presentación.</li>
              </ul>
              
              <div className="not-prose my-8">
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery7/800/500"
                        alt="Un diagrama de componentes de interfaz de usuario"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="UI component diagram"
                      />
                    </CarouselItem>
                    <CarouselItem>
                       <Image
                        src="https://picsum.photos/seed/gallery8/800/500"
                        alt="Fragmento de código de React en un editor"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="react code snippet"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery9/800/500"
                        alt="Un sistema de diseño con componentes reutilizables"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="design system components"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              
              <h2>Ejemplo: Componiendo una UI</h2>
              <p>
                Imagina que queremos crear una lista de tarjetas de perfil. Podríamos descomponerlo así:
              </p>
               <div className="not-prose my-6">
                <pre className="rounded-xl bg-card border border-border p-4 text-sm overflow-x-auto">
                  <code className="font-mono">
                    {`
// Componente de Presentación
function ProfileCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
    </div>
  );
}

// Componente Contenedor
function ProfileList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Aquí se obtendrían los datos de una API
    fetchUsers().then(data => setUsers(data));
  }, []);

  return (
    <div className="profile-list">
      {users.map(user => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
`}
                  </code>
                </pre>
              </div>

              <p>
                Esta separación de responsabilidades es la clave de la escalabilidad en React. El componente `ProfileCard` no sabe ni le importa de dónde vienen los datos, solo cómo mostrarlos. El `ProfileList` se encarga de la lógica de datos.
              </p>

              <blockquote>
                <p>Pensar en React te obliga a diseñar primero la estructura de tu UI, en lugar de empezar a escribir código imperativo sin un plan.</p>
              </blockquote>

              <p>
                Adoptar una mentalidad basada en componentes transforma la forma en que abordamos el desarrollo frontend. Nos permite crear sistemas de diseño coherentes, escalar aplicaciones complejas y colaborar en equipo de manera mucho más eficiente.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
