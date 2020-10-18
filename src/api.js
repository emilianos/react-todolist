import axios from "axios";

const endpoint = `https://jsonbox.io/box_${process.env.JSONBOX_KEY}`;

const getAll = () => {
  // const test = axios.get(endpoint + "/todos?sort=_createdOn");
  // console.log(test.response);
  return axios.get(endpoint + "/todos?sort=_createdOn");
};

const create = (todo) => {
  return axios.post(endpoint + "/todos", todo);
};

const update = (updateTodo) => {
  return axios.put(endpoint + `/todos/${updateTodo.id}`, {
    text: updateTodo.text
  });
};

const destroy = (id) => {
  return axios.delete(endpoint + `/todos/${id}`);
};

export default {
  todos: {
    getAll,
    create,
    update,
    destroy
  }
};