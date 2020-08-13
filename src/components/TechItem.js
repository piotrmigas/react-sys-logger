import React from "react";
import { useDispatch } from "react-redux";
import { deleteTech } from "../redux/actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTech(tech.id));
    M.toast({ html: "Technician deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
