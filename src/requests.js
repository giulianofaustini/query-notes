import axios from 'axios'



// move the function making the actual HTTP request to its own file requests.js
export const getNotes = () =>
  axios.get('http://localhost:3001/notes').then(res => res.data)