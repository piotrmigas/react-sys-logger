export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: "GET_LOGS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: "SEARCH_LOGS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();
    dispatch({
      type: "ADD_LOG",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: "DELETE_LOG",
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: "UPDATE_LOG",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "LOGS_ERROR",
      payload: err.response.statusText,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: "SET_CURRENT",
    payload: log,
  };
};
