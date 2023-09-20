import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';

import { particlesOptions } from '../../helpers/constants';
import { useDispatch } from 'react-redux';

function HomeBanner() {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);
  
    return (
        <section className='hero bg-dark py-5'>
            <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
            {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}
            <div className='container py-5 z-index-10 position-relative mt-5'>
                <div className='row align-items-center mt-5'>
                    <div className='col-lg-5'>
                        
                        <h2>Begin Your NFT Collection Today with Us.</h2>
                        <p className='text-muted'>
                            Whether you are a beginner, expert, or anything in between, MintSea is the right place for you.
                        </p>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <Link className='btn btn-gradient-primary' to='/mint'>
                                    Mint NFT
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link className='btn btn-light' to='/explore'>
                                    Explore
                                </Link>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center pt-5'>
                            <div className='me-4 text-center'>
                                <p className='h1 mb-0'>942</p>
                                <span className='text-muted'>Collectibles</span>
                            </div>
                            <div className='me-4 text-center'>
                                <p className='h1 mb-0'>27k</p>
                                <span className='text-muted'>Auctions</span>
                            </div>
                            <div className='me-4 text-center'>
                                <p className='h1 mb-0'>4k</p>
                                <span className='text-muted'>NFT</span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 ms-auto d-none d-lg-block'>
                        <img className='img-fluid mx-auto' src=' images/illu-3.png' alt='..' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
