import Image from "next/image";
import { BannerImg } from "../public/assets/images";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={BannerImg} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="bg-white text-purple-500 px-10 py-4 font-bold shadow-md rounded-full my-2 hover:shadow-xl active:scale-90 transition duration-200">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
