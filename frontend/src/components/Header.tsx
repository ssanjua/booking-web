import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const Header = () => {

    const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-amber-400 py-6 px-4">
        <div className="container mx-auto flex justify-between">
            <span className="flex gap-2 text-3xl text-white font-bold items-center">
                <Link to="/">bookeando </Link>
                <img src="favicon.png" className="w-12" />
            </span>
            <span className="flex space-x-2">
                { isLoggedIn ? (
                <>
                    <Link 
                        className="flex items-center text-white px-3 font-bold hover:text-gray-100" 
                        to="/my-bookings">My Bookings</Link>
                    <Link 
                        className="flex items-center text-white px-3 font-bold hover:text-gray-100" 
                        to="my-hotels">My Hotels</Link>
                    <SignOutButton />
                </> 
                ) : (
                    <Link 
                    to="/sign-in" 
                    className="flex items-center rounded-lg shadow-xl bg-white text-yellow-500 px-4 py-2 font-bold hover:bg-gray-200 hover:text-yellow-400"
                >
                    Sign In
                </Link>
                )}
            </span>
        </div>
    </div>
  )
}

export default Header;