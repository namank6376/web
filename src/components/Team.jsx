import { team } from "../constants";
import { User, Code, Crown } from "lucide-react"; // Import icons

// Map designations to icons
const designationIcons = {
  Founder: <Crown className="text-blue-500 mr-4 text-4xl" />,
  Developer: <Code className="text-blue-500 mr-4 text-4xl" />,
  // Add more designations and corresponding icons as needed
};

const Team = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Meet our
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
               {" "} team</span>
        </h2>
      <div className="flex flex-wrap">
        {team.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <div className="flex items-center mb-8">
                {/* Icon and designation */}
                {designationIcons[member.title] || <User className="text-blue-500 mr-4 text-4xl" />}
                <div>
                  <p className="text-3xl font-bold">
                    {member.title}
                  </p>
                  <p className=" text-xl text-neutral-500">
                    {member.designation}
                  </p>
                </div>
              </div>
              <ul>
                {member.features.map((feature, index) => (
                  <li key={index} className="mt-4 mb-5 text-xl flex items-center">
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
