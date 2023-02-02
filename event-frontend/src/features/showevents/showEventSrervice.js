import axios from "axios";
import config from "../../config.json";
const API_URL = config.apiUrl;

const showEvent = async () => {
    // pass token in header
    const token = localStorage.getItem("admin");
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    return axios.get(API_URL + "/event", config).then((res) => {
      return res.data;
    });
  };

const showEventById = async (id) => {
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
    const res = await axios.get(API_URL + "api/event/" + id, config);
    return res.data;
}

const createEvent = async (data) => {
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
    const res = await axios.post(API_URL + "api/event", data, config);
    return res.data;
}

const updateEvent = async (id, data) => {
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
    const res = await axios.put(API_URL + "api/event/" + id, data, config);
    return res.data;
}

const deleteEvent = async (id) => {
  console.log('id', id)
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
    const res = await axios.delete(API_URL + "/event/" + id, config);
    console.log('res', res)
    return res.data;
}



const showEventServices = {
    showEvent,
    showEventById,
    createEvent,
    updateEvent,
    deleteEvent
};

export default showEventServices;
