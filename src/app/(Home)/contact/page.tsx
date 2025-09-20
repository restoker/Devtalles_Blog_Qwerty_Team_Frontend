
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Map, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import StarBorder from "@/components/auth/star-border";
import SplitText from "@/components/SplitText";


export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-background/80 py-24 sm:py-32">
      <div className="aurora-bg">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>
      <main className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
             <SplitText
              text="Contacto"
              tag="h1"
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ¿Tienes una pregunta, una propuesta o simplemente quieres saludar? Me encantaría saber de ti.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="lg:order-last">
                <div className="rounded-2xl bg-card/50 p-8 backdrop-blur-sm border border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Envíame un mensaje</h2>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="sr-only">Nombre</Label>
                            <Input id="name" name="name" type="text" autoComplete="name" required placeholder="Tu Nombre" />
                        </div>
                        <div>
                            <Label htmlFor="email" className="sr-only">Email</Label>
                            <Input id="email" name="email" type="email" autoComplete="email" required placeholder="Tu Correo Electrónico" />
                        </div>
                        <div>
                            <Label htmlFor="message" className="sr-only">Mensaje</Label>
                            <Textarea id="message" name="message" rows={5} required placeholder="Tu Mensaje" />
                        </div>
                        <div>
                            <StarBorder type="submit" className="w-full font-bold text-base" position="left">
                              Enviar Mensaje
                            </StarBorder>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Información de Contacto
              </h2>
              <p className="text-lg text-muted-foreground">
                También puedes encontrarme en estos canales. Estoy abierto a colaboraciones, charlas y cualquier oportunidad interesante en el mundo tech.
              </p>
              <div className="space-y-6 text-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:alex.rivera@devblog.com" className="text-muted-foreground hover:text-primary transition-colors">
                      alex.rivera@devblog.com
                    </a>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">(Disponible a petición)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Map className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-muted-foreground">Planeta Tierra (Remoto)</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Sígueme en Redes
                </h3>
                <div className="flex space-x-6">
                   <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-7 w-7" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-7 w-7" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-7 w-7" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
