import { Helmet } from "react-helmet";
import "./homeStyles.scss";

export default function HomePage() {
  /*  const posts = useQuery({
      queryKey: ["posts"],
      queryFn: () => axios.get(BASE_URL + "/posts").then((res) => res.data),
    });*/

  return (
    <>
      <Helmet title={"Home"} />
      <section className={"hero"}>
        <h1>Welcome to SAS Virtual</h1>
        <p>Your virtual journey starts here.</p>
        <a
          href="https://vamsys.io/register/vsas"
          target="_blank"
          className="cta-button"
        >
          Join Now
        </a>
      </section>
      <section id="info">
        <h2>About SAS Virtual</h2>
        <p>
          Scandinavian Airlines Virtual is a virtual airline for flight
          simulation enthusiasts. We strive to provide a realistic and
          professional virtual aviation experience for our pilots. Our virtual
          airline is designed to simulate the operations of an airline, using
          real-world airline schedules, rules and procedures. We offer a variety
          of routes and aircraft, allowing our pilots to experience the thrill
          of flying in a realistic environment. Join us today and start your
          virtual aviation journey.
        </p>
      </section>
      <section id="fleet">
        <h2>Our Fleet</h2>
        <p>
          At Scandinavian Airlines Virtual, we operate a diverse fleet of
          aircraft to serve our various routes. From short-haul regional jets to
          long-haul widebodies, our fleet is equipped to provide a comfortable
          and enjoyable flight experience.
        </p>
      </section>
      <section id="destinations">
        <h2>Our Destinations</h2>
        <p>
          Scandinavian Airlines Virtual serves a wide range of destinations
          across the globe. Whether you're looking to explore the scenic
          landscapes of Scandinavia, the bustling cities of Europe, or the far
          reaches of Asia and North America, we have a flight for you.
        </p>
      </section>
    </>
  );
}
