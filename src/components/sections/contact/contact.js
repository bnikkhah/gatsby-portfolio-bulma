import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Title from '../../title'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [modalActive, setModalActive] = useState(false)

    const data = useStaticQuery(graphql`
        query AvatarQuery {
            allContentfulAuthor {
                edges {
                    node {
                        image {
                            sizes(quality: 100) {
                                ...GatsbyContentfulSizes_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                name,
                email,
                message
            })
        })
        .then(
            setModalActive(true)
        )
        .catch(error => alert(error));
    
        e.preventDefault();
    }

    return (
        <section className="section" id="contact">
            <Title title="Contact" triggerElement="#contact" />
            <Controller>
                <Scene duration={600} triggerElement="#contact">
                    {
                        (progress, event) => (
                            <Tween
                                from={{ opacity: 0, y: "200px" }}
                                paused
                                playState={
                                    (event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' : 
                                    (event.type === 'leave' && event.scrollDirection === 'REVERSE') ? 'reverse' : null
                                }
                            >
                                <div className="form-area">
                                    <div className="container">
                                        <div className="columns">
                                            <div className="column is-full">
                                                <form onSubmit={handleSubmit}>
                                                    <input type="hidden" name="bot-field" />
                                                    <div className="field">
                                                        <label className="label" htmlFor="name">Name</label>
                                                        <div className="control">
                                                            <input
                                                                className="input"
                                                                type="text"
                                                                placeholder="Type your name here..."
                                                                onChange={(e) => setName(e.target.value)}
                                                                name="name"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="field">
                                                        <label className="label" htmlFor="email">Email</label>
                                                        <div className="control">
                                                            <input
                                                                className="input"
                                                                type="email"
                                                                placeholder="e.g. alexsmith@gmail.com"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                name="email"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="field">
                                                        <label className="label" htmlFor="message">Message</label>
                                                        <div className="control">
                                                            <textarea
                                                                className="textarea"
                                                                placeholder="Type your message here..."
                                                                onChange={(e) => setMessage(e.target.value)}
                                                                name="message"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="control">
                                                        <button className="button is-primary">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tween>
                        )
                    }
                </Scene>
            </Controller>
            <div className={`modal ${modalActive && 'is-active'}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-128x128">
                                    {
                                        data.allContentfulAuthor.edges.map((edge) => (
                                            <Img sizes={edge.node.image.sizes} key={edge.node.image} />
                                        ))
                                    }
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <h3 className="is-size-4 is-uppercase">Thank you!</h3>
                                    <p>I'll keep in touch with you soon!</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => setModalActive(false)}></button>
            </div>
        </section>
    )
}

export default Contact