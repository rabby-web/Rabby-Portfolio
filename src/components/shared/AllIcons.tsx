import Image from "next/image";
import { icons } from "./data/proficiencyData";

const AllIcons = () => {
  return (
    <div>
      <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-2 ">
        {icons?.map((icon) => (
          <div key={icon.id} className="w-full p-4 border rounded-xl">
            <Image
              src={icon.image}
              width={30}
              height={30}
              alt={icon.name}
            ></Image>
            <h2>{icon.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIcons;
