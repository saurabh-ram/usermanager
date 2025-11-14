import axios from "axios";

const BASE = "http://localhost:8050/usermanager/user";

export const getUsers = () => axios.get(`${BASE}/get`);
export const addUser = (data) => axios.post(`${BASE}/add`, data);
export const updateUser = (id, data) => axios.put(`${BASE}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${BASE}/${id}`);
