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
                        <h6 className='mb-3'>Creator</h6>
                        <div className='d-flex align-items-center p-3 bg-dark bd-3 border-gray-gray-darker rounded-sm card' style={{flexDirection: "row"}}>
                            <div style={{ width: '50px', height: '35px' }}>
                                {creator.bidEndTime !== undefined  ? <>    <Avatar alt="" size="large" src={`${creator?.bidEndTime}`} /></> : <Jazzicon address={creator.owner} />}
                            </div>
                            <p className='ms-2 mb-0 text-reset'>
                               {creator.isOnAuction || "Name"}
                            </p>
                        </div>
                    </li>
                    {
                    creator.price !== "01000000000000000" && <>
                    
                    <li className='list-inline-item flex-shrink-0 me-0 col-xl-6'>
                        <h6 className='mb-3'>Owner</h6>
                        <div className='d-flex align-items-center p-3 bg-dark bd-3 border-gray-gray-darker rounded-sm card' style={{flexDirection: "row"}}>
                            <div style={{ width: '50px', height: '35px' }}>
                            {user_Profile.image !== ""  ? <> <Avatar alt="" size="large" src={`${user_Profile?.image}`} /> </> : <Jazzicon address={creator.owner} />}
                          
                            </div>
                            <p className='ms-2 mb-0 text-reset'>
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
