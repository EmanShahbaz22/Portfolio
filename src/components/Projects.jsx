export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="grid">
        {/* Library Management System */}
        <div className="card">
          <h3>Library Management System</h3>
          <span>Java</span>
          <p>
            Developed a Java-based system to manage library operations including
            book inventory, user records, and borrowing/return tracking.
            Implemented user authentication, search functionality, and a clean
            modular structure to ensure scalability and maintainability.
          </p>
        </div>

        {/* E-Learning Platform */}
        <div className="card">
          <h3>E-Learning Platform</h3>
          <span>C#</span>
          <p>
            Built an online learning platform using C# that allows students to
            register, access courses, and track their learning progress.
            Designed structured backend logic with a strong focus on usability
            and performance.
          </p>
        </div>

        {/* E-Commerce & Weather App */}
        <div className="card">
          <h3>E-Commerce & Weather Applications</h3>
          <span>Dart</span>
          <p>
            Developed a responsive E-Commerce application with product listings
            and a modern user interface, along with a Weather application using
            real-time API integration to display live weather data accurately.
          </p>
        </div>

        {/* Chatbot */}
        <div className="card">
          <h3>AI Chatbot Application</h3>
          <span>React</span>
          <p>
            Developed an interactive chatbot using React that provides
            real-time responses through intelligent conversation flow.
            Focused on component-based architecture, clean UI, and smooth
            user interaction.
          </p>
        </div>

        {/* SnapSecure AI */}
        <div className="card">
          <h3>SnapSecure AI – Screenshot Privacy Protector</h3>
          <span>React • Python • OCR • AI/ML • Security</span>
          <p>
            An AI-powered security application designed to protect sensitive
            information in screenshots. Utilizes OCR (Tesseract) to extract
            text from images and AI/ML-based pattern recognition to detect
            passwords, credit cards, API keys, and other confidential data,
            applying automatic blurring to prevent accidental data leaks.
          </p>
        </div>

        {/* TopicLens */}
        <div className="card">
          <h3>TopicLens – AI Text Analyzer</h3>
          <span>React • Python • API</span>
          <p>
            An AI-driven web application that analyzes text and documents to
            extract key topics, important keywords, and sentiment. Built using
            a React frontend and Python-based API backend, with a focus on
            efficient text processing and clean data visualization.
          </p>
        </div>
      </div>
    </section>
  );
}
