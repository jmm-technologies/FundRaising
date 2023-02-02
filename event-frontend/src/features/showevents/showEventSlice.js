import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EventServices from "./showEventSrervice";

const initialState = {
    events: [],
    event: {},
    status: "idle",
    error: null,
};

export const fetchEvents = createAsyncThunk("event/showEvent", async () => {
    const response = await EventServices.showEvent();
    return response;
}
);

export const fetchEventById = createAsyncThunk("event/showEventById", async (id) => {
    const response = await EventServices.showEventById(id);
    return response;
}
);

export const createEvent = createAsyncThunk("event/createEvent", async (data) => {
    const response = await EventServices.createEvent(data);
    return response;
}
);

export const updateEvent = createAsyncThunk("event/updateEvent", async (data) => {
    const response = await EventServices.updateEvent(data);
    return response;
}
);

export const deleteEvent = createAsyncThunk("event/deleteEvent", async (id) => {
    const response = await EventServices.deleteEvent(id);
    return response;
}
);

export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchEvents.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchEvents.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.events = action.payload;
        },
        [fetchEvents.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },

    },
});

const  { reducer } = eventSlice;
export default reducer;

