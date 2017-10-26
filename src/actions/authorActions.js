import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

const loadAuthorsSuccess = (authors) => {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  }
};

const loadAuthors = () => {
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(error => {
      throw(error);
    });
  }
};

export {
  loadAuthors,
};