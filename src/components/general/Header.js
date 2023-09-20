import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link, NavLink } from 'react-router-dom';
import { navbarChangeStyle } from '../../helpers/utils';
import { Jazzicon } from '@ukstv/jazzicon-react';
import Web3 from "web3";
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId } from 'wagmi';
import { Contract, ethers } from 'ethers';
import { Contract_Addresss } from '../../Utils/Contract';
import '../../App.css'
import { AiTwotoneHeart } from 'react-icons/ai'
import { MdOutlineCollections } from 'react-icons/md';


function Header() {
    const [fundsLoading, setFundsLoading] = useState(false);
    const [darkMode, setDarkMode] = useState((localStorage.getItem("mode") === null || localStorage.getItem("mode") === "light") ? (false) : (true));
    const { addToast } = useToasts();
    const { address } = useAccount();
    const chainId = useChainId();
    const [userFunds_ClaimAble, setUserFunds_ClaimAble] = useState(0)
    const user_Profile = useSelector((state) => state.Offers.user_Profile);



    useEffect(() => {
        navbarChangeStyle();

        if (localStorage.getItem("mode") === null) {
            localStorage.setItem('mode', "light");

            document.querySelector('#root').classList.add('light');
        }
        else {
            if (localStorage.getItem("mode") === "light")
                document.querySelector('#root').classList.add('light');
            else if (localStorage.getItem("mode") === "dark")
                document.querySelector('#root').classList.remove('light');
        }
    }, [darkMode]);



    const claimFundsHandler = async () => {

        try {
            setFundsLoading(true);

            let provider = new ethers.providers.Web3Provider(window.ethereum);
            let signer = provider.getSigner()
            let contract = null
            if (chainId == 97) {
                contract = new Contract(Contract_Addresss[0].nftMarketContractAddress, Contract_Addresss[0].nftMarketContractAddress_Abi, signer);
            } else if (chainId == 11155111) {
                contract = new Contract(Contract_Addresss[1].nftMarketContractAddress, Contract_Addresss[1].nftMarketContractAddress_Abi, signer);
            } else {
                contract = new Contract(Contract_Addresss[2].nftMarketContractAddress, Contract_Addresss[2].nftMarketContractAddress_Abi, signer);
            }
            const tx = await contract.claimFunds()
            await tx.wait();
            setUserFunds_ClaimAble(0)
            setFundsLoading(false);
        } catch (error) {
            console.log(error);
            setFundsLoading(false);
        }

    };

    // Event ClaimFunds subscription

    const webSupply = new Web3("https://bsc-mainnet.public.blastapi.io");
    useEffect(() => {
        const claim_Able = async () => {
            try {
                let provider = new ethers.providers.Web3Provider(window.ethereum);
                let signer = provider.getSigner()
                let contract = null
                if (chainId == 97) {
                    contract = new Contract(Contract_Addresss[0].nftMarketContractAddress, Contract_Addresss[0].nftMarketContractAddress_Abi, signer);
                } else if (chainId == 11155111) {
                    contract = new Contract(Contract_Addresss[1].nftMarketContractAddress, Contract_Addresss[1].nftMarketContractAddress_Abi, signer);
                } else {
                    contract = new Contract(Contract_Addresss[2].nftMarketContractAddress, Contract_Addresss[2].nftMarketContractAddress_Abi, signer);
                }
                const tx = await contract.userFunds(address)
                let Claim_Amount = parseInt(tx).toString()
                Claim_Amount = webSupply.utils.fromWei(Claim_Amount.toString())
                // console.log("claim_Able", Claim_Amount);
                setUserFunds_ClaimAble(Claim_Amount)

            } catch (error) {
                console.log(error);
            }
        }
        if (address) {
            let intveral = setInterval(() => {
                claim_Able()
            }, 5000);

            return clearInterval(intveral)

        }

    });

    useEffect(() => {
        // //document.querySelector('#root').classList.contains('light')
        // if (!darkMode)
        //     document.querySelector('#root').classList.add('light');//.classList.contains('light')
        // else{
        //     document.querySelector('#root').classList.remove('light');
        // }
        if (!darkMode) {
            document.querySelector('#root').classList.add('light');
            localStorage.setItem('mode', "light");
        }
        else {
            document.querySelector('#root').classList.remove('light');
            localStorage.setItem('mode', "dark");
        }
    }, [darkMode])

    const handleLightDarkMode = () => {

        setDarkMode(!darkMode);
    }

    window.addEventListener('storage', () => {
        if (localStorage.getItem("mode") === "light") {
            document.querySelector('#root').classList.add('light');
            localStorage.setItem('mode', "light");
            setDarkMode(false);
        }
        else if (localStorage.getItem("mode") === "dark") {
            document.querySelector('#root').classList.remove('light');
            localStorage.setItem('mode', "dark");
            setDarkMode(true);
        }
    })



    return (
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='navbar'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    <img className='img-fluid' src='/images/logo.svg' alt='MintSea' width='140' />
                </Link>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 flex-lg-row align-items-lg-center'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/' exact>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/explore'>
                                Explore
                            </NavLink>
                        </li>
                        {/* <li className='nav-item'>
                            <NavLink className='nav-link' to='/my-assets'>
                                My Assets
                            </NavLink>
                        </li> */}
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/authors'>
                                Authors
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='*'>
                                Blog
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/mint'>
                                Mint NFT
                            </NavLink>
                        </li>
                        <li className='nav-item' style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                            <i className="las la-moon me-2 text-primary pb-1"></i>
                            <div className="form-check form-switch">
                                <input className="form-check-input me-2" type="checkbox" checked={darkMode} onChange={handleLightDarkMode} style={{ backgroundColor: "#ccc", height: "1.5rem", width: "2.5rem" }} />
                                <label className="form-check-label pt-1" htmlFor="flexSwitchCheckDefault">Night</label>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/search'>
                                <i className='las la-search' style={{ marginTop: '0.125rem' }}></i>
                            </NavLink>
                        </li>

                        <li className='nav-item nav-item ms-lg-2'>

                            <ConnectButton chainStatus="icon" showBalance={{ smallScreen: false, largeScreen: true }} className='btn btn-gradient-primary btn-sm px-3 d-lg-flex align-items-center' />
                            {/* <ConnectWallet
                                theme={"light"}
                                modalTitle={"MintSea"}
                                className='btn btn-gradient-primary btn-sm px-3 d-lg-flex align-items-center large '
                            /> */}
                            {/* <a href='https://metamask.app.link/dapp/mintsea.netlify.app/' >

                                <button
                                    type='button'
                                    className='btn btn-gradient-primary btn-sm px-3 d-lg-flex align-items-center small'


                                >

                                    {!address ? <> <i className='las la-wallet me-2 mb-1'></i>
                                        Connect your wallet</> : `${address?.slice(0, 6)}...${address?.slice(-6)}`}

                                </button>
                            </a> */}
                        </li>

                        {address && (
                            <li className='nav-item dropdown'>
                                <NavLink
                                    className='nav-link dropdown-toggle d-flex align-items-center'
                                    id='accountDropdown'
                                    to='/'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    <div style={{ width: '35px', height: '35px' }}>
                                        {
                                            user_Profile?.image == "" ? <> <Jazzicon address={address} /></> : <><Avatar alt="" size="large" src={`${user_Profile?.image}`} /> </>
                                        }


                                    </div>
                                </NavLink>
                                <ul
                                    className='dropdown-menu dropdown-menu-dark dropdown-menu-end fade-down text-start'
                                    aria-labelledby='accountDropdown'
                                >
                                    <li>
                                        <a
                                            href={chainId == 97 ? `https://testnet.bscscan.com/address/${address}` : chainId == 11155111 ? `https://sepolia.etherscan.io/address/${address}` : `https://mumbai.polygonscan.com/address/${address}`}
                                            className='dropdown-item d-flex align-items-center'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <i className='las la-chart-bar me-2 text-primary'></i>
                                            Track transactions
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            to='/Favorite'
                                            className='dropdown-item d-flex align-items-center'
                                            rel='noopener noreferrer'
                                        >
                                            {/* <i className='las la-user-circle me-2 text-primary'></i> */}
                                            {/* <i class="fa-solid fa-heart me-2 text-primary"></i> */}
                                            <AiTwotoneHeart className=" me-2 fs-5 text-primary" />
                                            Favourites
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/User_Profile'
                                            className='dropdown-item d-flex align-items-center'
                                            rel='noopener noreferrer'
                                        >
                                            <i className='las la-user-circle me-2 text-primary'></i>
                                            User Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/User_Collection'
                                            className='dropdown-item d-flex align-items-center'
                                            rel='noopener noreferrer'
                                        >
                                            <MdOutlineCollections className=" me-2 fs-5 text-primary" />
                                            {/* <i className='las la-user-circle me-2 text-primary'></i> */}
                                            Collection
                                        </Link>
                                    </li>
                                    <li>
                                        <NavLink className='dropdown-item d-flex' to='/explore'>
                                            <i className='las la-wallet me-2 text-primary'></i>
                                            <div className='ms-0'>
                                                <p className='mb-0 lh-1'>Marketplace Balance</p>
                                                <p className='mb-0 text-primary'>
                                                    {userFunds_ClaimAble}  {chainId == 11155111 ? "ETH" : chainId == 97 ? "BNB" : "MATIC"}
                                                </p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    {/* <li onClick={() => disconnect()} >
                                        <NavLink className='dropdown-item d-flex' to='/' >
                                            <i className='las la-user-circle me-2 text-primary'></i>
                                            LogOut
                                        </NavLink>



                                    </li> */}
                                    {userFunds_ClaimAble > 0 && (
                                        <li className='p-2'>
                                            <button
                                                type='button'
                                                className='btn btn-gradient-primary w-100'
                                                onClick={claimFundsHandler}
                                            >
                                                Claim funds
                                            </button>
                                        </li>
                                    )}
                                    {fundsLoading && (
                                        <li>
                                            <span className='d-flex justify-content-center'>
                                                <div className='spinner-border' role='status'>
                                                    <span className='sr-only'></span>
                                                </div>
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )

                        }



                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
