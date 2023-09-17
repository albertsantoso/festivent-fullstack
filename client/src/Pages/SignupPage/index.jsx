import FestiventLogoBlack from "./../../Assets/Logo/festivent-logo-black.png";
import ConcertImage from "./../../Assets/Images/concert_login.jpg";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { setEmail, setFullname } from "../../Redux/Features/Users";
import { Spinner } from 'flowbite-react';

export default function SignupPage() {
    const email = useSelector((state) => state.users.email);

    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const inputFullname = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSignUp = async () => {
        try {
            const fullname = inputFullname.current.value;
            const email = inputEmail.current.value;
            const password = inputPassword.current.value;

            const dataToSend = { fullname, email, password, ref_points: 0 }

            if (fullname !== "" && email !== "" && password !== "") {
                if (password.length < 6) return toast.error("Password minimum of 6 characters")

                const { data } = await axios.post('http://localhost:5000/users/signup', dataToSend)

                if (data.isError) return toast.error(data.message)
            } else {
                return toast.error("Provide something!")
            }

            setIsLoading(true)
            await axios.post('http://localhost:5000/users/signup', dataToSend)
            toast.success("Successfully registered!");

            const { data } = await axios.post(`http://localhost:5000/users/login`, dataToSend);

            localStorage.setItem("idLogin", data.data.token);

            setTimeout(() => {
                dispatch(setEmail(data.data.email));
                dispatch(setFullname(data.data.fullname))
            }, 1000);
        } catch (err) {
            console.log(err);
        }
    };

    if (email) {
        return navigate("/");
    }

    return (
        <>
            <Toaster />
            <div className="SignupPage w-full h-[100vh]">
                <div className="signup-page-container grid md:grid-cols-2 grid-cols-1">
                    <div className="signup-section h-[100vh] px-8 flex items-center">
                        <div className="signup-section-container w-[360px] m-auto">
                            <div className="signup-section-heading flex flex-col items-start mb-12">
                                <div className="signup-heading-logo mb-10">
                                    <Link to={"/"}>
                                        <img
                                            src={FestiventLogoBlack}
                                            alt=""
                                            className="h-5 black-shadow-2xl"
                                        />
                                    </Link>
                                </div>
                                <div className="signup-heading-title">
                                    <h1 className="text-black font-extrabold text-5xl text-left">
                                        Create an account
                                    </h1>
                                </div>
                            </div>
                            <div className="signup-form mb-8">
                                <div className="form-container">
                                    <div className="flex flex-col gap-4">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="full"
                                                id="full"
                                                placeholder="Full Name"
                                                ref={inputFullname}
                                                className="w-full py-3 px-4 rounded-lg font-semibold outline-none"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email address"
                                                ref={inputEmail}
                                                className="w-full py-3 px-4 rounded-lg font-semibold outline-none"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                ref={inputPassword}
                                                className="w-full py-3 px-4 rounded-lg font-semibold outline-none "
                                            />
                                        </div>
                                        <div className="form-group flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id="show"
                                                className="w-[20px] h-[20px] rounded-md border-2"
                                                onChange={() => setShowPassword(!showPassword)}
                                            />
                                            <label htmlFor="show">Show password</label>
                                        </div>
                                        <div className="form-group mt-2">
                                            {
                                                isLoading ?
                                                    (
                                                        <Spinner color="pink" />

                                                    ) :
                                                    (
                                                        <button
                                                            type="submit"
                                                            className={`rounded-lg py-3 px-4 w-full hover:scale-105 active:scale-100`}
                                                            onClick={() => {
                                                                onSignUp();
                                                            }}
                                                        >
                                                            <span className="font-bold text-lg text-white [text-shadow:_0_0_4px_rgb(0_0_0_/_70%)]">
                                                                Sign up
                                                            </span>
                                                        </button>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-account text-left">
                                <span className="font-medium">
                                    Already have an account?{" "}
                                    <Link to={"/login"}>
                                        <span className="text-blue-500">
                                            Log in
                                        </span>
                                    </Link>{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="section-image md:block hidden">
                        <img
                            src={ConcertImage}
                            alt=""
                            srcset=""
                            className="h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
