import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: []
}

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setEvent: (initialState, { payload }) => {
            initialState.events = payload
        }
    }
})

export const fetchEventsAsync = () => async (dispatchEvent) => {
    try {
        const response = await axios.get("http://localhost:5000/events")

        dispatchEvent(setEvent(response.data))
    } catch (error) {
        console.log(error)
    }
}

export const { setEvent } = eventsSlice.actions

export default eventsSlice.reducer