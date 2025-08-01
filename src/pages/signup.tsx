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

export default function SignUp() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    post('/auth/signup', {
      forceFormData: true,
    });
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <Card className="w-full max-w-md rounded-sm shadow-xs">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center font-bold text-2xl">
            Welcome
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className={errors.name ? 'border-red-500' : ''}
                id="name"
                onChange={(e) => setData('name', e.target.value)}
                placeholder="John Doe"
                type="text"
                value={data.name}
              />
              {errors.name && (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertCircle className="mr-1 h-4 w-4" />
                  {errors.name}
                </div>
              )}
            </div>

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
              {processing ? 'Signing up...' : 'Sign Up'}
            </Button>

            <Link href="/auth/signin">
              <Button className="w-full" variant="ghost">
                Already have an account? Sign In
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
