export default function Footer() {
  return (
    <footer className="footer bg-light py-3">
      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer .social a {
          margin: 0 10px;
        }
      `}</style>
      <div>
        <p>webdesign honzza dvorak 2020</p>
      </div>
      <div className="social">
        <a href="#">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="#">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}
