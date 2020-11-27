import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const AppHeader = () => (
  <>
    <nav id="app-navigation">
      <div className="brand">
        <Link to="/">DevPerson</Link>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="mailto:arv@devperson.dk">
            <i className="far fa-envelope"></i>
          </a>
        </li>
      </ul>
    </nav>
  </>
);

export default AppHeader;
