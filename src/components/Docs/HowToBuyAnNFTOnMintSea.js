import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Link, NavLink } from 'react-router-dom';
import { particlesOptions } from '../../helpers/constants';

const HowToBuyAnNFTOnMintSea = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <>
      <section className='py-5 bg-dark position-relative'>
      <Particles  init={particlesInit}
            loaded={particlesLoaded} options={particlesOptions} style={{zIndex:"-1"}} />
        <div className="container py-5 mt-5 z-index-20">
          <div className="row">
            <div className="col-lg-6 text-center mx-auto">
              <h1>Docs</h1>
              {/* <p className="text-muted mb-0">Opening a New Realm in the Digital Economy</p> */}
            </div>
          </div>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb justify-content-center'>
              <li className='breadcrumb-item'>
                <Link className='text-decoration-none d-flex align-items-center' to='/'>
                  {' '}
                  <i className='las la-home la-sm me-1'></i>Home
                </Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Docs
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className='py-5'>
        <div className='container py-5'>
          <div className='row g-4'>

            <div className='col-lg-4'>
              <div className="card">
                <div className="card-body py-4 py-lg-5 px-2 px-lg-4">
                  <h5 className="mb-4">Docs:</h5>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        {/* <h6>Company Address</h6> */}
                        <NavLink className="text-md text-reset" to="/docs/how_to_create_an_nft_on_mintsea">How to create an NFT on MintSea?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/how_to_list_an_nft_for_sale_using_mintsea">How to list an NFT for sale using MintSea?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/how_to_buy_an_nft_on_mintsea">How to buy an NFT on MintSea?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/how_to_claim_funds_on_mintsea">How to claim funds on MintSea?</NavLink>
                      </div>
                    </li>
                  </ul>

                  <h5 className="mb-4">General Info:</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        {/* <h6>Company Address</h6> */}
                        <NavLink className="text-md text-reset" to="/docs/what_is_an_nft">What is an NFT?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/what_is_a_crypto_wallet">What is a crypto wallet?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/what_is_cryptocurrency">What is cryptocurrency?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/what_are_blockchain_gas_fees">What are blockchain gas fees?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/what_is_a_blockchain">What is a blockchain?</NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div className="contact-icon bd-3 border-primary text-primary flex-shrink-0" style={{ width: "1.5rem", height: "1.5rem" }}>
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink className="text-md text-reset" to="/docs/what_is_web3">What is web3?</NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-8'>
              <div class="card">
                <div class="card-body py-4 py-lg-5 px-2 px-lg-4">
                  <div class="d-flex align-items-center mb-4">
                    <div class="icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white">
                      <i class="las la-question"></i>
                    </div>
                    <h2 class="h5 mb-0">How to buy an NFT on MintSea?</h2>
                  </div>

                  <div className='mb-4'>
                    {/* <p class="text-md text-muted mb-3 fw-bold">2. Use of Your Data.</p> */}
                    <p class="text-md text-muted mb-3">In order to buy an NFT, you'll need a crypto wallet and cryptocurrency (or, in some cases, just a credit or debit card). Using MintSea, you can buy items listed for sale instantly, bid in auctions, or make offers on any NFTs.</p>

                    <p class="text-md text-muted mb-3 fw-bold">What do you need in order to buy an NFT?</p>
                    <p class="text-md text-muted mb-3">To purchase NFTs, you must first create a crypto wallet. A crypto wallet is a software application that holds your NFTs and cryptocurrency. Not all wallets support all blockchains or store NFTs, so check sure your wallet is suitable.</p>

                    <p class="text-md text-muted mb-3">Metamask (Ethereum, Polygon, and Binance)</p>
                    <p class="text-md text-muted mb-3">Coinbase (Ethereum, Polygon, and Binance) </p>
                    <p class="text-md text-muted mb-3">NFT purchases take place in Bitcoin, while many NFTs on MintSea can be purchased with a credit or debit card. There will be more on this later.</p>
                                        
                    <p class="text-md text-muted mb-3 fw-bold">Where to buy NFTs</p>
                    <p class="text-md text-muted mb-3">NFTs can be purchased in two ways: on separate project websites or on NFT marketplaces.</p>
                    <p class="text-md text-muted mb-3">Projects will occasionally create their own websites to sell their NFTs. This is often for a project's "mint" (the very first sale, when the NFT is written to the blockchain), while some projects, such as Coachella and Larva Labs, have their own autonomous marketplaces. When you purchase from a project website, you may usually resell your NFT on other NFT marketplaces.</p>
                    <p class="text-md text-muted mb-3">NFT markets will occasionally support primary sales or mints, although they are primarily responsible for secondary sales. Marketplaces differ in terms of the blockchains they support, their fee structure, the types of NFTs they specialize in, and other factors.</p>

                    <p class="text-md text-muted mb-3 fw-bold">How to find an NFT you like</p>
                    <p class="text-md text-muted mb-3">If you want to get into NFTs but don't know where to start, here are some decent places to look:</p>

                    <p class="text-md text-muted mb-3 fw-bold">Twitter</p>
                    <p class="text-md text-muted mb-3">Twitter is an excellent location to learn about new NFT projects because it hosts a lot of the debate about them. You can follow accounts, hashtags, and subjects that interest you. It's a terrific way to see not only what's now hot, but also what initiatives are coming up shortly.</p>

                    <p class="text-md text-muted mb-3 fw-bold">Marketplaces</p>
                    <p class="text-md text-muted mb-3">NFT marketplaces are yet another excellent source of NFTs. You can examine "Trending" charts, search by category, and more on MintSea. You can also sort and filter by criteria like pricing, making it easier to find the types of activities you need.</p>

                    <p class="text-md text-muted mb-3 fw-bold">How to buy an NFT</p>
                    <p class="text-md text-muted mb-3">How do you buy an NFT if you've found one you like? MintSea offers three major ways to purchase an NFT: buy now, auctions, and offers.</p>

                    <p class="text-md text-muted mb-3 fw-bold">Buy now</p>
                    <p class="text-md text-muted mb-3">NFTs listed for "buy now" have a fixed price. They can be purchased at any time during the sale period and without the seller's involvement. This is the most basic technique, and it is similar to purchasing on other e-commerce platforms.</p>

                    <p class="text-md text-muted mb-3 fw-bold">Auctions</p>
                    <p class="text-md text-muted mb-3">Potential buyers can bid on an NFT when it is up for auction. The NFT will be awarded to the highest bidder, or the seller may accept any offer made during the auction.</p>

                    <p class="text-md text-muted mb-3 fw-bold">Offers</p>
                    <p class="text-md text-muted mb-3">You can use MintSea to make an offer on any item, even if it isn't advertised for sale. If you want to offer less than the quoted price, you can make an offer on a listed item.</p>

                    <p class="text-md text-muted mb-3 fw-bold">The purchase process: A step-by-step guide</p>
                    <p class="text-md text-muted mb-3">Let's go over how to buy an NFT:</p>

                    <p class="text-md text-muted mb-3"><b>1.</b> As previously stated, there are several ways to purchase an NFT. In this example, we'll click the "Buy now" option to purchase an NFT that has been posted for sale.</p>
                    <p class="text-md text-muted mb-2"><b>2.</b> Link your cryptocurrency wallet</p>
                    <p class="text-md text-muted mb-3 ms-4">If you haven't already connected and configured your cryptocurrency wallet, you will be requested to do so during this stage.</p>
                    <p class="text-md text-muted mb-2"><b>3.</b> Select a payment method</p>
                    <p class="text-md text-muted mb-3 ms-4">Following that, you'll be asked whether you want to pay with cryptocurrency or a credit card. We'll use a card in this example. If you wish to buy with cryptocurrency, you must first load your wallet with cryptocurrency.</p>
                    <p class="text-md text-muted mb-2"><b>4.</b> Review fees </p>
                    <p class="text-md text-muted mb-3 ms-4">You may see that your total exceeds the advertised price for that NFT. This is due to network ("gas") expenses and, if you pay with a credit card, processing fees. The petrol cost is applied to all blockchain transactions, and the amount varies depending on a number of criteria, including how many users are currently using the network. These fees are not received by MintSea.</p>

                    <p class="text-md text-muted mb-2"><b>5.</b> Enter your payment information</p>
                    <p class="text-md text-muted mb-3 ms-4">To finish your transaction, follow the steps and enter your information. If this is your first time using a card (through MoonPay), you may be prompted to verify your identification.</p>

                    <p class="text-md text-muted mb-2"><b>6.</b> Your purchase is now complete!</p>
                    <p class="text-md text-muted mb-3 ms-4">Your NFT purchase is completely complete and has been written to the blockchain once you've completed all of the required information and selected "Pay." Congratulations on your purchase of an NFT!</p>

                    <p class="text-md text-muted mb-2"><b>7.</b> Examine your most recent NFT</p>
                    <p class="text-md text-muted mb-3 ms-4">Your brand-new NFT should be visible in your collection after a few seconds. Your new NFT will be visible in your MintSea profile!</p>

                    <h3 class="h5 my-4">FAQs</h3>

                    <p class="text-md text-muted mb-3 fw-bold">Can I resell an NFT?</p>
                    <p class="text-md text-muted mb-3">Yes! You can list an NFT you own for sale, put it up for auction, or wait until you get an offer on it. </p>

                    <p class="text-md text-muted mb-3 fw-bold">Why should I buy NFTs?</p>
                    <p class="text-md text-muted mb-3">There are many reasons to buy an NFT that all depend on what the NFT is. You may like the art, want to support the creator, gain access to exclusive content or events, or find a community you identify with. </p>

                    <p class="text-md text-muted mb-3 fw-bold">How can I know if an NFT is authentic?</p>
                    <p class="text-md text-muted mb-3">Like any purchase, you want to make sure what you’re buying is authentic. Blue check marks mean a creator is verified by MintSea or a verified user created the project. You can also check if the collection is linked to an official Twitter account. Keep the golden rule in mind: if it seems too good to be true, it probably is!</p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HowToBuyAnNFTOnMintSea