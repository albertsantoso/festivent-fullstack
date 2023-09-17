import axios from "axios";
import { useRef, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"

const VerificationCodePage = () => {
    const [verified, setVerified] = useState(false)

    const { token } = useParams()

    const navigate = useNavigate()

    const code = useRef()

    const onCheckCode = async (event) => {
        event.preventDefault();

        try {
            if (code.current.value !== "") {
                const verifyAccount = await axios.patch(`http://localhost:5000/users/verify`, { token, code: code.current.value });

                if (verifyAccount.data.isError) {
                    return toast.error(verifyAccount.data.message)
                } else {
                    setVerified(true)

                    setTimeout(() => {
                        navigate("/")
                    }, 1500);
                }
            } else {
                return toast.error("Please fill the code!")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Toaster />
            {
                !verified ? (

                    <div className="verification-code-page">
                        <div className="verification-container flex flex-col items-center py-52">
                            <h1 className="text-2xl font-medium mb-8">Please provide the code that was sent to your email.</h1>

                            <form onSubmit={onCheckCode}>
                                <div className="form-container flex gap-2">
                                    <input type="text" placeholder="Your verification code" className="px-6 py-4 border-2 rounded-md" ref={code} />
                                    <button type="submit" className="bg-blue-400 px-4 rounded-md">
                                        <span className="font-medium text-white">
                                            Submit
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="verification-page h-screen">
                        <div className="verification-page-container flex justify-center items-center py-52">
                            <div className="verification-modal flex flex-col items-center gap-4">
                                <span className="text-green-400">
                                    <BsFillCheckCircleFill size={100} />
                                </span>
                                <h1 className="text-4xl font-bold mb-6">Account verified!</h1>
                                <span className="font-medium text-2xl px-4 py-2 rounded-lg">
                                    You will automatically directed to the main page.
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default VerificationCodePage;