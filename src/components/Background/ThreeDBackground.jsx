// import Spline from '@splinetool/react-spline';
import { Suspense, useState } from 'react';
import './ThreeDBackground.scss';

const ThreeDBackground = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="three-d-background">
            <Suspense fallback={<div className="loader">Loading 3D Model...</div>}>
                {/* 
            Tip: Replace this URL with your own Spline scene export! 
            Go to spline.design -> Export -> Viewer -> Copy Embed URL / Code 
         */}
                {/* <Spline
                    scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                    onLoad={() => setIsLoaded(true)}
                /> */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'var(--color-text)',
                    opacity: 0.2,
                    fontSize: '2rem',
                    fontFamily: 'var(--font-display)'
                }}>
                    [3D SCENE PLACEHOLDER]
                </div>
            </Suspense>
            <div className={`overlay ${isLoaded ? 'fade-out' : ''}`}></div>
        </div>
    );
};

export default ThreeDBackground;
