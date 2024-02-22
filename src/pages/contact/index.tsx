import { Helmet } from "react-helmet";
//import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import "./contactStyles.scss";
import { useMutation } from "@tanstack/react-query";
import { BASE_URL } from "../../main.tsx";
import axios from "axios";

import "../login/loginStyles.scss";

export default function ContactPage() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [error, setError] = useState<undefined | string>(undefined);

  const contactAction = useMutation({
    mutationFn: () =>
      axios.post(`${BASE_URL}/send-email`, {
        email: Email,
        message: Message,
        name: `${FirstName} ${LastName}`,
      }),
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      FirstName.length < 1 ||
      LastName.length < 1 ||
      Email.length < 1 ||
      Message.length < 1
    ) {
      setError("Please fill out all fields");
      return;
    }
    contactAction.mutate();
  };

  return (
    <>
      <Helmet title={"Contact"} />
      <section className="contact">
        <div id="alert" className="hidden">
          <div className="container">
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              autoComplete="off"
            >
              {error && <div className="error">{error}</div>}
              <h1>Let's Chat, Reach Out to Us</h1>
              <p>
                Have questions or feedback? We're here to help. Send us a
                message, and we'll respond within 48 hours.{" "}
              </p>
              <hr />
              <div className={"cont"}>
                <div className="firstname">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    placeholder={"John"}
                    id="firstname"
                    type="text"
                    name="name"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="lastname">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    required
                    placeholder={"Doe"}
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="email">
                <label htmlFor="email">Email adress</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder={"john.doe@email.com"}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="message">
                <label htmlFor="message">Message ({Message.length} /500)</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={Message}
                  onChange={(e) => setMessage(e.target.value.substring(0, 500))}
                ></textarea>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
