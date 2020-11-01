import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-light py-5">
      <style jsx>{`
        .footer .social a {
          margin: 0 10px;
        }
      `}</style>

      <div className="container grid grid-3">
        <div>
          <h1>honzza dvorak.</h1>
          <p>copyright &copy; 2020</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="#">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
