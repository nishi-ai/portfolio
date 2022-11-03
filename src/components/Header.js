const Header = (props) => {

    const headerLogo = "./images/"+props.data.header_logo;

    return (
        <div className="container-header">
            <header className="logo">
                <img src={headerLogo} alt="" className="logo-img"/>
                <nav>
                <ul>
                    <li><a href="/">About me</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                </nav>
            </header>
        </div>

    );
}

export default Header;