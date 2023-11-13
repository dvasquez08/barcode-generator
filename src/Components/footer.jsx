import React from "react";

// Seperate component that was made for the footer. Styled using Bootstrap
// classnames, the footer contains links to my portfolio and GitHub and the
// target is set to open the page in another tab

function Footer() {
  return (
    <footer className="footer mt-5 py-3 bg-secondary container-fluid">
      <div className="container">
        <p>
          {/* 
        Portfolio link config */}
          Click{" "}
          <a
            href="https://dvasquez08.github.io"
            target="_blank"
            className="text-decoration-none text-warning"
          >
            here
          </a>{" "}
          for my portfolio.
          {/* GitHub Link config */}
          Click
          <a
            href="https://github.com/dvasquez08"
            target="_blank"
            className="text-decoration-none text-warning"
          >
            here
          </a>{" "}
          for my GitHub.
        </p>

        {/* End of links */}

        {/* Text for my full name and year */}

        <p className="text-center">
          &copy; {new Date().getFullYear()} David Vasquez
        </p>
      </div>
    </footer>
  );
}

export default Footer;
