import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <style jsx>{`
        .navbar {
          background-color: #25283d;
          color: #fff;
          height: 70px;
        }

        .navbar a {
          color: #fff;
          padding: 10px;
          margin: 0 5px;
        }

        .navbar a:hover {
          border-bottom: 2px #fff solid;
        }

        .navbar ul {
          display: flex;
        }

        .navbar .flex {
          justify-content: space-between;
        }
      `}</style>
      <div className="container flex">
        <h1>honzza dvorak.</h1>
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
      </div>
    </div>
  );
}
