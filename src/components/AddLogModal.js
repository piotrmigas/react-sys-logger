import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch } from "react-redux";
import { addLog } from "../redux/actions/logActions";
import TechSelectOptions from "./TechSelectOptions";

const AddLogModal = () => {
  const [message, setMessage] = React.useState("");
  const [attention, setAttention] = React.useState(false);
  const [tech, setTech] = React.useState("");

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      dispatch(addLog(newLog));

      M.toast({ html: `Log added by ${tech}` });
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech} className="browser-default" onChange={(e) => setTech(e.target.value)}>
              <option value="" disabled>
                Select Tech
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue darken-4 btn"
          style={{ marginRight: "20px" }}
        >
          Add
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
