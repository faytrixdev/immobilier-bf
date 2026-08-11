import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-primary-900">404</h1>
      <p className="mt-4 text-lg text-primary-600">Page introuvable</p>
      <Link href="/" className="btn-primary mt-6">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
