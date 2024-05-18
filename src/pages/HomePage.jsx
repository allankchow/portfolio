import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HomePage = () => {
    const backgroundRef = useRef(null);

    useEffect(() => {
        const maxJitter = 100; 

        const jitterAnimation = () => {
            gsap.to(backgroundRef.current, {
                duration: 1,  
                ease: 'rough({strength: 2, points: 20, taper: "none", randomize: true, clamp: false})',
                backgroundPosition: () => {
                    // Calculate random position for the jitter
                    const jitterX = Math.random() * maxJitter * 2 - maxJitter;
                    const jitterY = Math.random() * maxJitter * 2 - maxJitter;
                    return `${50 + jitterX}% ${50 + jitterY}%`;
                },
                onComplete: jitterAnimation 
            });
        };

        jitterAnimation(); 
    }, []);

    return (
        <div className="home-container">
            <div ref={backgroundRef} className="animated-background">
                <h1>ALLAN</h1>
                <h1>CHOW</h1>
                <h1>.DEV</h1>
                <p>Full Stack Developer & Mechatronic Systems Engineer</p>
            </div>
        </div>
    );
};

export default HomePage;
