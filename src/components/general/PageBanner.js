import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link } from 'react-router-dom';
import { particlesOptions } from '../../helpers/constants';

function PageBanner({ heading }) {
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
        <section className='py-5 bg-dark position-relative'>
           <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
            <div className='container py-5 mt-5 z-index-20'>
                <h1 className='text-center'>{heading}</h1>

                <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb justify-content-center'>
                        <li className='breadcrumb-item'>
                            <Link className='text-decoration-none d-flex align-items-center' to='/'>
                                {' '}
                                <i className='las la-home la-sm me-1'></i>Home
                            </Link>
                        </li>
                        <li className='breadcrumb-item active' aria-current='page'>
                            {heading}
                        </li>
                    </ol>
                </nav>
            </div>
        </section>
    );
}

export default PageBanner;
