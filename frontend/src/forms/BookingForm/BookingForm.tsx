import { useForm } from "react-hook-form";
import { UserType } from "../../../../backend/src/shared/types";

type Props = {
  currentUser: UserType;
}

type BookingFormData = {
    firstName: string;
    lastName: string;
    email: string;
}

const BookingForm = ({ currentUser }: Props) => {
  const { handleSubmit, register } = useForm<BookingFormData>();

  return (
    <form className="grid grid-cols-1 gap-5 ronded-lg border border-slate-300 px-5">
        <span className="text-3xl font-bold">Confirm your details</span>
        <div className="grid grid-cols-2 gap-6">
            <label className="text-gray-700 text-sm font-bold flex-1">
                First Name
                <input 
                    className="mt-1 border ronded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal" 
                    type="text"
                    readOnly
                    disabled
                    {...register("firstName")}
                />
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Last Name
                <input 
                    className="mt-1 border ronded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal" 
                    type="text"
                    readOnly
                    disabled
                    {...register("lastName")}
                />
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input 
                    className="mt-1 border ronded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal" 
                    type="text"
                    readOnly
                    disabled
                    {...register("email")}
                />
            </label>
        </div>

    </form>
  )
}

export default BookingForm;