import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteLog, setCurrent } from "../redux/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteLog(log.id));
    M.toast({ html: "Log Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${log.attention ? "red-text" : "blue-text"}`}
          onClick={() => dispatch(setCurrent(log))}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by
          <span className="black-text"> {log.tech}</span> on <Moment format="Do MMMM YYYY, H:mm">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
