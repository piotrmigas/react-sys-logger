import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechs } from "../redux/actions/techActions";

const TechSelectOptions = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTechs());
    //eslint-disable-next-line
  }, []);

  const techs = useSelector((state) => state.tech.techs);

  const loading = useSelector((state) => state.tech.loading);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechSelectOptions;
