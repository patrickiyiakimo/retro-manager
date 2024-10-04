import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sprint from "./components/sprint/Sprint";
import { sprintDetails } from "./components/sprint/SprintDetails";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 font-mont text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Sprint sprintDetails={sprintDetails} />
      </div>
    </main>
  );
}

export default App;
