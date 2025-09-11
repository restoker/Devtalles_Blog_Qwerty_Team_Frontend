import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import StarBorder from './star-border';

interface LoginFormProps {
  onToggle: () => void;
}

export function LoginForm({ onToggle }: LoginFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px] rounded-2xl overflow-hidden">
       <div className="bg-[#1a1a1a] p-8 md:p-10 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Inicia sesión
          </h1>
          <p className="text-muted-foreground mb-6">
            Bienvenido de nuevo.
          </p>

          <form action="/account" className="space-y-4">
            <div className="relative space-y-2">
              <Icons.mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" placeholder="Correo electrónico" required className="pl-10" />
            </div>

            <div className="relative space-y-2">
               <Icons.lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="password" type="password" placeholder="Contraseña" required className="pl-10" />
            </div>
            
            <StarBorder type="submit" className="w-full font-bold text-base" position="left">
              Iniciar sesión
            </StarBorder>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1a1a1a] px-2 text-muted-foreground">
                O inicia sesión con
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <StarBorder position="left">
                <Icons.google className="h-5 w-5 mx-auto" />
            </StarBorder>
            <StarBorder position="left">
                <Icons.discord className="h-5 w-5 mx-auto" />
            </StarBorder>
             <StarBorder position="left">
                <Icons.linkedin className="h-5 w-5 mx-auto" />
            </StarBorder>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿No tienes una cuenta?{' '}
            <button type="button" onClick={onToggle} className="font-medium text-primary hover:underline bg-transparent border-none p-0">
              Regístrate
            </button>
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-between p-10 text-white bg-cover bg-center relative" style={{backgroundImage: "url('/fotosingup.jpg')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="z-10">
          <Icons.awLogo className="h-8 w-auto" />
        </div>
        <div className="z-10 mt-auto">
          <h2 className="text-3xl font-bold">Bienvenido de nuevo</h2>
          <p className="text-zinc-300">
            Estamos contentos de verte otra vez.
          </p>
        </div>
      </div>
    </div>
  );
}
