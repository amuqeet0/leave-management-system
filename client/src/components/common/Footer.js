import React from 'react';
import styles from './footerStyles.module.css';

const Footer = ({ isDarkTheme, textColor = null, lightTextColor = null }) => {
  return (
    <div
      className={
        isDarkTheme ? styles.footer : `${styles.footer} ${styles.lightTheme}`
      }
      style={{
        color:
          textColor !== null ? (isDarkTheme ? textColor : lightTextColor) : null
      }}>
      <div>
        Currently maintained by&nbsp;
        <a
          title="My GitHub user page"
          href="https://github.com/arkn98"
          target="_blank"
          rel="noopener noreferrer">
          Arun Kumar
        </a>
      </div>
      <div>|</div>
      <div>
        <a
          title="GitHub repo"
          href="https://github.com/arkn98/lms"
          target="_blank"
          rel="noopener noreferrer">
          View Source Code
        </a>
      </div>
      <div>|</div>
      <div>
        <a
          title="Issue Tracker"
          href="https://github.com/arkn98/lms/issues"
          target="_blank"
          rel="noopener noreferrer">
          Report an issue
        </a>
      </div>
      <div>|</div>
      <div>
        <a
          title="Submit your feedback"
          href="https://goo.gl/forms/NP0pqpHuDlRYGoz92"
          target="_blank"
          rel="noopener noreferrer">
          Feedback
        </a>
      </div>
    </div>
  );
};

export default Footer;
