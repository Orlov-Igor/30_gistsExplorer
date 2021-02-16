import axios from 'axios';

export const FETCH_APIDATA_PENDING = 'FETCH_APIDATA_PENDING';
export const FETCH_APIDATA_SUCCESS = 'FETCH_APIDATA_SUCCESS';
export const FETCH_APIDATA_ERROR = 'FETCH_APIDATA_ERROR';
export const FETCH_GIST_PENDING = 'FETCH_GIST_PENDING';
export const FETCH_GIST_SUCCESS = 'FETCH_GIST_SUCCESS';
export const FETCH_GIST_ERROR = 'FETCH_GIST_ERROR';
export const FETCH_OWNER_PENDING = 'FETCH_GIST_PENDING';
export const FETCH_OWNER_SUCCESS = 'FETCH_GIST_SUCCESS';
export const FETCH_OWNER_ERROR = 'FETCH_GIST_ERROR';
export const DETECT_LANGUAGE = 'DETECT_LANGUAGE';
export const DETECT_URL = 'DETECT_URL';


export const fetchApiData = () => (dispatch) => {
  dispatch({
    type: FETCH_APIDATA_PENDING
  });
  axios
    .get(`https://api.github.com/gists/public`)
    .then(response => {
      dispatch({
        type: FETCH_APIDATA_SUCCESS,
        payload: response.data.map(data => {
          let files = data.files;
          for(let key in files) {
            return files[key];
          }
        })
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_APIDATA_ERROR,
        payload: err.response.message,
        
      })
    })
};

export const fetchGist = (url) => (dispatch) => {
  dispatch({
    type: FETCH_GIST_PENDING
  });
  axios
    .get(url)
    .then(response => {
      dispatch({
        type: FETCH_GIST_SUCCESS,
        payload: {
          text: response.data,
          url
        }
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_GIST_ERROR,
        payload: err.response.message,
        
      })
    })
};

export const fetchOwner = (gistName) => (dispatch) => {
  dispatch({
    type: FETCH_OWNER_PENDING
  });
  axios
    .get(`https://api.github.com/gists/public`)
    .then(response => {
      dispatch({
        type: FETCH_OWNER_SUCCESS,
        payload: response.data.find(data => {
          let files = data.files;
          for(let key in files) {
            return files[key].filename === gistName;
          }
        })
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_OWNER_ERROR,
        payload: err.response.message,
        
      })
    })
};


export const detectLanguage = gistLang=> ({
  type: DETECT_LANGUAGE,
  payload: gistLang
});

export const detectUrl = gistUrl=> ({
  type: DETECT_URL,
  payload: gistUrl
});

