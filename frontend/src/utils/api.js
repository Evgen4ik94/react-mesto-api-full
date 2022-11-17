class Api {
  constructor(config) {
    this._url = config.url
  }
  //checking if the server's responce is ok
  _responseResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  //get user info
  getUserData(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._responseResult(res))
  }
  //update user info
  updateUserData({ name, about }, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about,
      })
    })
      .then(res => this._responseResult(res))
  }
  //update user avatar
  updateAvatar(avatar, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(res => this._responseResult(res))
  }
  //get cards
  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._responseResult(res))
  }
  //add a new card
  addNewCard({ name: place, link: source }, token) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: place,
        link: source
      })
    })
      .then(res => this._responseResult(res))
  }
  //delete selected card
  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => this._responseResult(res))
  }
  //like selected card
  setLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => this._responseResult(res))
  }
  //remove like on selected card
  deleteLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => this._responseResult(res))
  }
}

const api = new Api({
  url: 'https://api.mesto-exo.nomoredomains.icu',
})

export default api;
