export const getTechs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: "GET_TECHS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await fetch("/logs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tech),
    });
    const data = await res.json();
    dispatch({
      type: "ADD_TECH",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: "DELETE_TECH",
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: "TECHS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};
