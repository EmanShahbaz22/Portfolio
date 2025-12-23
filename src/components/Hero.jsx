import profile from "../assets/eman.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="hero-badge"> Welcome to my portfolio</span>

        <h1>
          Hi There! <br />
          I am <span className="highlight"> Software Developer</span>
        </h1>

        <p className="hero-subtitle">
          I design and build clean, scalable, and user-friendly applications
          using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="#projects" className="btn outline">View Projects</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="photo-card">
          <img src={profile} alt="Eman Shahbaz" />
        </div>
      </div>
    </section>
  );
}
