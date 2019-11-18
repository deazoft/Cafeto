import { CONFIG } from '../config/config';

export const getLogin = (email) => {
  return fetch(CONFIG.API_URL + 'userByEmail',
    {
      method: 'post',
      mode: 'cors',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email
      })
    });

};

export const getMovies = (year) => {
  return fetch(CONFIG.MOVIES_URL + 'get',
    {
      method: 'post',
      mode: 'cors',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({

        "page": 1,
        "year": year,
        "language": "en"

      })
    });

}

export const getComments = (Movie_id, User_id) => {
  return fetch(CONFIG.COMMENTS_URL + 'get',
    {
      method: 'post',
      mode: 'cors',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "userId": User_id,
        "movieId": Movie_id
      })
    });

}

export const setComments = (Movie_id, User_id,Comment) => {
  return fetch(CONFIG.COMMENTS_URL + 'create',
    {
      method: 'post',
      mode: 'cors',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "userId": User_id,
        "movieId": Movie_id,
        "comment": Comment
      })
    });

}
