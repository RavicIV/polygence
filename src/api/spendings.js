import http, { configGet, configPost } from "../utils/http-common";
import * as urls from "../utils/constants";
import * as actions from "../actions/spendings";

export const setAddNew = (data) => (dispatch) => {
  const date = new Date();

  dispatch({ type: actions.SET_NEW_SPENDING });

  return http.post(
      urls.baseUrl + "spendings/",
      { ...data, spent_at: date.toISOString() },
      configPost
    )
    .then(
      (data) => {
        dispatch({ type: actions.SET_NEW_SPENDING_SUCCESS, data });
      },
      (err) => dispatch({ type: actions.SET_NEW_SPENDING_FAILURE, err })
    );
};

export const getSpendings = () => (dispatch) => {
  dispatch({ type: actions.GET_SPENDINGS });

  return http.get(urls.baseUrl + "spendings/", configGet).then(
    (data) => {
      dispatch({ type: actions.GET_SPENDINGS_SUCCESS, data });
    },
    (err) => dispatch({ type: actions.GET_SPENDINGS_FAILURE, err })
  );

};
