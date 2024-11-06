// import React from "react";
// import { mission } from "./Mission"; // Assuming this is the correct path
// import { Card } from "flowbite-react";

// export default function Mission() {
//   return (
//     <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
//       {mission.map((item, index) => (
//         <Card key={index} className="max-w-sm">
//           <figure>
//             <img
//               src={item.image}
//               alt={`${item.title} logo`}
//               className="rounded-t-lg"
//             />
//           </figure>
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {item.title}
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             {item.body}
//           </p>
//         </Card>
//       ))}
//     </div>
//   );
// }





// import React from "react";
// import { Card } from "flowbite-react";

// export default function OurMission({ mission }) {
//   return (
//     <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
//       {mission.map((item, index) => (
//         <Card key={index} className="max-w-sm">
//           <figure>
//             <img
//               src={item.image}
//               alt={`${item.title} logo`}
//               className="rounded-t-lg"
//             />
//           </figure>
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {item.title}
//           </h5>
//           <p className="font-normal text-gray-800 dark:text-white">
//             {item.body}
//           </p>
//         </Card>
//       ))}
//     </div>
//   );
// }






import React from "react";
import { Card } from "flowbite-react";

interface MissionProps {
  ourMission: {
    image: string; // Corrected to a string type
    title: string;
    body: string;
  }[];
}

const OurMission: React.FC<MissionProps> = ({ ourMission }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {ourMission.map((item, index) => (
        <Card key={index} className="max-w-sm">
          <figure>
            <img
              src={item.image}
              alt={`${item.title} logo`}
              className="rounded-t-lg"
            />
          </figure>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-800 dark:text-white">
            {item.body}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default OurMission;
