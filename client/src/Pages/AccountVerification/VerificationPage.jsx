import axios from "axios";
import { useEffect, useState } from "react";
import VerifiedModal from "../../Components/VerifiedModal";
import { useNavigate, useParams } from "react-router-dom";

const VerificationPage = () => {
    const [verify, setVerify] = useState(false);

    const navigate = useNavigate()

    const { token } = useParams()

    const handleVerify = async () => {
        try {
            const verifyAccount = await axios.patch(`http://localhost:5000/users/verify`, { token });

            console.log(verifyAccount);

            setVerify(true)

            setTimeout(() => {
                navigate('/')
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleVerify()
    }, [])

    return (
        <>
            {!verify ? null : <VerifiedModal />}
        </>
    )
}

export default VerificationPage;