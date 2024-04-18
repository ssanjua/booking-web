import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
    checkIn: Date;
    checkOut: Date,
    adultCount: number;
    childCount: number;
}

const GuestInfoForm = ({ hotelId, pricePerNight}: Props) => {
    const search = useSearchContext()
    const { isLoggedIn } = useAppContext();
    const navigate = useNavigate()
    const location = useLocation()
    

  const { 
        watch, 
        register, 
        handleSubmit, 
        setValue, 
        formState: {errors}, 
    }  = useForm<GuestInfoFormData>({
        defaultValues:{
            checkIn: search.checkIn,
            checkOut: search.checkOut,
            adultCount: search.adultCount,
            childCount: search.childCount,
        }
    });

    const checkIn = watch("checkIn");
    const checkOut = watch("checkOut")

    const minDate = new Date()
    const maxDate = new Date()
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    const onSignInClick = (data: GuestInfoFormData) => {
        search.saveSearchValues("", data.checkIn, data.checkOut, data.adultCount, data.childCount)
        navigate("/sign-in", { state: { from: location }})
    }

    const onSubmit = (data: GuestInfoFormData) => {
        search.saveSearchValues("", data.checkIn, data.checkOut, data.adultCount, data.childCount)
        navigate(`/hotel/${hotelId}/booking`)
    }

    return (
        <div className="flex flex-col p-4 bg-white gap-4 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-md font-bold">${pricePerNight} per night</h3>
            <form onSubmit={isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInClick)}>
                <div className="grid grid-cols-1 gap-4 items-center">
                    <div>
                        <DatePicker
                            required
                            selected={checkIn}
                            onChange={(date) => setValue("checkIn", date as Date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={minDate}
                            maxDate={maxDate}
                            placeholderText="Check-in Date"
                            className="min-w-full bg-white rounded-lg border border-gray-200 text-sm p-2 focus:outline-none"
                            wrapperClassName="min-w-full"
                        />
                    </div>
                    <div>
                        <DatePicker
                            required
                            selected={checkOut}
                            onChange={(date) => setValue("checkOut", date as Date)}
                            selectsStart
                            startDate={checkIn}
                            endDate={checkOut}
                            minDate={minDate}
                            maxDate={maxDate}
                            placeholderText="Check-out Date"
                            className="min-w-full bg-white p-2 rounded-lg border border-gray-200 text-sm focus:outline-none"
                            wrapperClassName="min-w-full"
                        />
                    </div>
                    <div className="flex bg-white px-2 py-1 gap-2 rounded-lg text-sm border border-gray-200">
                        <label className="items-center flex ">
                        Adults:
                        <input
                            className="w-full p-1 focus:outline-none font-bold"
                            type="number"
                            min={1}
                            max={20}
                            {...register("adultCount", {
                                required: "This field is required",
                                min: {
                                    value: 1,
                                    message: "There must be at least one adult",
                                },
                                valueAsNumber: true,
                            })}
                        />
                        </label>
                        <label className="items-center flex">
                        Children:
                        <input
                            className="w-full p-1 focus:outline-none font-bold"
                            type="number"
                            min={0}
                            max={20}
                            {...register("childCount", {
                                valueAsNumber: true,
                            })}
                        />
                        </label>
                        {errors.adultCount && (
                            <span className="text-red-500 font-semibold text-sm">
                                {errors.adultCount.message}
                            </span>
                        )}
                    </div>
                    {isLoggedIn ? (
                        <button 
                            className="bg-blue-600 rounded-lg text-white h-full p-2 font-bold hover:bg-blue-700">
                            Book now
                        </button>
                    ) : (
                        <button className="bg-blue-600 rounded-lg text-white h-full p-2 font-bold hover:bg-blue-700">
                            Sign in to Book
                        </button>
                    )}
                </div>
            </form>
        </div>
    )

}


export default GuestInfoForm;