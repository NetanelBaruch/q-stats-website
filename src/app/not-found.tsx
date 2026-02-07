import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-display font-bold gradient-text-red">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold">Page Not Found</h1>
      <p className="mt-2 text-text-secondary max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
