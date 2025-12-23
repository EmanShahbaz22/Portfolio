export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2>Get in Touch</h2>

      <p className="contact-intro">
        Feel free to reach out for collaboration, opportunities, or just to say
        hello.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h4>Email</h4>
          <p>emanshahbaz26@gmail.com</p>
        </div>

        <div className="contact-card">
          <h4>Phone</h4>
          <p>0309-4390853</p>
        </div>

        <div className="contact-card">
          <h4>Profiles</h4>
          <div className="contact-links">
            <a
              href="https://github.com/EmanShahbaz22"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eman-shahbaz-702b67348/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
