import Image from "next/image";
import { CardData } from "interfaces";
import { FC } from "react";

interface Props {
  data: CardData;
}

const MediumCard: FC<Props> = ({ data: { img, title } }) => (
  <div className="medium-card">
    <div className="relative h-80 w-80">
      <Image src={img} layout="fill" className="rounded-xl" />
    </div>
    <h3 className="text-2xl mt-3">{title}</h3>
  </div>
);

export default MediumCard;
