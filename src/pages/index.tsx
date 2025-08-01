import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl text-red-500">Hello from vite!</h1>
      <Button
        onClick={() =>
          toast('Hello from sonner!', {
            action: (
              <Button onClick={() => toast.dismiss()} variant="outline">
                Dismiss
              </Button>
            ),
          })
        }
      >
        Click me
      </Button>
    </div>
  );
}
