import { ImSpinner9 } from "react-icons/im";
import { FaHand } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";

export const sprintDetails = [
  {
    id: 1,
    Icon: ImSpinner9, // Use Icon component directly
    title: "Real-time Collaboration",
    body: "Instantly create your retrospective meetings and collaborate with your team in real-time.",
  },
  {
    id: 2,
    Icon: FaHand,
    title: "Issue Voting",
    body: "Team members vote on talking points in order to surface the most relevant and important issues.",
  },
  {
    id: 3,
    Icon: IoIosContacts,
    title: "@mention Teammates",
    body: "Mention your teammates to send them an email with the specific talking point.",
  },
  {
    id: 4,
    Icon: GiPadlock,
    title: "Admin Controls",
    body: "Lock your team's retrospectives, manage admin rights, and create multiple teams.",
  },
];
