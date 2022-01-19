import axiosClient from "./axiosClient";

const todoApi = {
  getAll() {
    const url = `/todos`;
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/Todos/${id}`;
    return axiosClient.get(url);
  },

  addTodo(data) {
    const url = `/Todos`;
    return axiosClient.post(url, data);
  },

  updateTodo(data) {
    const url = `/Todos/${data.id}`;
    return axiosClient.put(url, data);
  },

  deleteTodo(id) {
    const url = `/Todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
