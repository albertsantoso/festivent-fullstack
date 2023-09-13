import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./../src/Components/Navbar";
import Footer from "./../src/Components/Footer";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import EventDetailPage from "./Pages/EventDetailPage";
import CreateEvent from "./Pages/CreateEventPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLogin } from "./Redux/Features/Users";
import AllEventsPageFiltering from "./Pages/AllEventsPageFiltering";
import UserDashboard from "./Pages/UserDashboard";
import VerificationPage from "./Pages/AccountVerification/VerificationPage";
import VerificationCodePage from "./Pages/AccountVerification/VerificationCodePage";

function App() {
    const { pathname } = useLocation();

    const excluded = ["/login", "/signup", "/verified", "/confirm"]
    const excluded1 = ["/verified", "/confirm"]

    const isExcludedNavbar = excluded.some((path) => pathname.startsWith(path));
    const isExcludedFooter = excluded1.some((path) => pathname.startsWith(path));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkLogin());
    }, [dispatch]);

    return (
        <>
            <div className="App">
                {isExcludedNavbar ? null : <Navbar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/event/:id" element={<EventDetailPage />} />
                    <Route path="/create" element={<CreateEvent />} />
                    <Route
                        path="/events"
                        element={<AllEventsPageFiltering />}
                    />
                    <Route path="/dashboard" element={<UserDashboard />} />
                    <Route path="/verified/:token" element={<VerificationPage />} />
                    <Route path="/confirm/:token" element={<VerificationCodePage />} />
                </Routes>
                {isExcludedFooter ? null : <Footer />}
            </div>
        </>
    );
}

export default App;
