import React from "react";

interface PrivRetroProps {
  privateRetro: {
    id: number;
    title: string;
    icon: React.ElementType; // Use lowercase 'icon' to match your array
  }[];
}

export default function PrivateRetro({ privateRetro }: PrivRetroProps) {
  return (
    <div>
      {privateRetro.map(({ id, title, icon: Icon }) => (
        <div key={id}>
          <figure>
            <Icon className="h-8 w-8" />
            {/* Pass className for styling the icon */}
          </figure>
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
}
