import axios from "axios";

const API_URL = "https://69f6d45ca72f01a951b98d7f.mockapi.io/db/v1/characters";

export const getItemsRequest = () => 
    axios.get(API_URL);

export const getItemByIdRequest = (id) =>
    axios.get(`${API_URL}/${id}`);

export const createItemRequest = (data) =>
    axios.post(API_URL, data);

export const updateItemRequest = (id, data) =>
    axios.put(`${API_URL}/${id}`, data);

export const deleteItemRequest = (id) =>
    axios.delete(`${API_URL}/${id}`);