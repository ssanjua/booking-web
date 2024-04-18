import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const navigate = useNavigate()
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
        destination, checkIn, checkOut, adultCount, childCount
    )
    navigate("/search")
  }

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-10 p-5 bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-2"
    >
      <div className="flex flex-row items-center flex-1 border border-gray-200 shadow-md rounded-lg bg-white p-2">
        <MdTravelExplore size={20} className="mr-2" />
        <input
          placeholder="Where?"
          className="text-sm text w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="flex bg-white px-2 rounded-lg py-1 border border-gray-200 shadow-md  gap-2">
        <label className="items-center flex text-sm">
          Adults:
          <input
            className="ml-1 w-full text-sm focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="items-center rounded-lg flex text-sm">
          Children:
          <input
            className="w-full p-1 text-sm focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>
      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="min-w-full bg-white rounded-lg text-sm p-2 border border-gray-200 shadow-md  focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="min-w-full bg-white p-2 rounded-lg text-sm border border-gray-200 shadow-md focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="flex gap-1">
        <button className="w-2/3 bg-blue-600 rounded-lg text-white h-full p-2 font-bold hover:bg-blue-500">
          Search
        </button>
        <button className="w-1/3 bg-red-600 rounded-lg text-white h-full p-2 font-bold hover:bg-red-500">
          Clear
        </button>
      </div>
    </form>
  )
};

export default SearchBar;