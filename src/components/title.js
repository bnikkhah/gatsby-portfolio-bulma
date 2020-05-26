import React from 'react'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

const Title = ({ title, triggerElement = '.section' }) => {

    return (
        <div className="title-area">
            <div className="container">
                <Controller>
                    <Scene
                        duration={600}
                        triggerElement={triggerElement}
                    >
                        {
                            (progress, event) => (
                                <Tween
                                    from={{ opacity: 0, x: "-100px" }}
                                    paused
                                    playState={
                                        (event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' : 
                                        (event.type === 'leave' && event.scrollDirection === 'REVERSE') ? 'reverse' : null
                                    }
                                >
                                    <h2>{title}</h2>
                                </Tween>
                            )
                        }
                    </Scene>
                </Controller>
            </div>
        </div>
    )
}

export default Title