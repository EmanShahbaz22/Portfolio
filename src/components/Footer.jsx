export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Eman Shahbaz. All rights reserved.
      </p>

      <div className="footer-links">
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
    </footer>
  );
}
