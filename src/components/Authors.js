import React, { useEffect, useContext, useState } from 'react';
import PageBanner from './general/PageBanner';
import FullScreenLoader from './general/FullScreenLoader';
import axios from 'axios';
import { useAccount } from 'wagmi';
import usePagination from '../helpers/Pagination';
import { Avatar, Pagination } from '@mui/material';


function Authors({ sellers }) { 
    const [show_Authers, setShow_Authers] = useState([])
    const { address } = useAccount();
    const [currentPage, setPage] = useState(1);
    const [itemsPerPage] = useState(10);


    const get_All_Authors = async () => {
        try {
            let res = await axios.get("https://sanjhavehra.womenempowerment.online/get_All_user_profile")
            res = res.data.data
            // console.log("Authers",res);
            setShow_Authers(res)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_All_Authors()
        document.title = 'All Authors | NFT Marketplace';
    }, []);

    // Pagination
    const count = Math.ceil(show_Authers?.length / itemsPerPage);
        const _DATA = usePagination(show_Authers, itemsPerPage);
    
        const handleChange = (e, p) => {
            setPage(p);
            _DATA.jump(p);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    // Create top sellers template
    const renderSellers = _DATA.currentData()
        // .sort((a, b) => (a.value < b.value ? 1 : -1))
        .map((seller, index) => {
           
            return (
                <div className='col-xl-3 col-lg-4 col-md-6' key={index}>
                    <div className='card bd-3 card-hover-minimal position-relative'>
                        <div className='card-body'>
                            <a
                                className='d-flex align-items-center text-reset text-decoration-none stretched-link'
                                // href={configEtherScanUrl(web3Ctx.networkId, seller.address)}
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                <p className='fw-bold text-primary mb-0'>{index + 1}.</p>
                                <div className='position-relative'>
                                    <div className='ms-3' >
                                        {/* <img src={`${API_URL}uploads/${seller.image}`} alt="" style={{borderRadius:"50%",height:"50px"}} /> */}
                                      {
                                        
                                        seller.image == "" ? <Avatar alt="" size="large"  />  :<Avatar alt="" size="large" src={`${seller.image}`} />
                                      }
                                        
                                    </div>
                                    <div className='author-img-badge bg-primary text-white'>
                                        <i className='las la-check-double la-xs'></i>
                                    </div>
                                </div>
                                <div className='ms-3'>
                                    <h3 className='h6 mb-1 text-capitalize'>
                                        {seller.username}
                                        {seller?.address?.toUpperCase() === address?.toUpperCase() ? (
                                            <span className='seller-badge ms-2'>You</span>
                                        ) : null}
                                    </h3>
                                    <p className='text-sm text-primary mb-0'>
                                        {/* {formatPrice(seller.).toFixed(2)} <span className='text-muted'>ETH</span> */}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            );
        });



       

    return (
        <>
            {show_Authers.length < 0 ? <FullScreenLoader heading='loading' /> : null}
            <PageBanner heading={'All Our Authors'} />

            <section className='py-5'>
                <div className='container pt-5'>
                    <div className='row gy-4 mb-5 align-items-stretch'>{renderSellers}</div>

                    {show_Authers?.length > 25 && (
                        <div className='d-flex justify-content-center'>
                            <Pagination
                                count={count}
                                page={currentPage}
                                onChange={handleChange}
                            />
                        </div>


                    )
                    } 
                </div>
            </section>
        </>
    );
}

export default Authors;
