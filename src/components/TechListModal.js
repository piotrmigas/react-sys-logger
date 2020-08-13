import React from "react";
import TechItem from "./TechItem";
import { useDispatch, useSelector } from "react-redux";
import { getTechs } from "../redux/actions/techActions";

const TechListModal = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTechs());
    //eslint-disable-next-line
  }, []);

  const techs = useSelector((state) => state.tech.techs);

  const loading = useSelector((state) => state.tech.loading);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Tech List</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
