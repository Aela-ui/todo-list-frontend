import axios from 'axios';

const apiUrl = 'http://localhost:3333';

export const createTask = async (name, description, data) => {
  try {
    return await axios.post(`${apiUrl}/tasks`, {
      name,
      description,
      data,
    });
  } catch (error) {
    return error;
  }
};

export const findAllTasks = async () => {
  try {
    return await axios.get(`${apiUrl}/tasks`);
  } catch (error) {
    return error;
  }
};

export const deleteTask = async (id) => {
  try {
    return await axios.delete(`${apiUrl}/tasks/${id}`);
  } catch (error) {
    return error;
  }
};
