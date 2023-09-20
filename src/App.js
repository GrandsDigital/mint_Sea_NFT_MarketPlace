import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import web3 from './connection/web3';
import Web3Context from './store/web3-context';
import CollectionContext from './store/collection-context';
import MarketplaceContext from './store/marketplace-context';
import NFTCollection from './contracts/NFTCollection.json';
import NFTMarketplace from './contracts/NFTMarketplace.json';

// COMPONENTS
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import ScrollTopButton from './components/general/ScrollTopButton';
import NotFound from './components/general/NotFound';

// PAGES
import Home from './components/Home';
import Contact from './components/Contact';
import CreateItem from './components/CreateItem';
import Explore from './components/Explore';
import Authors from './components/Authors';
import MyAssets from './components/MyAssets';
import NoMetaMaskAlert from './components/general/NoMetaMaskAlert';
import NoContractAlert from './components/general/NoContractAlert';
import ScrollToTop from './components/general/ScrollToTop';

import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermOfService from './components/TermOfService';
import Docs from './components/Docs';
import Web3 from "web3";
import HowToCreateAnNFTOnMintSea from "./components/Docs/HowToCreateAnNFTOnMintSea";
import HowToListAnNFTForSaleUsingMintSea from "./components/Docs/HowToListAnNFTForSaleUsingMintSea";
import HowToBuyAnNFTOnMintSea from "./components/Docs/HowToBuyAnNFTOnMintSea";
import HowToClaimFundsOnMintSea from "./components/Docs/HowToClaimFundsOnMintSea";
import WhatIsAnNFT from "./components/Docs/WhatIsAnNFT";
import WhatIsWeb3 from "./components/Docs/WhatIsWeb3";
import WhatIsCryptocurrency from "./components/Docs/WhatIsCryptocurrency";
import WhatIsACryptoWallet from "./components/Docs/WhatIsACryptoWallet";
import WhatIsABlockchain from "./components/Docs/WhatIsABlockchain";
import WhatAreBlockchainGasFees from "./components/Docs/WhatAreBlockchainGasFees";

// Main Style
import './App.css';
import Search from './components/Search';
import ItemSingle from './components/ItemSingle';
import Category from './components/Category';
import { Web3ContextProvider } from './components/Components/web3Context';
import useWeb3 from './components/Components/useWeb3';
import toast, { Toaster } from 'react-hot-toast';
import User_Registration from './Auth/User_Registration';
import Edit_User_Profile from './Auth/Edit_User_Profile';
import { nftMarketContractAddress, nftMarketContractAddress_Abi } from './Utils/Contract';
import { useDispatch, useSelector } from 'react-redux';
import { LoadOffers, get_UserProfile } from './Redux/Load_offers';
import { API } from './API';
import { useAccount } from 'wagmi';
import { useAddress } from "@thirdweb-dev/react";
import axios from 'axios';
import Favorite from './components/Components/Favorite/Favorite';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bscTestnet, polygonMumbai, sepolia } from 'wagmi/chains';
import { InjectedConnector } from '@wagmi/core/connectors/injected'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { useChainId } from "wagmi";
import { useQuery } from 'react-query';
import { getLoarem } from './Redux/GetNFTs';
import { getTranding } from './Redux/tranding_NFTs';


