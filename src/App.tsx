
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sprint from "./components/Sprint";

function App() {
  return (
    <main className="min-h-screen text-gray-800 dark:bg-gray-800 bg-sky-100 dark:text-gray-200">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Sprint />
      </div>
    </main>
  );
}

export default App;
