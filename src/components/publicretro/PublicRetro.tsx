// import React from "react";

// interface PublicRetroProps {
//   publicRetro: {
//     id: number;
//     title: string;
//     icon: React.ElementType; // Use lowercase 'icon' to match your data
//   }[];
// }

// export default function PublicRetro({ publicRetro }: PublicRetroProps) {
//   return (
//     <div>
//       {publicRetro.map(({ id, title, icon: Icon }) => (
//         <div key={id}>
//           <Icon className="h-8 w-8" />{" "}
//           {/* Optionally add styling for the icon */}
//           <h2>{title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }




// src/components/retros/PublicRetro.tsx
import React from 'react';

interface PublicRetroProps {
  publicRetro: {
    id: number;
    title: string;
    Icon: React.ElementType;
  }[];
}

export default function PublicRetro({ publicRetro }: PublicRetroProps) {
  return (
    <div>
      {publicRetro.map(({ id, title, Icon }) => (
        <div key={id}>
          <Icon />
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
}
