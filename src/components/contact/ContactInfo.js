import React from 'react';

function ContactInfo(props) {
    return (
        <div className={props.gridWidth}>
            <div className='card'>
                <div className='card-body p-4 p-lg-5'>
                    <h5 className='mb-4'>We are here to help you!</h5>
                    <ul className='list-unstyled mb-4'>
                        <li className='d-flex mb-4'>
                            <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-globe'></i>
                            </div>
                            <div className='ms-3'>
                                <h6>Company Address</h6>
                                <p className='text-sm text-muted mb-0'>62 Bridge Street, Kington, United Kingdom, HR5 3DJ
                                    United Kingdom
                                </p>
                            </div>
                        </li>
                        <li className='d-flex mb-4'>
                            <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-phone'></i>
                            </div>
                            <div className='ms-3'>
                                <h6>Hot lines</h6>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a
                                            className='text-decoration-none text-sm text-muted mb-1'
                                            rel='noreferrer'
                                            href='tel:447897060588'
                                        >
                                            +447897060588
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a
                                            className='text-decoration-none text-sm text-muted mb-0'
                                            rel='noreferrer'
                                            href='tel:tel:454759654'
                                        >
                                            +20 454 746 249
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </li>
                        <li className='d-flex mb-3'>
                            <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-envelope'></i>
                            </div>
                            <div className='ms-3'>
                                <h6>Email address</h6>
                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a
                                            className='text-decoration-none text-sm text-muted mb-1'
                                            rel='noreferrer'
                                            href='mailto:info@mintsea.io'
                                        >
                                            info@mintsea.io
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-decoration-none text-sm text-muted mb-1'
                                            rel='noreferrer'
                                            href='mailto:contact@mintsea.io'
                                        >
                                            contact@mintsea.io
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <h2 className='h5 mb-1'>We are social</h2>
                    <p className='small text-muted mb-3'>
                        We are active on every social media network. Join our Network <br /> and start your NFT journey with Us.
                    </p>
                    <ul className='list-inline mb-0'>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100092237452425'>
                                <i className='lab la-facebook-f'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href='https://www.pinterest.com/mintseaio/'>
                                <i className='lab la-pinterest'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href='https://twitter.com/mintsea_io'>
                                <i className='lab la-twitter'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href=' https://www.instagram.com/mintsea.io/'>
                                <i className='las la-link'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
