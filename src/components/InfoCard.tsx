import { SearchResultData } from "interfaces";
import { FC } from "react";

interface Props {
  result: SearchResultData;
}

const InfoCard: FC<Props> = ({
  result: { img, description, location, price, star, title, total },
}) => <div>InfoCard</div>;

export default InfoCard;
