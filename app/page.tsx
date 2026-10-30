export default function Home() {
  // This function handles the main landing page
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <h1 className="text-6xl font-bold text-white">Welcome to MyApp</h1>
      
      {/* TODO: Implement the actual dashboard here */}
      <p className="mt-4 text-xl text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button onClick={() => {}} className="mt-8 rounded-3xl bg-white px-8 py-4 font-bold text-purple-500 shadow-2xl">
        Get Started
      </button>
    </main>
  );
}
