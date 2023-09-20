import React, { useContext, useEffect, useState } from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import Web3Context from '../../store/web3-context';
import MarketplaceContext from '../../store/marketplace-context';
import { formatPrice, configEtherScanUrl } from '../../helpers/utils';
import NoDataAlert from '../general/NoDataAlert';
import axios from 'axios';
import useWeb3 from '../Components/useWeb3';
import { API } from '../../API';
import { useAccount } from 'wagmi'
import { Avatar } from '@mui/material';


function TopSellers({ title, description, topSellers }) {
    const { walletAddress } = useWeb3();
    const web3Ctx = useContext(Web3Context);
    const marketplaceCtx = useContext(MarketplaceContext);
    const [topSeller_data, settopSeller_data] = useState([])

    const {address} = useAccount();

    const fetchData = async () => {
        let Array_data = []
        let getUserAddress = await axios.get('https://sanjhavehra.womenempowerment.online/trending_address_marketplace');
       
        getUserAddress = getUserAddress?.data?.data
        // console.log("Api_Data121", getUserAddress);

        let get_Length = getUserAddress?.length;
        // console.log("get_Length", get_Length);
        for (let i = 0; i < get_Length; i++) {
            let { User_Address } = getUserAddress[i]
            // console.log("User_Address",User_Address?.toUpperCase());
            let res = await axios.get(`https://sanjhavehra.womenempowerment.online/get_user_profile?address=${User_Address?.toUpperCase()}`)
            let responce = await axios.get(`https://sanjhavehra.womenempowerment.online/Get_User_payment_Address?Address=${User_Address.toUpperCase()}`)
            // console.log("Api_Data121", responce?.data?.data[1]?.Eth_Cost);

            Array_data = [...Array_data, { name: res?.data?.data?.username, image: res?.data?.data?.image, address: res?.data?.data?.address,Eth_const:responce?.data?.data[0]?.Eth_Cost,Metic_Cost:responce?.data?.data[0]?.Metic_Cost,BNB_Cost:responce?.data?.data[0]?.BNB_Cost }]

            // console.log("res_user", res);
            settopSeller_data(Array_data)
        }


    };





    useEffect(() => {
        fetchData()
    }, [])
    // console.log("topSeller_data",topSeller_data);

    // Create top sellers template
    const renderTopSellers = topSeller_data.slice(0,10).map((seller, index) => {
        // console.log("seller",seller);
      
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
                                <p className='fw-bold text-primary mb-0'>{index+1}.</p>
                                <div className='position-relative'>
                                    <div className='ms-3' >
                                        {/* {seller?.image ? <>  <Avatar alt=""  size="large" src={`${seller.image}`} /> </>:<><Jazzicon address="0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c" /> </>} */}
                                        <Avatar alt=""  size="large" src={`${seller.image}`} /> 
                                    </div>
                                    <div className='author-img-badge bg-primary text-white'>
                                        <i className='las la-check-double la-xs'></i>
                                    </div>
                                </div>
                                <div className='ms-3'>
                                    <h3 className='h6 mb-1 text-capitalize'>
                                    {/* <span className='seller-badge ms-2'>{seller?.name}</span> */}
                                    {seller?.name || "Name"}
                
                                    <p className='mt-1' style={{fontSize:"14px",fontWeight:"200"}}>  <span style={{color:"#2ca0c4"}}>{ seller?.Eth_const==undefined ? 0 :parseFloat(seller?.Eth_const).toFixed(5) || 0 } </span>  ETH</p>
                                    <p className='pt-0' style={{fontSize:"14px",fontWeight:"200",paddingTop:"0px",marginTop:"-10px"}}> <span style={{color:"#2ca0c4"}}>{ seller?.Metic_Cost==undefined ? 0 : parseFloat(seller?.Metic_Cost ).toFixed(5) ||0 } </span> MATIC</p>
                                    <p className='pt-0' style={{fontSize:"14px",fontWeight:"200",paddingTop:"0px",marginTop:"-10px"}}>  <span style={{color:"#2ca0c4"}}>{seller?.BNB_Cost==undefined ? 0: parseFloat(seller?.BNB_Cost).toFixed(5) ||0 } </span>  BNB</p>

                            
                                    
                                        { address?.toUpperCase() === seller?.address?.toUpperCase() ? (
                                            <span className='seller-badge ms-2'>You</span>
                                        ) : null} 
                                    </h3>
                                    {/* <p className='text-sm text-primary mb-0'>
                                        {formatPrice(seller.value).toFixed(2)} <span className='text-muted'>ETH</span>
                                    </p> */}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            );
        });


       


    return (
        <section className='py-5'>
            <div className='container pb-5'>
                <header className='mb-5'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>{title}</h2>
                            <p className='text-muted text-sm mb-0'>{description}</p>
                        </div>
                    </div>
                </header>

                <div className='row gy-3'>
                    {topSeller_data.length >0 ? (
                        renderTopSellers
                    ) : (
                        <div className='col-lg-9'>
                            <NoDataAlert
                                heading="There're no Sellers at the moment."
                                subheading='Once someone has successfully sell or buy an asset, sellers calculations will take place.'
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TopSellers;
