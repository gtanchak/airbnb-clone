import Image from "next/image";
import { ExploreData } from "interfaces/index";
import { FC } from "react";

interface Props {
  data: ExploreData;
}

const SmallCard: FC<Props> = ({ data: { img, location, distance } }) => (
  <div className="small-card">
    <div className="relative h-16 w-16">
      <Image src={img} layout="fill" className="rounded-lg" />
    </div>
    <div>
      <h2>{location}</h2>
      <h3 className="text-gray-500">{distance}</h3>
    </div>
  </div>
);

export default SmallCard;
