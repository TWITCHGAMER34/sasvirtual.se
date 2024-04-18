import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./homeStyles.scss";

const content = [
  {
    title: "About SAS Virtual",
    img: "/home_img_1.jpg",
    text: "Scandinavian Airlines Virtual is a virtual airline for flight simulation enthusiasts. We strive to provide a realistic and professional virtual aviation experience for our pilots. Our virtual airline is designed to simulate the operations of an airline, using real-world airline schedules, rules and procedures. We offer a variety of routes and aircraft, allowing our pilots to experience the thrill of flying in a realistic environment. Join us today and start your virtual aviation journey.",
  },
  {
    title: "Our Fleet",
    img: "/home_img_2.jpg",
    text: "At Scandinavian Airlines Virtual, we operate a diverse fleet of aircraft to serve our various routes. From short-haul regional jets to long-haul widebodies, our fleet is equipped to provide a comfortable and enjoyable flight experience.",
  },
  {
    title: "Our Destinations",
    img: "/home_img_3.jpg",
    text: "Scandinavian Airlines Virtual serves a wide range of destinations across the globe. Whether you're looking to explore the scenic landscapes of Scandinavia, the bustling cities of Europe, or the far reaches of Asia and North America, we have a flight for you.",
  },
];

/**
 * Home page component.
 * This component is used to display the home page content.
 * It contains a hero section with a welcome message and a call to action button.
 * It also contains a series of cards with information about the virtual airline.
 * The cards include information about the virtual airline, the fleet, and the destinations served.
 * @constructor
 */
export default function HomePage() {
  /*  const posts = useQuery({
          queryKey: ["posts"],
          queryFn: () => axios.get(BASE_URL + "/posts").then((res) => res.data),
        });*/

  return (
    <>
      <Helmet title={"Home"} />
      <section className={"hero"}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to SAS Virtual
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your virtual journey starts here.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          href="https://vamsys.io/register/vsas"
          target="_blank"
          className="cta-button"
        >
          Join Now
        </motion.a>
      </section>
      <div className="card-container">
        {content.map((item, index) => (
          <motion.section
            className="card"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            id={item.title.toLowerCase()}
          >
            {item.img && <img src={item.img} alt={item.title} />}
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.section>
        ))}
      </div>
    </>
  );
}
