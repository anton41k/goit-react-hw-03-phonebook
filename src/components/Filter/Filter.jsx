import React from "react";
import css from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={css.filter_label}>
    Find contacts by name
    <input
      className={css.filter_input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
