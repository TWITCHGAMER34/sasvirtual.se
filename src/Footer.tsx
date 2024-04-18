import "./footer.scss";

/**
 * Footer component.
 * Contains the footer of the website.
 * Contains the company name, the year, and the names of the developers.
 * @constructor
 */

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; 2023 Scandinavian Airlines Virtual. All rights reserved.</p>
          <div className="made-by">
            <p>Made by Nagy_Zoltán34 & Setilic UF | In cooperation with:</p>
            <a href="https://discord.gg/zNpUf22Wxn" target="_blank">
              <img src="/zoltan.jpg" alt="Nagy_Zoltán34 Profile Picture" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
