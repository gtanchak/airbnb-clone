import { NextPage } from 'next';
import Image from 'next/image';
import { ICardData } from 'interfaces';

interface Props {
  data: ICardData;
}

const MediumCard: NextPage<Props> = ({ data: { img, title } }) => (
  <div className="medium-card">
    <div className="relative h-80 w-80">
      <Image src={img} layout="fill" className="rounded-xl" />
    </div>
    <h3 className="text-2xl mt-3">{title}</h3>
  </div>
);

export default MediumCard;
