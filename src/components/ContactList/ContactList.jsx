import React from "react";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact, onToggleCompleted }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number, completed }) => (
        <li
          key={id}
          className={`${
            completed ? css.contact_item_send : css.contact_item_bgc
          } ${css.contact_item}`}
        >
          <Contact
            completed={completed}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
