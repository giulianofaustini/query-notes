import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

// move the function making the actual HTTP request to its own file requests.js
export const getNotes = () => axios.get(baseUrl).then((res) => res.data);

export const createNote = (newNote) =>
  axios.post(baseUrl, newNote).then((res) => res.data);

export const updateNote = (updatedNote) =>
  axios
    .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
    .then((res) => res.data);
