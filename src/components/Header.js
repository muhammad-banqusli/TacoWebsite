import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [newClick, setNewClick] = useState(false);

    const locations = [
        { path: "/", text: "Home" },
        { path: "#menu", text: "Menu" },
        { path: "/hours", text: "Hours" },
        { path: "/contact", text: "Contact" },
        { path: "/about", text: "About" },
    ];

    const MyLink = ({ target }) => (
        <li>
            {target.path.includes("#") ? (
                <a
                    style={{textDecoration: 'underline'}}
                    onClick={() => {
                        navigate("/", {
                            state: { targetId: "menu", newClick },
                        });
                        setNewClick(!newClick);
                    }}
                >
                    {target.text}
                </a>
            ) : (
                <Link to={target.path}>{target.text}</Link>
            )}
        </li>
    );

    return (
        <header className="header">
            <h1 className="header__h1">Little Taco Shop</h1>
            <nav className="header__nav">
                <ul className="header__ul">
                    {locations
                        .filter((item) => item.path !== pathname)
                        .map((item) => (
                            <MyLink key={item.text} target={item} />
                        ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
