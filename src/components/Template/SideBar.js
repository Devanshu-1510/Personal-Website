import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Devanshu Saini</h2>
        <p><a href="mailto:Devanshusaini2580@gmail.com">----site--up--url--</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Dynamic BTech Computer Science student prioritizing skill
        acquisition and impactful project execution.
        Proficient in Python, React.js, Node.js, GitHub, and MongoDB.
        Led a 120-member team for <a href="https://niituniversity.in">NIIT University&apos;s</a> siNUsoid Tech Fest, showcasing adept leadership.
        IT Intern at <a href="https://capitalistyard.com">Captialist Yard India Pvt Limited</a>, ensuring secure, compliant, and reliable coding practices.
        Dedicated, motivated, and influential communicator with exemplary interpersonal skills.
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Devanshu Saini <Link to="/">---SITE---URL--</Link>.</p>
    </section>
  </section>
);

export default SideBar;
