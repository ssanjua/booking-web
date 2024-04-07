import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md flex flex-col-reverse">
        <span className="text-white font-bold tracking-tight text-2xl">
          {hotel.name}
        </span>
        <span className="text-white">
          {hotel.city}, {hotel.country}
        </span>
        <span className="flex">
        {Array.from({ length: hotel.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;