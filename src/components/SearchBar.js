import React from "react";
import { useDispatch } from "react-redux";
import { searchLogs } from "../redux/actions/logActions";

const SearchBar = () => {
  const text = React.useRef("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(searchLogs(text.current.value));
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue darken-4">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search Logs.." ref={text} onChange={onChange} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
