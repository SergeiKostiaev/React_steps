import PropTypes from "prop-types";
import Header from "./Constants";

function DateInput(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onInput(name, value);
  };

  return (
    <>
      <label htmlFor="date">{Header.date}</label>
      <input
        type="date"
        name="date"
        value={props.date}
        id="date"
        className="form-input"
        min="1900-01-01"
        required
        onChange={handleChange}
      />
    </>
  );
}

DateInput.propTypes = {
  date: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default DateInput;