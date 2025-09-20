import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function BlogJavaScriptModernoPage() {
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
              <p className="text-base font-semibold leading-7 text-primary">Frontend</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                JavaScript Moderno: Más Allá de ES6
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Explora las características más recientes de JavaScript que están cambiando la forma en que escribimos código para la web.
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
                    <p className="text-muted-foreground">Desarrollador y Escritor</p>                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Publicado el 15 de Julio, 2024 &middot; 6 min de lectura
              </p>
            </header>

            <figure>
              <Image
                className="w-full rounded-2xl object-cover"
                src="https://picsum.photos/seed/blog2/1200/600"
                alt="Código de JavaScript en un editor"
                width={1200}
                height={600}
                data-ai-hint="javascript code screen"
              />
            </figure>

            <div className="prose prose-invert lg:prose-xl max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground/90 prose-a:text-primary hover:prose-a:text-primary/80">
              <p>
                Desde la estandarización de ES6 (ECMAScript 2015), JavaScript ha estado en constante evolución. Cada año, el comité TC39 introduce nuevas características que hacen el lenguaje más potente, legible y seguro. Si bien muchos desarrolladores dominan las `arrow functions` y las `promises`, hay un mundo de funcionalidades más allá de ES6 que merecen nuestra atención.
              </p>

              <h2>Encadenamiento Opcional (`?.`)</h2>
              <p>
                Una de las adiciones más celebradas. ¿Cansado de escribir `if (user && user.address && user.address.street)`? El encadenamiento opcional simplifica esto drásticamente.
              </p>
               <div className="not-prose my-6">
                <pre className="rounded-xl bg-card border border-border p-4 text-sm overflow-x-auto">
                  <code className="font-mono">
                    {`
const user = {
  name: 'Ana',
  // address no está definido
};

// Sin encadenamiento opcional (arrojaría un error)
// const street = user.address.street; 

// Con encadenamiento opcional (devuelve undefined)
const street = user?.address?.street;
console.log(street); // undefined
`}
                  </code>
                </pre>
              </div>
              
              <h2>Operador de Fusión Nulish (`??`)</h2>
              <p>
                A menudo confundido con el operador OR (`||`), el `nullish coalescing` es más estricto. Solo devuelve el operando derecho si el izquierdo es `null` o `undefined`, no si es `false`, `0`, o `''`.
              </p>
               <div className="not-prose my-6">
                <pre className="rounded-xl bg-card border border-border p-4 text-sm overflow-x-auto">
                  <code className="font-mono">
                    {`
const quantity = 0;

const displayQuantityOR = quantity || 10; // 10 (incorrecto, 0 es una cantidad válida)
const displayQuantityNullish = quantity ?? 10; // 0 (correcto)
`}
                  </code>
                </pre>
              </div>

              <h2>`Promise.allSettled()`</h2>
              <p>
                A diferencia de `Promise.all()`, que se rechaza tan pronto como una de las promesas falla, `Promise.allSettled()` espera a que todas las promesas se resuelvan (ya sea cumplidas o rechazadas). Esto es increíblemente útil cuando necesitas el resultado de múltiples operaciones asíncronas, independientemente de si algunas fallaron.
              </p>
              
               <div className="not-prose my-8">
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery4/800/500"
                        alt="Un desarrollador trabajando en una laptop"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="developer laptop"
                      />
                    </CarouselItem>
                    <CarouselItem>
                       <Image
                        src="https://picsum.photos/seed/gallery5/800/500"
                        alt="Líneas de código en un monitor oscuro"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="dark code monitor"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="https://picsum.photos/seed/gallery6/800/500"
                        alt="Logos de frameworks de JavaScript"
                        width={800}
                        height={500}
                        className="w-full rounded-lg object-cover"
                        data-ai-hint="javascript frameworks"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <h2>Campos de Clase Privados (`#`)</h2>
              <p>
                Durante años, la "privacidad" en las clases de JavaScript se simulaba con convenciones como el guion bajo (`_privateField`). Ahora, es una característica nativa del lenguaje usando el prefijo `#`.
              </p>
              
               <div className="not-prose my-6">
                <pre className="rounded-xl bg-card border border-border p-4 text-sm overflow-x-auto">
                  <code className="font-mono">
                    {`
class Wallet {
  #balance = 0; // Campo privado

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const myWallet = new Wallet();
myWallet.deposit(100);
console.log(myWallet.getBalance()); // 100
// console.log(myWallet.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
`}
                  </code>
                </pre>
              </div>

              <blockquote>
                <p>"Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos puedan entender."</p>
                <footer>- Martin Fowler</footer>
              </blockquote>

              <p>
                Adoptar estas características modernas no solo te hace un desarrollador más eficiente, sino que también mejora la calidad y mantenibilidad de tu código. ¡El futuro de JavaScript ya está aquí!
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
