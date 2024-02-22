import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./aboutStyles.scss";

const content = [
  {
    title: "Our Mission",
    text: "To create a realistic and engaging virtual aviation community that mirrors the ethos of Scandinavian Airlines. We strive to uphold the highest standards of professionalism, safety, and customer service, ensuring that each virtual flight is a memorable journey.",
  },
  {
    title: "Our Fleet",
    text: "Our virtual fleet features a diverse array of aircraft, meticulously modeled after the real-world Scandinavian Airlines fleet. From the versatile Airbus A320 family to the long-haul Boeing 787 Dreamliner, our fleet is equipped with the latest in flight simulation technology, providing an authentic and immersive flying experience.",
  },
  {
    title: "Our Destinations",
    text: "We virtually connect the world with an extensive network of routes, spanning from the heart of Scandinavia to destinations across Europe, North America, and Asia. Our routes are carefully designed to reflect the actual network of Scandinavian Airlines, offering a mix of bustling cities, scenic landscapes, and hidden gems.",
  },
  {
    title: "Our Community",
    text: "At the heart of Scandinavian Airlines Virtual is our vibrant community of pilots, air traffic controllers, and aviation enthusiasts. We foster a welcoming environment where members can share their passion for flying, learn from each other, and create lasting friendships. Our community events, including group flights and air traffic control sessions, are highlights of the virtual airline experience.",
  },
  {
    title: "Our Commitment to Realism",
    text: "We are committed to providing an environment that closely simulates real-world aviation operations. Our pilots follow realistic flight procedures, adhere to air traffic control instructions, and navigate using accurate airways and waypoints. We also offer training programs to enhance flying skills and knowledge of aviation practices.",
  },
  {
    title: "Join Us",
    text: "Whether you're a seasoned virtual pilot or new to the world of flight simulation, Scandinavian Airlines Virtual welcomes you aboard. Join us to explore the skies, experience the thrill of flying, and be part of a community that shares your passion for aviation.",
  },
  {
    title:
      "Fly Virtually. Dream Limitlessly. Welcome to Scandinavian Airlines Virtual.",
    text: "",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet title={"About"} />
      <section className="about">
        <div className="content">
          <h1>About SAS Virtual</h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text"
          >
            Welcome to Scandinavian Airlines Virtual, where the magic of air
            travel meets the advancements of the digital age. Our virtual
            airline, inspired by the renowned legacy of Scandinavian Airlines,
            is dedicated to providing aviation enthusiasts and flight simulation
            aficionados with an unparalleled virtual flying experience.
          </motion.p>

          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text">
                <strong>{item.title}</strong>
              </p>
              <p className="text">{item.text}</p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: content.length * 0.1 }}
            className={"text"}
          >
            <strong>Discord Link:</strong>{" "}
            <a className={"Dc-link"} href="https://discord.gg/PQaMn2bQXZ">
              {" "}
              SAS Virtual Discord Server
            </a>
          </motion.p>
        </div>
      </section>
    </>
  );
}
