function Header() {
    return (
        <header>
            <h1 className="c-#eee bg-#78e m-0 p-t-0.5em p-b-0.5em b-rd-t-2">
                dutch
            </h1>
            <nav>
                <ul className="m-0 p-0 list-none bg-#ddd c-#78e b-rd-b-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
