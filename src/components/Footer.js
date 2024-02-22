import React from "react";

const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                <span className="nowrap">
                    Copyright &copy; <time dateTime={thisYear}>{thisYear}{' '}</time>
                </span>
                <span className="nowrap">Little Taco Shop</span>
            </p>
        </footer>
    );
};

export default Footer;
