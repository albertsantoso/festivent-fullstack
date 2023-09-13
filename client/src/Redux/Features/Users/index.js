import axios from "axios";
import { toast } from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    username: "",
    email: "",
    fullname: "",
    points: 0
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail: (initialState, action) => {
            initialState.email = action.payload;
        },
        setFullname: (initialState, action) => {
            initialState.fullname = action.payload;
        },
        setPoints: (initialState, action) => {
            initialState.points = action.payload
        }
    },
});

export const onLogin = (email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post(`http://localhost:5000/users/login`, { email, password });

        if (email && password) {
            if (data.isError) {
                return toast.error(data.message)
            } else {
                toast.success(data.message)

                localStorage.setItem("idLogin", data.data.token);

                setTimeout(() => {
                    dispatch(setEmail(data.data.email));
                    dispatch(setFullname(data.data.fullname));
                    dispatch(setPoints(data.data.ref_points))
                }, 1000);
            }
        } else {
            return toast.error("Provide something!")
        }
    } catch (error) {
        console.log(error);
    }
};

export const checkLogin = () => async (dispatch) => {
    try {
        const id = localStorage.getItem("idLogin");

        const { data } = await axios.get(`http://localhost:5000/users/${id}`);

        dispatch(setEmail(data.data.email));
        dispatch(setFullname(data.data.fullname));
    } catch (error) {
        console.log(error);
    }
};

export const onLogout = () => async (dispatch) => {
    try {
        localStorage.removeItem("idLogin");
        const res = "";

        dispatch(setEmail(res));
        dispatch(setFullname(res));
    } catch (error) {
        console.log(error);
    }
};

export const { setEmail, setFullname, setPoints } = userSlice.actions;
export default userSlice.reducer;