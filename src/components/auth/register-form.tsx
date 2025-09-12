import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import StarBorder from './star-border';

interface RegisterFormProps {
  onToggle: () => void;
}

export function RegisterForm({ onToggle }: RegisterFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px] rounded-2xl overflow-hidden">
      <div className="hidden md:flex flex-col justify-between p-10 text-white bg-cover bg-center relative" style={{ backgroundImage: "url('/fotologin.jpg')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="z-10">
          {/* <Icons.awLogo className="h-8 w-auto" /> */}
          <p className="text-2xl font-bold">{"{Dev/Blog}"}</p>
        </div>
        <div className="z-10 mt-auto">
          <h2 className="text-3xl font-bold">Crea tu cuenta</h2>
          <p className="text-zinc-300">
            Únete a nuestra comunidad y comienza tu viaje.
          </p>
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-8 md:p-10 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Regístrate
          </h1>
          <p className="text-muted-foreground mb-6">
            Crea tu cuenta para acceder a todas las funciones.
          </p>

          <form action="/account" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative space-y-2">
                <Icons.user className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input id="first-name" placeholder="Nombre" required className="pl-10" />
              </div>
              <div className="relative space-y-2">
                <Icons.user className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input id="last-name" placeholder="Apellido" required className="pl-10" />
              </div>
            </div>

            <div className="relative space-y-2">
              <Icons.mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" placeholder="Correo electrónico" required className="pl-10" />
            </div>

            <div className="relative space-y-2">
              <Icons.lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="password" type="password" placeholder="Contraseña" required className="pl-10" />
            </div>

            <StarBorder type="submit" className="w-full font-bold text-base">
              Crear cuenta
            </StarBorder>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1a1a1a] px-2 text-muted-foreground">
                O regístrate con
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <StarBorder>
              <Icons.google className="h-5 w-5 mx-auto" />
            </StarBorder>
            <StarBorder>
              <Icons.discord className="h-5 w-5 mx-auto" />
            </StarBorder>
            <StarBorder>
              <Icons.linkedin className="h-5 w-5 mx-auto" />
            </StarBorder>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{' '}
            <button type="button" onClick={onToggle} className="font-bold text-primary hover:underline bg-transparent border-none p-0 cursor-pointer">
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
