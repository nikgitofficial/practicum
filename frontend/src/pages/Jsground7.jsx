import React from "react";
import "./Jsground7.css";

const Jsground7 = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#contact1">Contact 1</a>
        <a href="#contact2">Contact 2</a>
        <a href="#contact3">Contact 3</a>
        <a href="#contact4">Contact 4</a>
      </nav>

      {/* Sections */}
      <section id="contact1" className="section section1">
        <h2>Contact Section 1</h2>
        <p>Lots of content here... scroll down to find the next section.</p>
      </section>

      <section id="contact2" className="section section2">
        <h2>Contact Section 2</h2>
        <p>Even more content here for smooth scrolling demo.</p>
      </section>

      <section id="contact3" className="section section3">
        <h2>Contact Section 3</h2>
        <p>Last section — smooth scrolling works perfectly.</p>
      </section>
      <section id="contact4" className="section section3">
        <h2>Contact Section 4</h2>
        <p>Last section — smooth scrolling works perfectly.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Company. All rights reserved.</p>
       <a href="#contact1">Contact 1</a>
      </footer>
    </>
  );
};

export default Jsground7;
