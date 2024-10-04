
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sprint from "./components/Sprint";
import { sprintDetails } from "./components/SprintDetails";

function App() {
  return (
    <main className="min-h-screen text-gray-800 dark:bg-gray-800 bg-gray-100 dark:text-gray-200 font-mont">
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
