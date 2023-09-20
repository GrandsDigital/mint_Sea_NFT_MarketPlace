import React from 'react';
import { useForm } from '@formspree/react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../Redux/Load_offers';

function Footer() {
    const [state, handleSubmit] = useForm('xlezgplp');
    let dispatch = useDispatch()

    return (
        <footer className='footer bg-map bg-dark bg-gray'>
            <div className='container py-5 z-index-20'>
                <div className='row pt-5'>
                    <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>Marketplace</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/explore'>
                                    All NFTs
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/categories/art' onClick={() => dispatch(setCategory("art"))}>
                                    Art
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/categories/music' onClick={() => dispatch(setCategory("music"))}>
                                    Music
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/categories/domainNames' onClick={() => dispatch(setCategory("domainNames"))}>
                                    Domain Names
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/categories/virtualWorlds' onClick={() => dispatch(setCategory("virtualWorlds"))}>
                                    Virtual World
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>Resources</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/' rel='noreferrer'>
                                    Help Center
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/' rel='noreferrer'>
                                    Partners
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/' rel='noreferrer'>
                                    Suggestions
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/' rel='noreferrer'>
                                    Discord
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a className='text-sm text-reset' href='/' rel='noreferrer'>
                                    Docs
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>Account</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/User_Profile'>
                                    Profile
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/Favorite'>
                                Favourites
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/User_Collection'>
                                    Collection
                                </NavLink>
                            </li>
                            {/* <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/'>
                                    Setting
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <h6>About Us</h6>
                        <ul className='list-unstyled text-muted mb-4'>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/about-us'>
                                    About us
                                </NavLink>
                            </li>
                        </ul>

                        <h6>Support</h6>
                        <ul className='list-unstyled text-muted mb-0'>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/docs'>
                                    Docs
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/privacy-policy'>
                                    Privacy & Policy
                                </NavLink>
                            </li>
                            <li className='mb-1'>
                                <NavLink className='text-sm text-reset' to='/terms-of-service'>
                                    Terms of Service
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <h6>Newsletter</h6>
                        <p className='text-sm text-muted'>
                        Subscribe to our newsletter to get updates regarding all NFTs and the marketplace.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className='input-group shadow-sm bg-body rounded-sm'>
                                <input
                                    className='form-control border-0 bg-none shadow-0'
                                    type='email'
                                    name='email'
                                    autoComplete='off'
                                    placeholder='Enter your email address...'
                                />
                                <button className='btn btn-primary btn-sm' type='submit'>
                                    <i className='las la-paper-plane'></i>
                                </button>
                            </div>
                        </form>
                        {state.succeeded ? (
                            <p className='bg-primary text-white mt-1 px-3 py-1  rounded-sm'>Thanks!</p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='pt-1 bg-body rounded-pill'></div>
            </div>

            <div className='container py-4'>
                <div className='row text-center'>
                    <p className='text-muted text-sm mb-0'>
                        © 2022 All rights reserved. Designed with <i className='las la-xs text-primary la-heart'></i> by{' '}
                        <span className='text-primary'>Sohail Ahmed.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
