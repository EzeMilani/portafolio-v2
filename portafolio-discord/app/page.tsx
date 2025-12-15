export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary mb-4">
        Ezequiel Milani
      </h1>
      <h2 className="text-2xl text-subtext font-sans">
        Portafolio en construcción...
      </h2>
      <div className="mt-8 p-4 border border-shadow rounded-lg bg-sidebar">
        <p className="text-text">
          Si ves este fondo oscuro (#1A1A2E) y el título azul (#4A90E2),
          <br />
          ¡Tailwind está configurado correctamente! 🚀
        </p>
      </div>
    </main>
  );
}
