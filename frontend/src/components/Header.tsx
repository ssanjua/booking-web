import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";


const Header = () => {

    const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex justify-between">
            <span className="text-2xl text-white font-bold">
                <Link to="/">bookeando</Link>
            </span>
            <span className="flex space-x-2">
                { isLoggedIn ? (
                <>
                    <Link 
                        className="flex items-center text-white px-3 font-bold hover:bg-white" 
                        to="/my-bookings">My Bookings</Link>
                    <Link 
                        className="flex items-center text-white px-3 font-bold hover:bg-white" 
                        to="my-hotels">My Hotels</Link>
                    <SignOutButton />
                </> 
                ) : (
                    <Link 
                    to="/sign-in" 
                    className="flex items-center text-white px-3 font-bold hover:bg-green-100 hover:text-yellow-500"
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