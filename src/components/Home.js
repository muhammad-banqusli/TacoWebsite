import React from "react";
import image from "../assets/images/tacos_and_drink_1000x667.png";

import Menu from "./Menu";

const Home = () => {
    return (
        <>
            <section className="hero">
                <h2 className="hero__h2">Bienvenidos</h2>
                <figure>
                    <img
                        src={image}
                        alt="Tacos and a Drink"
                        title="We love tacos!"
                        width="1000"
                        height="667"
                    />
                    <figcaption className="offscreen">
                        Tacos and a Drink
                    </figcaption>
                </figure>
            </section>
            <main className="main">
                <Menu />
                <p className="center">
                    <a href="#">Back To Top</a>
                </p>
            </main>
        </>
    );
};

export default Home;
