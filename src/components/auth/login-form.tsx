import { Input } from '@/components/ui/input';
import StarBorder from './star-border';
import { loginSchema } from '@/types/login-schema';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useAction } from "next-safe-action/hooks";
import { loginWithEmailAndPasswordAction } from '@/server/actions/login-action';
import clsx from 'clsx';
import { toast } from 'sonner';
import { CheckCircleIcon, FaceFrownIcon } from '@heroicons/react/24/outline';
import SocialForm from './Social-form';

interface LoginFormProps {
  onToggle: () => void;
}

export function LoginForm({ onToggle }: LoginFormProps) {

  const form = useForm<z.infer<typeof loginSchema>>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const { execute, status } = useAction(loginWithEmailAndPasswordAction, {
    onSuccess: ({ data }) => {
      if (data.ok) {
        toast.success(data.msg || '', {
          classNames: {
            toast: 'text-white bg-lime-600',
            closeButton: 'bg-lime-600 text-red-700'
          },
          closeButton: true,
          position: 'top-right',
          // duration: Infinity,
          icon: <CheckCircleIcon className='animate-bounce' />,
          duration: 2000,
        });
        window.location.replace('/');
      }

      if (!data.ok) {
        toast.error(data.msg || '', {
          classNames: {
            toast: 'text-white bg-red-500',
            closeButton: 'bg-red-500 text-red-700'
          },
          closeButton: true,
          position: 'top-right',
          // duration: Infinity,
          icon: <FaceFrownIcon className='animate-bounce' />,
          duration: 2000,
        });
      }
    },
    onError: () => {
      toast.error('Algo salio mal');
    }
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // console.log(values);
    execute(values);
  }

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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative space-y-2">
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="email"
                          placeholder="Your email"
                          required
                          className=""
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
              </div>
              <div className="relative space-y-2">
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          // id="password"
                          placeholder="Your password"
                          required
                          type="password"
                          className=""
                        />
                      </FormControl>
                      <FormMessage className='text-red-500' />
                    </FormItem>
                  )}
                />
              </div>
              <StarBorder
                type="submit"
                className={clsx(
                  'w-full font-bold text-base cursor-pointer focus:outline-none',
                  status === 'executing' && 'opacity-50 cursor-not-allowed',
                  !form.formState.isValid && 'opacity-50 cursor-not-allowed'
                )}
                bgColor={status === 'executing' || !form.formState.isValid ? 'bg-[#2d2d2d]' : 'bg-purple-600'}
                position="left"
                disabled={status === 'executing' || !form.formState.isValid}
              >
                {status === 'executing' ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </StarBorder>
            </form>
          </Form>

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

          <SocialForm />

          <p className="mt-6 text-center text-sm text-muted-foreground">
            ¿No tienes una cuenta?{' '}
            <button
              type="button"
              onClick={onToggle}
              className="text-primary hover:underline bg-transparent border-none p-0 font-bold cursor-pointer"
            >
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-between p-10 text-white bg-cover bg-center relative" style={{ backgroundImage: "url('/fotosingup.jpg')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="z-10">
          {/* <Icons.awLogo className="h-8 w-auto" /> */}
          <p className="text-2xl font-bold">{"{Dev/Blog}"}</p>
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
