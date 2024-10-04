import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PublicRetro from "./components/publicretro/PublicRetro";
import { publicRetro } from "./components/publicretro/PublicRetro.";
import Sprint from "./components/sprint/Sprint";
import { sprintDetails } from "./components/sprint/SprintDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";

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
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;





// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import PublicRetro from "./components/publicretro/PublicRetro";
// import { publicRetro } from "./components/publicretro/PublicRetro";
// import Sprint from "./components/sprint/Sprint";
// import { sprintDetails } from "./components/sprint/SprintDetails";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LogIn from "./pages/LogIn";

// function App() {
//   return (
//     <Router>
//       <main className="min-h-screen bg-white font-mont text-gray-800 dark:bg-gray-800 dark:text-gray-200">
//         <Navbar />

//         {/* Routes setup */}
//         <Routes>
//           {/* Home route (renders Hero with Sprint and PublicRetro) */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Sprint sprintDetails={sprintDetails} />
//                 <PublicRetro publicRetro={publicRetro} />
//               </>
//             }
//           />

//           {/* LogIn route */}
//           <Route path="/login" element={<LogIn />} />
//         </Routes>

//         <Footer />
//       </main>
//     </Router>
//   );
// }

// export default App;
