import { BsFillCheckCircleFill } from "react-icons/bs";

const VerifiedModal = () => {
    return (
        <div className="verification-modal h-screen">
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

export default VerifiedModal;