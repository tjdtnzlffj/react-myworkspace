import axios from "axios";

const contactApi = {
  entry: (data) =>
    axios.post(`${process.env.REACT_APP_API_BASE}/contacts`, data),
  // GET /todos
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/contacts`),
  // DELETE /todos/1
  remove: (id) =>
    axios.delete(`${process.env.REACT_APP_API_BASE}/contacts/${id}`),

  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/contacts/${data.id}`, data),
};

export default contactApi;
