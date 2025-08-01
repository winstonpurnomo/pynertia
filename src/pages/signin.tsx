import { Link, useForm } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignIn() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post('/auth/signin', {
      forceFormData: true,
    });
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <Card className="w-full max-w-md rounded-sm shadow-xs">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center font-bold text-2xl">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className={errors.email ? 'border-red-500' : ''}
                id="email"
                onChange={(e) => setData('email', e.target.value)}
                placeholder="name@example.com"
                type="email"
                value={data.email}
              />
              {errors.email && (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                className={errors.password ? 'border-red-500' : ''}
                id="password"
                onChange={(e) => setData('password', e.target.value)}
                type="password"
                value={data.password}
              />
              {errors.password && (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {errors.password}
                </div>
              )}
            </div>

            <Button className="w-full" disabled={processing} type="submit">
              {processing ? 'Signing in...' : 'Sign In'}
            </Button>

            <Link href="/auth/signup">
              <Button className="w-full" variant="ghost">
                Don't have an account? Sign Up
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
