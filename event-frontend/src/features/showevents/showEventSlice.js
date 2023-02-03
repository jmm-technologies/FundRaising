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
    const formdata = {
        name: data.name,
        description: data.description,
        file: data.file.file.originFileObj,
    }
    const response = await EventServices.createEvent(formdata);
    return response;
}
);

export const updateEvent = createAsyncThunk("event/updateEvent", async (values, id) => {

    const formdata = {
        name: values?.name,
        description: values?.description,
        file: values?.file.file.originFileObj,
        id: values?.id
    }
    const response = await EventServices.updateEvent(formdata);
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
        [fetchEventById.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchEventById.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.event = action.payload;
        },
        [fetchEventById.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [createEvent.pending]: (state, action) => {
            state.status = "loading";
        }
        ,
        [createEvent.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.event = action.payload;
        }
        ,
        [createEvent.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
        ,
        [updateEvent.pending]: (state, action) => {
            state.status = "loading";
        }
        ,
        [updateEvent.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.event = action.payload;
        }
        ,
        [updateEvent.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
        ,
        [deleteEvent.pending]: (state, action) => {
            state.status = "loading";
        }
        ,
        [deleteEvent.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.event = action.payload;
        }
        ,
        [deleteEvent.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
        ,


    },
});

const { reducer } = eventSlice;
export default reducer;

