import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jai</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in building both frontend and backend applications.
            <br /> Join me on my web development journey.
          </p>
        </div>
        <button className="btn btn-primary">
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
          >
            Get In Touch
          </Link>
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/my-img.svg" alt="Hero Section" />
      </div>
    </section>
  );
}
