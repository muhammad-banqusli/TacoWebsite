import React from "react";
import image from "../assets/images/tacos_delicioso_1000x667.png";

const About = () => {
    return (
        <>
            <section className="hero">
                <figure>
                    <img
                        src={image}
                        alt="Tacos Delicioso"
                        title="Tacos Delicioso!"
                        width="1000"
                        height="667"
                    />
                    <figcaption className="offscreen">
                        Try these Delicious Tacos
                    </figcaption>
                </figure>
            </section>

            <main className="main">
                <article className="about">
                    <h2>
                        About <abbr title="The Little Taco Shop">LTS</abbr>
                    </h2>
                    <p>
                        <abbr title="The Little Taco Shop">LTS</abbr> was
                        founded in <time dateTime="1999">1999</time>. Our shop
                        was built from a <strong>love of tacos</strong> 🌮🌮🌮.
                        We hope our shop adds a unique and interesting place to
                        our little town.
                    </p>
                </article>
                <aside className="about__trivia">
                    <h3>Taco Trivia</h3>
                    <details>
                        <summary>
                            When did tacos first appear in the United States?
                        </summary>
                        <p className="about__trivia-answer">
                            Jeffrey M. Pilcher, taco historian and professor of
                            history at the University of Minnesota, says the
                            earliest mention of tacos in the United States are
                            in a newspaper from
                            <time dateTime="1905">1905</time>. (Source:{" "}
                            <cite>
                                <a
                                    href="https://www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-81228162/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Smithsonian Magazine
                                </a>
                            </cite>
                            )
                        </p>
                    </details>
                </aside>
            </main>
        </>
    );
};

export default About;
