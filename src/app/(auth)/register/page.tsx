import { AuthForm } from '@/components/auth/auth-form';
import { auth } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  const session = await auth();
  if (session) {
    redirect('/')
  }
  return <AuthForm />;
}
