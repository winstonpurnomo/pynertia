import { Link } from '@inertiajs/react';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      {/* Header */}
      {/* Removed border-b, bg-background/95, backdrop-blur, and supports-[backdrop-filter]:bg-background/60 */}
      <header className="sticky top-0 z-50 w-full">
        <div className="flex h-16 items-center justify-between px-8">
          <div className="flex items-center space-x-2">
            <Github className="h-6 w-6" />
            <span className="font-bold">Django Inertia Starter Kit</span>
          </div>
          <Button asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="space-y-6">
          <h1 className="font-extrabold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Django Inertia Starter Kit
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            modern React-Python SPA monolith
          </p>

          <Button asChild size="lg">
            <Link className="flex items-center space-x-2" href="/auth/signin">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
