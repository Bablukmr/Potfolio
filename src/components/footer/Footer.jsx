import React from 'react';
import styles from './Footer.module.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div className={styles.footer_main}>
<div className={styles.footer_name}><h4>Bablu Kumar</h4></div>
      <div className={styles.footer_mid }>© 2023 </div>
      <div className={styles.footer_icon}> <a href="https://www.linkedin.com/in/bablukmr/" target="_LinkdIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Bablukmr" target="_GitHub">
            {" "}
            <GitHubIcon />
          </a>
          <a href="https://www.facebook.com/Bablukmr01" target="_Facebook">
            {" "}
            <FacebookIcon />{" "}
          </a> </div>
    </div>
  )
}
