import React, { useState } from "react";
import "./addForm.css";

const AddForm = ({ addEmployee }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    addEmployee(newEmployee);
    clearAll();
  };

  const clearAll = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  return (
    <main>
      <div className="main__form__container">
        <div className="form__header">
          <span>New Employee</span>
        </div>
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <div className="form__field">
              <label htmlFor="firstName">
                First Name<span className="mandatory__astarik">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form__field">
              <label htmlFor="lastName">
                Last Name<span className="mandatory__astarik">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form__field">
              <label htmlFor="email">
                Email<span className="mandatory__astarik">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__field">
              <label htmlFor="phone">
                Phone<span className="mandatory__astarik">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="form__buttons">
              <button className="btn" type="button" onClick={clearAll}>
                Clear All
              </button>
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddForm;
