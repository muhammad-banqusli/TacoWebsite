import React from "react";
import image from "../assets/images/tacos_tray_1000x667.png";

const Hours = () => {
    return (
        <>
            <section className="hero">
                <figure>
                    <img
                        src={image}
                        alt="A Tray of Tasty Tacos"
                        title="We love trays of tacos!"
                        width="1000"
                        height="667"
                    />
                    <figcaption className="offscreen">
                        A Tray of Tasty Tacos
                    </figcaption>
                </figure>
            </section>
            <main className="main">
                <article className="main__article">
                    <h2>Hours</h2>
                    <p>We are open 7 days a week!</p>
                    <dl>
                        <dt>Sunday - Thursday</dt>
                        <dd>11am - 9pm</dd>
                        <dt>Friday - Saturday</dt>
                        <dd>11am - 11pm</dd>
                    </dl>
                </article>
            </main>
        </>
    );
};

export default Hours;
