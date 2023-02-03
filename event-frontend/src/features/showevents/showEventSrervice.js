import axios from "axios";
import config from "../../config.json";
const API_URL = config.apiUrl;

const showEvent = async () => {
  return axios.get(API_URL + "/event").then((res) => {
    return res.data;
  });
};

const showEventById = async (id) => {
  const res = await axios.get(API_URL + `/event/${id}`);
  return res.data;
}

const createEvent = async (data) => {
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  };
  const res = await axios.post(API_URL + "/event", data, config);
  return res.data;
}

const updateEvent = async (data) => {
  const id = data.id;
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  };
  const res = await axios.put(API_URL + `/event/${id}`, data, config);
  return res.data;
}


const deleteEvent = async (id) => {
  const token = localStorage.getItem("admin");
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  const res = await axios.delete(API_URL + "/event/" + id, config);
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