function App() {
    const [noMetaMask, setNoMetaMask] = useState(false);
    const [noContract, setNoContract] = useState(false);
    const web3Ctx = useContext(Web3Context);
    const collectionCtx = useContext(CollectionContext);
    const marketplaceCtx = useContext(MarketplaceContext);
    const [networkType, setNetworkType] = useState(null);
    const [topSellers, setTopSellers] = useState([]);
    const { addToast } = useToasts();
    const { setFilter_ShowData, web3, walletAddress, setSpinner, setShowData, ShowData, Spinner } = useWeb3();
    let Category_All = useSelector((state) => state.Offers.Category)
    // const address = useAddress();
    const { address } = useAccount();
    const dispatch = useDispatch()
    const chainId = useChainId();




    // let formatedSellers = [];

    useEffect(() => {
        if (marketplaceCtx.sellers) {
            const sellersAddress = marketplaceCtx.sellers['0'];
            const sellersEth = marketplaceCtx.sellers['1'];

            let values = [];
            for (let i = 0; i < sellersAddress.length; i++) {
                values.push({
                    address: sellersAddress[i],
                    value: parseInt(sellersEth[i]),
                });
            }
            var calcTopSellers = [];
            values.forEach(function (item) {
                var existing = calcTopSellers.filter(function (v, i) {
                    return v.address === item.address;
                });
                if (existing.length) {
                    var existingIndex = calcTopSellers.indexOf(existing[0]);
                    calcTopSellers[existingIndex].value = calcTopSellers[existingIndex].value.concat(item.value);
                } else {
                    if (typeof item.value === 'number') item.value = [item.value];
                    calcTopSellers.push(item);
                }
            });

            setTopSellers(
                calcTopSellers.map((seller) => {
                    return { address: seller.address, value: seller.value.reduce((a, b) => a + b, 0) };
                })
            );
        }
    }, [marketplaceCtx.sellers]);

    useEffect(() => {
        // Check if the user has Metamask active
        // if (!web3) {
        //     setNoMetaMask(true);
        //     document.body.style.overflow = 'hidden';
        //     return;
        // }
        const getCahinId = async () => {


            if (walletAddress) {
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                    // await window.ethereum.enable();
                    await window.web3.eth.getChainId((err, netId) => {
                        console.log("netId", netId);
                        if (netId == 97 || netId == 11155111 || netId == 80001) {
                            setNoContract(false)
                        } else {
                            setNoContract(true)
                        }
                    }
                    )
                }
            }
        }

        getCahinId()

        const loadBlockchainData = async () => {
            try {

                if (walletAddress) {
                    let Offers_Array = []
                    let nftMarketContractOf = new web3.eth.Contract(
                        nftMarketContractAddress_Abi,
                        nftMarketContractAddress
                    );
                    let OfferCount = await nftMarketContractOf.methods.offerCount().call()
                    for (let i = 1; i <= OfferCount; i++) {
                        let Offer = await nftMarketContractOf.methods.offers(i).call()
                        Offers_Array = [...Offers_Array, Offer]

                    }
                    dispatch(LoadOffers(Offers_Array))
                }
            } catch (error) {
                console.log(error);
            }

        }
        loadBlockchainData()




        // Function to fetch all the blockchain data
        // const loadBlockchainData = async () => {
        //     // Request accounts acccess if needed
        //     try {
        //         await window.ethereum.request({ method: 'eth_requestAccounts' });
        //     } catch (error) {
        //         console.error(error);
        //     }

        //     // Load account
        //     const account = await web3.loadAccount(web3);
        //     console.log("account",account);

        //     // Load Network ID
        //     const networkId = await web3Ctx.loadNetworkId(web3);

        //     // Load Contracts
        //     const nftDeployedNetwork = NFTCollection.networks[networkId];
        //     const nftContract = collectionCtx.loadContract(web3, NFTCollection, nftDeployedNetwork);

        //     const mktDeployedNetwork = NFTMarketplace.networks[networkId];
        //     const mktContract = marketplaceCtx.loadContract(web3, NFTMarketplace, mktDeployedNetwork);

        //     if (nftContract) {
        //         // Load total Supply
        //         const totalSupply = await collectionCtx.loadTotalSupply(nftContract);

        //         // Load Collection
        //         collectionCtx.loadCollection(nftContract, totalSupply);

        //         // Event subscription
        //         nftContract.events
        //             .Transfer()
        //             .on('data', (event) => {
        //                 collectionCtx.updateCollection(nftContract, event.returnValues.tokenId, event.returnValues.to);
        //                 collectionCtx.setNftIsLoading(false);
        //             })
        //             .on('error', (error) => {
        //                 console.log(error);
        //             });
        //     } else {
        //         setNoContract(true);
        //     }

        //     if (mktContract) {
        //         // Load offer count
        //         const offerCount = await marketplaceCtx.loadOfferCount(mktContract);

        //         // Load offers
        //         marketplaceCtx.loadOffers(mktContract, offerCount);

        //         marketplaceCtx.loadSellers(mktContract);

        //         // Load User Funds
        //         account && marketplaceCtx.loadUserFunds(mktContract, account);

        //         // Event OfferFilled subscription
        //         mktContract.events
        //             .OfferFilled()
        //             .on('data', (event) => {
        //                 marketplaceCtx.updateOffer(event.returnValues.offerId);
        //                 collectionCtx.updateOwner(event.returnValues.id, event.returnValues.newOwner);
        //                 marketplaceCtx.setMktIsLoading(false);
        //             })
        //             .on('error', (error) => {
        //                 console.log(error);
        //             });

        //         // Event Offer subscription
        //         mktContract.events
        //             .Offer()
        //             .on('data', (event) => {
        //                 marketplaceCtx.addOffer(event.returnValues);
        //                 marketplaceCtx.setMktIsLoading(false);
        //             })
        //             .on('error', (error) => {
        //                 console.log(error);
        //             });

        //         // Event offerCancelled subscription
        //         mktContract.events
        //             .OfferCancelled()
        //             .on('data', (event) => {
        //                 marketplaceCtx.updateOffer(event.returnValues.offerId);
        //                 collectionCtx.updateOwner(event.returnValues.id, event.returnValues.owner);
        //                 marketplaceCtx.setMktIsLoading(false);
        //             })
        //             .on('error', (error) => {
        //                 console.log(error);
        //             });
        //     } else {
        //         setNoContract(true);
        //     }

        //     collectionCtx.setNftIsLoading(false);
        //     marketplaceCtx.setMktIsLoading(false);

        //     // Metamask Event Subscription - Account changed
        //     window.ethereum.on('accountsChanged', (accounts) => {
        //         web3Ctx.loadAccount(web3);
        //         accounts[0] && marketplaceCtx.loadUserFunds(mktContract, accounts[0]);
        //         addToast('Account Changed!', {
        //             appearance: 'success',
        //         });
        //     });

        //     // Metamask Event Subscription - Network changed
        //     window.ethereum.on('chainChanged', (chainId) => {
        //         window.location.reload();
        //     });

        //     await web3.eth.net
        //         .getNetworkType()
        //         .then((res) => setNetworkType(res))
        //         .catch((err) => console.log(err));
        // };

        // loadBlockchainData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [walletAddress]);

    useEffect(() => {
        const getAllNFts = async () => {
            try {
                setSpinner(true)
                let res = await axios.get(
                    `https://sanjhavehra.womenempowerment.online/sell_and_auction_history?category=All`
                );
                setShowData(res.data.data)
                setSpinner(false)

                // console.log("UU", res);

            } catch (error) {
                console.log(error);
                setSpinner(false)

            }
        }
        const fetchData = async () => {
            if (address) {
                let res = await axios.get(
                    `https://sanjhavehra.womenempowerment.online/get_user_profile?address=${address?.toUpperCase()}`
                );

                if (res?.data.success == false) {
                    // history("/Create_User_profile");
                } else {
                    // console.log("get_user_profile", res);
                    dispatch(get_UserProfile(res?.data?.data))
                }
            }
        };


        getAllNFts()
        fetchData()
        dispatch(getLoarem("All"))

    }, [address])

    useEffect(() => {
        const getAllNFts = async () => {
            try {
                setSpinner(true)
                let res = await axios.get(
                    `https://sanjhavehra.womenempowerment.online/sell_and_auction_history?category=${Category_All}`
                );
                setFilter_ShowData(res?.data?.data)
                setSpinner(false)

                // console.log("UU", res);

            } catch (error) {
                console.log(error);
                setSpinner(false)

            }
        }
        getAllNFts()
    }, [Category_All])
    // useEffect(() => {
    //     let intveral = setInterval(() => {
    //         dispatch(getLoarem("All"))
    //     }, 5000);
     
    //     return clearInterval(intveral)
    // })
    
    let intveral = setInterval(() => {
        // dispatch(getLoarem("All"))

    }, 5000);
    
    return (
        <div>
           
            <BrowserRouter>

                <Toaster />
                {noMetaMask && <NoMetaMaskAlert />}
                {!noContract && <Header />}
                {noContract ? <NoContractAlert network={networkType} /> : null}
                <ScrollToTop>
                    <Switch>
                        <Route path='/' exact>
                            <Home topSellers={topSellers} />
                            <ScrollTopButton />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/mint'>
                            <CreateItem />
                        </Route>
                        <Route path='/explore'>
                            <Explore />
                        </Route>
                        <Route path='/assets/:id/:chainid'>
                            <ItemSingle />
                        </Route>
                        <Route path='/categories/:category'>
                            <Category />
                        </Route>
                        <Route path='/my-assets'>
                            <MyAssets />
                        </Route>
                        <Route path='/search'>
                            <Search />
                        </Route>
                        <Route path='/authors'>
                            <Authors sellers={topSellers} />
                        </Route>
                        <Route path='/about-us'>
                            <About />
                        </Route>
                        <Route path='/privacy-policy'>
                            <PrivacyPolicy />
                        </Route>
                        <Route path='/terms-of-service'>
                            <TermOfService />
                        </Route>
                        <Route path='/docs/how_to_create_an_nft_on_mintsea'>
                            <HowToCreateAnNFTOnMintSea />
                        </Route>
                        <Route path='/docs/how_to_list_an_nft_for_sale_using_mintsea'>
                            <HowToListAnNFTForSaleUsingMintSea />
                        </Route>
                        <Route path='/docs/how_to_buy_an_nft_on_mintsea'>
                            <HowToBuyAnNFTOnMintSea />
                        </Route>
                        <Route path='/docs/how_to_claim_funds_on_mintsea'>
                            <HowToClaimFundsOnMintSea />
                        </Route>
                        <Route path='/docs/what_is_an_nft'>
                            <WhatIsAnNFT />
                        </Route>

                        <Route path='/docs/what_is_an_nft'>
                            <WhatIsAnNFT />
                        </Route>
                        <Route path='/docs/what_is_a_crypto_wallet'>
                            <WhatIsACryptoWallet />
                        </Route>
                        <Route path='/docs/what_is_cryptocurrency'>
                            <WhatIsCryptocurrency />
                        </Route>
                        <Route path='/docs/what_are_blockchain_gas_fees'>
                            <WhatAreBlockchainGasFees />
                        </Route>
                        <Route path='/docs/what_is_a_blockchain'>
                            <WhatIsABlockchain />
                        </Route>
                        <Route path='/Favorite'>
                            <Favorite />
                        </Route>
                        <Route path='/docs/what_is_web3'>
                            <WhatIsWeb3 />
                        </Route>
                        <Route path='/User_Collection'>
                            <User_Registration />
                        </Route>

                        <Route path='/User_Profile'>
                            <Edit_User_Profile />
                        </Route>

                        <Route path='/docs'>
                            <Docs />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </ScrollToTop>
                <Footer />

            </BrowserRouter>

            {/* </Web3ContextProvider> */}
        </div>
    );
}

export default App;
