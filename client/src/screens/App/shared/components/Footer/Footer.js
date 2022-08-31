import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  const { altColors = false } = props;
  return (
    <div
      className={
        altColors === false
          ? `${styles.footer}`
          : `${styles.footer} ${styles.footerAltColors}`
      }
    >
      <div>|</div>
      <div>
        <a
          title="GitHub repo"
          href="https://github.com/amuqeet0/leave-management-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code
        </a>
      </div>
      <div>|</div>
      <div>
        <a
          title="Issue Tracker"
          href="https://github.com/arknamuqeet0/leave-management-system/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report an issue
        </a>
      </div>
    </div>
  );
};

export default Footer;
