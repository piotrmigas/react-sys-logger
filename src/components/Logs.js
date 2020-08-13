import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "./Preloader";
import { getLogs } from "../redux/actions/logActions";

const Logs = () => {
  const dispatch = useDispatch();

  const logs = useSelector((state) => state.log.logs);
  const loading = useSelector((state) => state.log.loading);

  React.useEffect(() => {
    dispatch(getLogs());
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
