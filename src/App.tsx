import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PublicRetro from "./components/publicretro/PublicRetro";
import { publicRetro } from "./components/publicretro/PublicRetro.";
import Sprint from "./components/sprint/Sprint";
import { sprintDetails } from "./components/sprint/SprintDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import RetroSection from "./pages/RetroSection";
import SignUp from "./pages/SignUp";
import CreateTeam from "./pages/CreateTeam";
import RetroDashboard from "./pages/RetroDashboard";
import InviteTeamMembers from "./pages/InviteTeamMembers";

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white font-mont text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        <Navbar />

        {/* Routes setup */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Sprint sprintDetails={sprintDetails} />
                <PublicRetro publicRetro={publicRetro} />
              </>
            }
          />
          <Route
            path="/sprint"
            element={<Sprint sprintDetails={sprintDetails} />}
          />
          <Route
            path="/publicretro"
            element={<PublicRetro publicRetro={publicRetro} />}
          />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/retrosection" element={<RetroSection />} />
          <Route path="/createteam" element={<CreateTeam />} />
          <Route path="/retrodashboard" element={<RetroDashboard />} />
          <Route path="/inviteteam" element={<InviteTeamMembers />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
