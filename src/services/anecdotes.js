import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (anec) => {
  const object = { anec, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const updateVote = async (anec) => {
  const response = await axios.put(`${baseUrl}/${anec.id}`, anec);
  return response.data;
};

export default { getAll, create, updateVote };
