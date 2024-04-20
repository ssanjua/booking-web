import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const MyHotels = () => {
    const { data: hotelData } = useQuery("fetchMyHotels", apiClient.fetchMyHotels, {
        onError: () => {
            onError: () => {

            }
        }
    })

    if (!hotelData) {
        return <span>No Hotels found</span>
    }

    return (
        <div className="space-y-5">
            <span className="flex justify-between">
                <h1 className="text-3xl font-bold">My Hotels</h1>
                <Link to="/add-hotel" className="flex bg-blue-600 rounded-lg text-white font-bold px-4 py-2 hover:bg-blue-700"
                >
                    Add Hotel
                </Link>
            </span>
            <div className="grid grid-cols-1 gap-8">
                {hotelData.map((hotel) => (
                    <div className="flex flex-col justify-between border border-gray-200 rounded-xl shadow-lg p-8 gap-5">
                        <h2 className="text-2xl font-bold">{hotel.name}</h2>
                        <div className="whitespace-pre-line">{hotel.description}</div>
                        <div className="grid grid-cols-5 gap-2">
                            <div className="border border-slate-300 text-sm rounded-lg p-3 flex items-center">
                                <BsMap className="mr-1 fill-red-600" />
                                {hotel.city}, {hotel.country}
                            </div>
                            <div className="border border-slate-300 text-sm rounded-lg p-3 flex items-center">
                                <BsBuilding className="mr-1" />
                                {hotel.type}
                            </div>
                            <div className="border border-slate-300 text-sm rounded-lg p-3 flex items-center">
                                <BiMoney className="mr-1 fill-green-800" />
                                ${hotel.pricePerNight} per night
                            </div>
                            <div className="border border-slate-300 text-sm rounded-lg p-3 flex items-center">
                                <BiHotel className="mr-1" />
                                {hotel.adultCount} adults, {hotel.childCount} children
                            </div>
                            <div className="border border-slate-300 text-sm rounded-lg p-3 flex items-center">
                                <AiFillStar className="fill-yellow-400" />
                                {hotel.starRating} star rating
                            </div>
                        </div>
                        <span className="flex justify-end">
                            <Link to={`/edit-hotel/${hotel._id}`}
                                className="flex bg-blue-600 text-white rounded-lg shadowd-md px-4 py-2 font-bold p-2 hover:bg-blue-700"
                            >
                                Edit
                            </Link>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyHotels;