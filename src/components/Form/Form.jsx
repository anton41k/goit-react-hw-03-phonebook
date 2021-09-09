import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import css from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
    this.props.resFilter();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form_label} htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            className={css.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>

        <label className={css.form_label} htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
            className={css.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={number}
          />
        </label>
        <button className={css.form_submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
