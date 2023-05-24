import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-between">
        <h3 className="mb-0">Koranovel</h3>
        <nav className="nav justify-content-center">
          <style jsx>{`
            .nav-link {
              color: white;
              padding: 0.25rem 0.75rem;
              color: rgba(255, 255, 255, 0.5);
              font-weight: 700;
            }

            .selected {
              color: #fff;
              border-bottom: 0.25rem solid;
              border-bottom-color: #fff;
            }
          `}</style>
          <ActiveLink href="/" activeClassName="selected">
            <a className="nav-link">Home</a>
          </ActiveLink>
          <ActiveLink href="/about" activeClassName="selected">
            <a className="nav-link">About</a>
          </ActiveLink>
          <ActiveLink href="/novel" activeClassName="selected">
            <a className="nav-link">My Novel</a>
          </ActiveLink>
          <ActiveLink href="/store" activeClassName="selected">
            <a className="nav-link">Case Store</a>
          </ActiveLink>
          <ActiveLink href="/ebook" activeClassName="selected">
            <a className="nav-link">EBook Store</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
