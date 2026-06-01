export default function FeaturedProject() {
  return (
    <section id="featured-project" className="section">
      <h2>Featured Project</h2>

      <div className="featured-card">
        <h3>EduVerse AI – AI-Powered Multi-Tenant E-Learning Platform</h3>

        <span>
          Angular • Python • FastAPI • MongoDB • LangChain • LLMs • AWS
        </span>

        <div className="project-links">
          <a
            href="https://eduverse-ai-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo 
          </a>

          {/* <a
            href="https://eduverse-ai-main-backend.onrender.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend API ↗
          </a> */}
        </div>

        <p>
          EduVerse AI is an AI-powered multi-tenant e-learning platform designed
          to provide personalized learning experiences for students and
          institutions. The platform allows multiple institutions to operate
          independently with secure data isolation, role-based access control,
          and scalable course management.
        </p>

        <ul>
          <li>
            Developed a multi-tenant SaaS architecture with secure
            institution-level data separation.
          </li>
          <li>
            Implemented role-based access for students, teachers, admins, and
            super admins.
          </li>
          <li>
            Integrated an AI learning assistant for question answering, content
            summarization, and personalized recommendations.
          </li>
          <li>
            Built core modules including course management, quizzes,
            assignments, progress tracking, and learning analytics.
          </li>
          <li>
            Designed scalable backend APIs using FastAPI and MongoDB with AI
            integration using LangChain and LLMs.
          </li>
        </ul>
      </div>
    </section>
  );
}