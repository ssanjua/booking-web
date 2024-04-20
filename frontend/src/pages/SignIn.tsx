import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
    email: string;
    password: DOMStringList;
}

const SignIn = () => {
    const { showToast } = useAppContext()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { register, formState: { errors }, handleSubmit } = useForm<SignInFormData>();

    const location = useLocation()

    const mutation = useMutation(apiClient.signIn, {
        onSuccess: async () => {
            showToast({ message: "Sign in successful", type: "SUCCESS" })
            await queryClient.invalidateQueries("validateToken")
            navigate(location.state?.from.pathname || "/")
            console.log("user has been signed in")
        }, onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" })
        }
    })

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data)
    })

    return (
        <div className="flex justify-center pt-5">
            <form className="flex flex-col gap-6 " onSubmit={onSubmit}>
                <h2 className="text-2xl font-bold">Sign in</h2>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input type="email" className="border rounded-lg w-full py-2 px-2 font-normal"
                        {...register("email", { required: "This field is required" })} />
                    {errors.email && (
                        <span className="text-red-500" >{errors.email.message}</span>
                    )}
                </label>
                <label className="text-gray-700 rounded-lg text-sm font-bold flex-1">
                    Password
                    <input
                        type="password"
                        className="border rounded w-full py-2 px-2 font-normal"
                        {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            },
                        })}
                    />
                    {errors.password && (
                        <span className="text-red-500" >{errors.password.message}</span>
                    )}
                </label>
                <span className="flex items-center justify-between">
                    <span className="text-sm">
                        Not Registeted? <Link className="underline" to="/register">Create an account here</Link>
                    </span>
                    <button
                        type="submit"
                        className="bg-blue-600 rounded-lg ml-6 text-white py-2 px-4 font-bold hover:bg-blue-500 shadow-md">
                        Login
                    </button>
                </span>
            </form>
        </div>
    )
}

export default SignIn;