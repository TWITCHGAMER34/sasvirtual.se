import { Helmet } from "react-helmet";
//import { motion } from "framer-motion";
import { useState } from "react";
import "./contactStyles.scss";

export default function ContactPage() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  return (
    <>
      <Helmet title={"Contact"} />
      <section className="contact">
        <div id="alert" className="hidden">
          <div className="container">
            <form
              action="/send-email"
              method="POST"
              encType="application/x-www-form-urlencoded"
            >
              <h1>Let´s Chat, Reach Out to Us</h1>
              <p>
                Have questions or feedback? We´re here to help. Send us a
                message, and we´ll respond within 48 hours.{" "}
              </p>
              <hr />
              <div className={"cont"}>
                <div className="firstname">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    placeholder={"First Name"}
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
                    placeholder={"Last name"}
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
                  placeholder={"Email adress"}
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
                  placeholder={"Message"}
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
