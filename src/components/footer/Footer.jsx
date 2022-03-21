import { Logo } from "../logo/Logo";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={`${styles.footer} flex-column flex-center`}>
      <h4>
        Made with <span className="secondary-text-color">&lt;/&gt;</span> by
        Shivam Pandey
      </h4>
      <ul className="gap-1 my-1">
        <li>
          <a
            href="https://github.com/shivampandey0"
            className="footer-social"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ErShivamPandey"
            className="footer-social"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/shivampandey0/"
            className="footer-social"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>

      <Logo variant={"footer"} />
    </footer>
  );
};
