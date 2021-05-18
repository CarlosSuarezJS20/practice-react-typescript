import React, { FormEvent, useState } from "react";
import Toolbar from "../navigation/toolbar";
import Footer from "../footer/footer";

import axios from "axios";

import "./contact.css";

const DB_URL: string =
  "https://typescript-react-portfolio-default-rtdb.firebaseio.com";

type UserInput =
  | React.FormEvent<HTMLInputElement>
  | React.FormEvent<HTMLTextAreaElement>;

const ContactPage = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setemailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onChangedHandler = (e: UserInput, typeOfInput: string) => {
    if (typeOfInput === "name") {
      setNameValue(e.currentTarget.value);
    }

    if (typeOfInput === "email") {
      setemailValue(e.currentTarget.value);
    }

    if (typeOfInput === "message") {
      setMessageValue(e.currentTarget.value);
    }
  };

  const onSubmitBtnHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading((prevLoading) => !prevLoading);
    const userResponse = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };

    axios
      .post(`${DB_URL}/users-messages.json`, userResponse)
      .then((res) => {
        setNameValue("");
        setemailValue("");
        setMessageValue("");
        setLoading((prevLoading) => !prevLoading);
      })
      .catch((error) => {
        console.log(error);
        setLoading((prevLoading) => !prevLoading);
      });
  };

  return (
    <React.Fragment>
      <Toolbar />
      <section className="connect">
        <div className="backdrop"></div>
        <div className="form-contanier">
          <h2>let's get in touch!</h2>
          <hr />
          <form className="contact-form" onSubmit={onSubmitBtnHandler}>
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
                value={nameValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  onChangedHandler(e, "name");
                }}
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
                value={emailValue}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                  onChangedHandler(e, "email");
                }}
              />
              <textarea
                name="message"
                placeholder="message"
                className="form-control"
                rows={5}
                value={messageValue}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
                  onChangedHandler(e, "message");
                }}
              ></textarea>
            </div>
            <div className={loading ? "lds-ellipsis show" : "lds-ellipsis"}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <button
              disabled={
                nameValue === "" && emailValue === "" && messageValue === ""
              }
              type="submit"
              className="submit-btn"
            >
              submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
