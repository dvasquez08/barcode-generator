import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-secondary">
      <div className="container">
        <p className="text-center text-muted">
          &copy; {new Date().getFullYear()} David Vasquez
        </p>
      </div>
    </footer>
  );
}

export default Footer;
