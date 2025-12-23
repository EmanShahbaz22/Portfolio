export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Library Management System</h3>
          <span>Java</span>
          <p>
            Developed a Java-based system to manage library operations including
            book inventory, user records, and borrowing/return tracking.
            Implemented user authentication, search functionality, and clean
            modular code for scalability.
          </p>
        </div>

        <div className="card">
          <h3>E-Learning Platform</h3>
          <span>C#</span>
          <p>
            Built an online learning platform using C# that allows students to
            register, access courses, and track their learning progress.
            Designed structured backend logic with a focus on usability and
            performance.
          </p>
        </div>

        <div className="card">
          <h3>E-Commerce & Weather Applications</h3>
          <span>Dart</span>
          <p>
            Developed a responsive E-Commerce application with product listings
            and modern UI, along with a Weather application using real-time API
            integration to display live weather data.
          </p>
        </div>
      </div>
    </section>
  );
}
