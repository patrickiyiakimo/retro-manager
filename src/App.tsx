
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen text-gray-800 dark:bg-gray-800 bg-sky-100 dark:text-gray-200">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </main>
  );
}

export default App;
