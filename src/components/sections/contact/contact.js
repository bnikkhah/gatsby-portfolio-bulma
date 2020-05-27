import React from 'react'

import Title from '../../title'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

const Contact = () => {

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
                                                <form method="post" action={`https://www.flexyform.com/f/${process.env.FLEXY_FORM_ID}`}>
                                                    <input type="hidden" name="bot-field" />
                                                    <div className="field">
                                                        <label className="label" htmlFor="name">Name</label>
                                                        <div className="control">
                                                            <input
                                                                className="input"
                                                                type="text"
                                                                placeholder="Type your name here..."
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
        </section>
    )
}

export default Contact