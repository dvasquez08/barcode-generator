import React from "react";

// Seperate comonent that was made for the footer

function Footer() {
  return (
    <footer className="footer mt-5 py-3 bg-secondary container-fluid">
      <div className="container">
        <p>
          Click{" "}
          <a
            href="https://dvasquez08.github.io"
            target="_blank"
            className="text-decoration-none text-warning"
          >
            here
          </a>{" "}
          for my portfolio. Click{" "}
          <a
            href="https://github.com/dvasquez08"
            target="_blank"
            className="text-decoration-none text-warning"
          >
            here
          </a>{" "}
          for my GitHub.
        </p>
        <p className="text-center">
          &copy; {new Date().getFullYear()} David Vasquez
        </p>
      </div>
    </footer>
  );
}

export default Footer;
