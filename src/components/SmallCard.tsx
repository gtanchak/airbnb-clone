import { IExploreData } from "./../interfaces/index";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  data: IExploreData;
}

const SmallCard: NextPage<Props> = ({ data: { img, location, distance } }) => {
  return (
    <div className="flex m-2 mt-5 cursor-pointer space-x-4 rounded-xl transform transition duration-200 ease-out items-center hover:bg-gray-100 hover:scale-105">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
