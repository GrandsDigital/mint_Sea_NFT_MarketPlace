import React from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import { useSelector } from 'react-redux';

import { useAccount, useChainId } from 'wagmi';
import { Avatar } from '@mui/material';


function ItemAuthor({ creator, owner,User_Probile }) {
    // console.log(creator, creator);
    // console.log(typeof creator, typeof owner);
    const user_Profile = useSelector((state) => state.Offers.user_Profile);
    const { address } = useAccount();
    return (
        <div className='row'>
            <div className='col-xl-12'>
                <ul className='list-inline d-flex align-items-center row'>
                    <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                        <h6 className='mb-3 text-white'>Creator</h6>
                        <div className='d-flex align-items-center p-3 card' style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row"}}>
                            <div style={{ width: '40px', height: '40px' }}>
                                {creator.bidEndTime !== undefined  ? <>    <Avatar alt="creator" size="large" src={`${creator?.bidEndTime}`} /></> : <Jazzicon address={creator.owner} />}
                            </div>
                            <p className='ms-2 mb-0 text-white'>
                               {/* {creator.isOnAuction || "Name"} */}
                               {creator.isOnAuction.trim() !== "" ? creator?.isOnAuction.trim() : (creator?.useraddress.trim().slice(0, 8) + "..." + creator?.useraddress.trim().slice(0, -8))}
                               {console.log("creator", creator)}
                            </p>
                        </div>
                    </li>
                    {
                    creator.price !== "01000000000000000" && <>
                    
                    <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                        <h6 className='mb-3 text-white'>Owner</h6>
                        <div className='d-flex align-items-center p-3 card' style={{background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px", flexDirection: "row"}}>
                            <div style={{ width: '40px', height: '40px' }}>
                            {user_Profile.image !== ""  ? <> <Avatar alt="owner" size="large" src={`${user_Profile?.image}`} /> </> : <Jazzicon address={creator.owner} />}
                          
                            </div>
                            <p className='ms-2 mb-0 text-white'>
                                {user_Profile?.username || "Name"}
                            </p>
                        </div>
                    </li>
                    </>

                    }
                </ul>
            </div>
        </div>
    );
}

export default ItemAuthor;
