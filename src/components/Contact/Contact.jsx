import React from "react";
import css from "./Contact.module.css";

const Contact = ({
  completed,
  name,
  number,
  onDeleteContact,
  onToggleCompleted,
}) => {
  return (
    <>
      <input
        type="checkbox"
        className={css.contact_checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <span className={css.contact_name}>{name}</span>
      <span className={css.contact_number}>{number}</span>

      <button className={css.del_btn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

export default Contact;
