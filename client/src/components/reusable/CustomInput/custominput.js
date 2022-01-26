import React from 'react';

import "./custominput.css"

/**
 * Function to create a custom input element.
 * @param {String} label Name of input element.
 * @param {String} type Type of input.
 * @param {String} className class names of input element.
 * @param {function} onChange You can add event handler function to this.
 * @param {String} value you can add default value for this.
 * @param {String} err you can add error message for the input field.
 * @param {String} theme You can change whole theme of input element.
 * @param {String} cursorColor you can change color of cursor or by default it will accept theme color.
 * @param {String} labelColor you can change color of label or by default it will accept theme color
 * @param {String} fieldColor you can change color of field or by default it will accept theme color.
 * @param {String} errColor you can change color of error or else by default it will red.
 * @returns {jsx} returns jsx of input element.
 */
const Custominput = (props) => {
  const {label, type, className, onChange, value, err, cursorColor, labelColor, fieldColor, theme, errColor, pattern, onBlur} = props;
  return (
    <>
    <div className="styled-input mt-2">
      <input type={type} pattern={pattern} className={className} onChange={onChange} onBlur={onBlur} value={value} required style={{color:cursorColor ? cursorColor : theme}}/>
      <label style={{color: labelColor ? labelColor : theme, fontWeight:"bold"}}>{label}</label>
      <span style={{backgroundColor:fieldColor ? fieldColor : theme}}></span>
    </div>
    <p className="text-start fw-bold m-2" style={{fontSize:"10px", color:errColor ? errColor : "red"}}>{err}</p>
    </>
  );
}

export default Custominput;
