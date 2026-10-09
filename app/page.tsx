export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-4">
      <button 
        id="btn-cta-principal" 
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Solicitar información
      </button>

      <a 
        id="btn-agendar-reunion" 
        href="https://calendly.com" 
        className="bg-green-600 text-white px-4 py-2 rounded text-center"
      >
        Agendar reunión
      </a>
    </main>
  );
}