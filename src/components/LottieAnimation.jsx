import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, loop = false, onComplete, speed = 1, scale = 1 }) => {
    const animationContainer = useRef(null);
    const anim = useRef(null);

    useEffect(() => {
        if (animationContainer.current) {
            anim.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: loop,
                autoplay: true,
                animationData: animationData,
            });

            anim.current.setSpeed(speed);

            if (!loop && onComplete) {
                anim.current.addEventListener('complete', onComplete);
            }

            // Apply CSS transformations if scale is not 1
            const svgElement = animationContainer.current.querySelector('svg');
            if (svgElement && scale !== 1) {
                svgElement.style.transform = `scale(${scale})`;
                svgElement.style.transformOrigin = "center center";
            }

            return () => {
                if (anim.current) {
                    if (onComplete) {
                        anim.current.removeEventListener('complete', onComplete);
                    }
                    anim.current.destroy();
                }
            };
        }
    }, [animationData, loop, onComplete, speed, scale]); // Add scale to the dependency array

    return <div ref={animationContainer} />;
};

export default LottieAnimation;
