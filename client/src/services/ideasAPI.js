const axios = require('axios');
class IdeasAPI {
  constructor() {
    this._apiUrl = `http://localhost:5000/api/ideas`;
  }
  getIdeas() {
    return axios.get(this._apiUrl);
  }
  createIdea(data) {
    return axios.post(this._apiUrl, data);
  }
  updateIdea(id, data) {
    return axios.put(`${this._apiUrl}/${id}`, data);
  }
  deleteIdea(id) {
    // We need to send username for validation
    // if username in local storage, get it, else empty string
    const username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : '';
    // match the id of idea and send object with username for validation
    return axios.delete(`${this._apiUrl}/${id}`, {
      data: {
        username,
      },
    });
  }
}

export default new IdeasAPI();
