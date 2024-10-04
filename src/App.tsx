// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import PublicRetro from "./components/retros/PublicRetro";
// import Retro from "./components/retros/Retro";
// import Sprint from "./components/sprint/Sprint";
// import { sprintDetails } from "./components/sprint/SprintDetails";
// // import { sprintDetails } from "./components/sprint/SprintDetails";
// import { pubRetro as publicRetro } from "./components/retros/PublicRetro";

// function App() {
//   return (
//     <main className="min-h-screen bg-gray-100 font-mont text-gray-800 dark:bg-gray-800 dark:text-gray-200">
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <Hero />
//       </div>
//       <div>
//         <Sprint sprintDetails={sprintDetails} />
//       </div>
//       <div>
//         <PublicRetro publicRetro={publicRetro}/>
//         {/* <Retro /> */}
//       </div>
//     </main>
//   );
// }

// export default App;


import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PublicRetro from "./components/publicretro/PublicRetro";
import { publicRetro } from "./components/publicretro/PublicRetro.";
// import { publicRetro } from "./components/publicretro/PublicRetro.";
// import { publicRetroData } from "./components/publicretro/PublicRetro.";
import Sprint from "./components/sprint/Sprint";
import { sprintDetails } from "./components/sprint/SprintDetails";

function App() {
  return (
    <main className="min-h-screen bg-white font-mont text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Sprint sprintDetails={sprintDetails} />
      </div>
      <div>
        <PublicRetro publicRetro={publicRetro} />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div>
        <PublicRetro publicRetro={publicRetro} />
      </div>
      <div>
        <PrivateRetro privateRetro={privateRetro} />
      </div> */}
    </main>
  );
}

export default App;
