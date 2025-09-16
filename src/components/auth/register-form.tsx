import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import StarBorder from './star-border';
import { useForm } from 'react-hook-form';
import { registerSchema } from '@/types/register-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useAction } from 'next-safe-action/hooks';
import { registerUserAction } from '@/server/actions/register-user-action';
import clsx from 'clsx';

interface RegisterFormProps {
  onToggle: () => void;
}

export function RegisterForm({ onToggle }: RegisterFormProps) {

  const form = useForm<z.infer<typeof registerSchema>>({
    mode: 'all',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
    }
  })

  const { execute, status } = useAction(registerUserAction, {
    onSuccess: () => {
      console.log('success');
    },
    onError: () => {
      console.log('error');
    }
  })

  function onSubmit(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // execute(values);
  }

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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative space-y-2">
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field}
                            id="first-name"
                            placeholder="Your name"
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
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input {...field}
                            id="last-name"
                            placeholder="Your lastname"
                            required
                            className=""
                          />
                        </FormControl>
                        <FormMessage className='text-red-500' />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="relative space-y-2">
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field}
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
                  'w-full font-bold text-base cursor-pointer',
                  status === 'executing' && 'opacity-50 cursor-not-allowed',
                  !form.formState.isValid && 'opacity-50 cursor-not-allowed',
                )}
                bgColor={status === 'executing' || !form.formState.isValid ? 'bg-[#2d2d2d]' : 'bg-purple-600'}
                position="left"
                disabled={status === 'executing' || !form.formState.isValid}
              >
                {status === 'executing' ? 'Registrando...' : 'Registrarse'}
              </StarBorder>
            </form>
          </Form>

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
