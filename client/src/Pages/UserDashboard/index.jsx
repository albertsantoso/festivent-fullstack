import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "../../Components/EventCard";
import PrimaryButton from "../../Components/PrimaryButton";

export default function UserDashboard() {
    const [tokenToUserId, setTokenToUserId] = useState(null)
    const [createdEvents, setCreatedEvents] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [registered, setRegistered] = useState([]);

    const loggedinUserId = localStorage.getItem("idLogin");

    const navigate = useNavigate()

    const tokenToId = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/users/tokentoid/${loggedinUserId}`)

            setTokenToUserId(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getDataUser = async () => {
        const id = localStorage.getItem("idLogin");
        const { data } = await axios.get(`http://localhost:5000/users/${id}`);

        setDataUser(data.data);
    };

    const getCreatedEvent = async () => {
        const { data } = await axios.get(`http://localhost:5000/events?userId=${tokenToUserId}`);

        setCreatedEvents(data);
    };

    const getRegistered = async () => {
        const tempRegistered = [];
        const eventIdRefCode = [];

        const res = await axios.get(`http://localhost:5000/refcodes/user?userId=${loggedinUserId}`);

        const registeredRefCode = res.data;

        const { data } = await axios.get("http://localhost:5000/tickets/event");

        const registeredEvents = [];

        data.map((v) => {
            if (v.userId === tokenToUserId) {
                registeredEvents.push(v);
            }
        });

        registeredRefCode.map((v) => {
            eventIdRefCode.push(v.eventId);
        });

        registeredEvents.map((value, index) => {
            if (eventIdRefCode.includes(value.event.id)) {
                let refCode = 0;
                let eId = value.event.id;
                registeredRefCode?.map((value2) => {
                    if (value2.eventId === eId) {
                        refCode = value2.code;
                    }
                });
                tempRegistered.push({ ...value, ref_code: Number(refCode) });
            } else {
                tempRegistered.push({ ...value, ref_code: 0 });
            }
        });

        setRegistered(tempRegistered);
    };

    useEffect(() => {
        tokenToId()
        getDataUser();
        console.log(loggedinUserId);
    }, []);

    useEffect(() => {
        getRegistered();
        getCreatedEvent();
    }, [tokenToUserId])

    if (!tokenToUserId) {
        navigate("/")
    }

    return (
        <>
            <div className="UserDashboard">
                <div className="user-dashboard-container text-left px-6 py-[92px] md:py-[140px] md:px-[30px] md:mx-auto md:max-w-[1300px]">
                    <section className="dashboard-greet-points mb-6">
                        <h1 className="text-4xl md:text-6xl font-bold ff-space-g mb-2">Hi there, {dataUser.fullname}</h1>
                        <span className="font-medium text-lg">Your points: <strong>{dataUser.ref_points}</strong></span>
                        <div className={`font-medium text-lg ${dataUser.status === "Unverified" ? "text-red-500" : "text-green-500"}`}><strong>{dataUser.status}</strong></div>
                    </section>
                    <section className="your-created-events rounded-lg pb-4">
                        <h2 className="text-2xl md:text-4xl mb-4 font-bold md:mb-4">Events by You</h2>
                        <div className="feed-events-container grid gap-6 md:grid-cols-4">
                            {
                                createdEvents?.map((v) => {
                                    const date = new Date(v.dateTimeStart[0])
                                    const dayMonthDate = date.toLocaleDateString(undefined, {
                                        weekday: 'short', month: 'long', day: 'numeric'
                                    })
                                    return (
                                        <>
                                            <EventCard key={v.id}
                                                image={v.id > 20 ? `http://localhost:5000/${v.image.substring(7)}` : v.image}
                                                title={`${v.title}`}
                                                dateTime={dayMonthDate}
                                                venue={`${v.address}`}
                                                goTo={`/event/${v.id}`} />
                                        </>
                                    );
                                })
                            }
                        </div>

                        {
                            createdEvents?.length ?
                                null
                                :
                                (
                                    <>
                                        <div className="no-created-events">
                                            <h2 className="font-medium mb-4">You haven't created an event yet!</h2>
                                            <div className="container text-center p-8 rounded-lg bg-neutral-100 full">
                                                <div className="text-4xl mb-2">
                                                    <ion-icon name="create"></ion-icon>
                                                </div>
                                                <h4 className="font-bold text-lg md:text-xl mb-2">Start from scratch</h4>
                                                <p className="font-medium md:text-l text-neutral-500 mb-4">Add all your event details, create new tickets, and set up recurring events</p>
                                                <Link to={"/create"}>
                                                    <PrimaryButton buttonText="Create an Event" bgColor="bg-gradient-animation-1" textSize="xl" textColor="white" customStyle={"hover:scale-[1.04] active:scale-[.95] h-[50px]"} />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    </section>

                    <hr className="my-6 md:my-14 shadow-lg" />

                    <section className="your-created-events rounded-lg">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Registered Events</h2>
                        <div className="feed-events-container grid gap-6 md:grid-cols-4 grid-cols-1">
                            {
                                registered?.map((v) => {
                                    const date = new Date(v.event.dateTimeStart[0])
                                    const dayMonthDate = date.toLocaleDateString(undefined, {
                                        weekday: 'short', month: 'long', day: 'numeric'
                                    })
                                    return (
                                        <>
                                            {/* <Link to={`/event/${v.event.id}`}> */}
                                            <EventCard key={v.id}
                                                image={v.event.id > 20 ? `http://localhost:5000/${v.event.image.substring(7)}` : v.event.image}
                                                title={`${v.event.title}`}
                                                dateTime={dayMonthDate}
                                                venue={`${v.event.address}`}
                                                refCode={v.ref_code ? v.ref_code : null}
                                                goTo={`/event/${v.event.id}`}
                                            />
                                            {/* </Link> */}
                                        </>
                                    );
                                })
                            }
                        </div>

                        {
                            registered?.length ? null : (
                                <>
                                    <div className="no-created-events">
                                        <h2 className="font-medium mb-4">You haven't register to any event yet!</h2>
                                        <div className="container text-center p-8 rounded-lg bg-neutral-100 full">
                                            <div className="text-5xl mb-2">
                                                <ion-icon name="search-circle"></ion-icon>
                                            </div>
                                            <h4 className="font-bold text-lg md:text-xl mb-2">Find your events!</h4>
                                            <p className="font-medium md:text-l text-neutral-500 mb-4">Role in some events that suit you.</p>
                                            <Link to={"/events"}>
                                                <PrimaryButton buttonText="Explore Events" bgColor="bg-gradient-animation-1" textSize="xl" textColor="white" customStyle={"hover:scale-[1.04] active:scale-[.95] h-[50px]"} />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </section>
                </div>
            </div>
        </>
    );
}
