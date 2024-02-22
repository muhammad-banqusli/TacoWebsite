import React, { useState } from "react";
import image from "../assets/images/tacos_close_up_1000x649.png";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert("Please fill all the fields before submitting");
        } else {
            fetch("https://httpbin.org/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add any other headers here
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("something went wrong");
                    }
                    alert("Your message is sent!");
                    handleReset();
                })

                .catch((error) => {
                    alert(error);
                });
        }
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <>
            <section className="hero">
                <figure>
                    <img
                        src={image}
                        alt="Little Taco Shop"
                        title="Tacos ready to eat!"
                        width="1000"
                        height="649"
                    />
                    <figcaption className="offscreen">
                        Little Taco Shop Tacos
                    </figcaption>
                </figure>
            </section>
            <main className="main">
                <article className="main__article contact">
                    <h2 className="contact__h2">Our Contact Form</h2>
                    <form onSubmit={handleSubmit} className="contact__form">
                        <fieldset className="contact__fieldset">
                            <legend className="offscreen">
                                Send us a message
                            </legend>
                            <p className="contact__p">
                                <label
                                    htmlFor="name"
                                    className="contact__label"
                                >
                                    Name:{" "}
                                </label>
                                <input
                                    type="text"
                                    className="contact__input"
                                    name="name"
                                    id="name"
                                    placeholder="your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </p>
                            <p className="contact__p">
                                <label
                                    htmlFor="email"
                                    className="contact__label"
                                >
                                    Email:{" "}
                                </label>
                                <input
                                    type="email"
                                    className="contact__input"
                                    name="email"
                                    id="email"
                                    placeholder="your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </p>
                            <p className="contact__p">
                                <label
                                    htmlFor="message"
                                    className="contact__label"
                                >
                                    Message:{" "}
                                </label>
                                <textarea
                                    className="contact__textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message here"
                                    cols="30"
                                    rows="10"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </p>
                        </fieldset>
                        <button className="contact__button" type="submit">
                            Send
                        </button>
                        <button
                            className="contact__button"
                            type="reset"
                            onClick={handleReset}
                        >
                            Resest
                        </button>
                    </form>
                </article>
            </main>
        </>
    );
};

export default Contact;
