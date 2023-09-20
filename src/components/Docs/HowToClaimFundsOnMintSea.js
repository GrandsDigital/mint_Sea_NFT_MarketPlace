import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link, NavLink } from "react-router-dom";
import { particlesOptions } from "../../helpers/constants";

const HowToClaimFundsOnMintSea = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <section className="py-5 bg-dark position-relative">
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
          style={{ zIndex: "-1" }}
        />
        <div className="container py-5 mt-5 z-index-20">
          <div className="row">
            <div className="col-lg-6 text-center mx-auto">
              <h1>Docs</h1>
              {/* <p className="text-muted mb-0">Opening a New Realm in the Digital Economy</p> */}
            </div>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link
                  className="text-decoration-none d-flex align-items-center"
                  to="/"
                >
                  {" "}
                  <i className="las la-home la-sm me-1"></i>Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Docs
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body py-4 py-lg-5 px-2 px-lg-4">
                  <h5 className="mb-4">Docs:</h5>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        {/* <h6>Company Address</h6> */}
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/how_to_create_an_nft_on_mintsea"
                        >
                          How to create an NFT on MintSea?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/how_to_list_an_nft_for_sale_using_mintsea"
                        >
                          How to list an NFT for sale using MintSea?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/how_to_buy_an_nft_on_mintsea"
                        >
                          How to buy an NFT on MintSea?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/how_to_claim_funds_on_mintsea"
                        >
                          How to claim funds on MintSea?
                        </NavLink>
                      </div>
                    </li>
                  </ul>

                  <h5 className="mb-4">General Info:</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        {/* <h6>Company Address</h6> */}
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/what_is_an_nft"
                        >
                          What is an NFT?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/what_is_a_crypto_wallet"
                        >
                          What is a crypto wallet?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/what_is_cryptocurrency"
                        >
                          What is cryptocurrency?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/what_are_blockchain_gas_fees"
                        >
                          What are blockchain gas fees?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/what_is_a_blockchain"
                        >
                          What is a blockchain?
                        </NavLink>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <div
                        className="contact-icon bd-3 border-primary text-primary flex-shrink-0"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      >
                        <i className="las la-question"></i>
                      </div>
                      <div className="ms-2">
                        <NavLink
                          className="text-md text-reset"
                          to="/docs/what_is_web3"
                        >
                          What is web3?
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div class="card">
                <div class="card-body py-4 py-lg-5 px-2 px-lg-4">
                  <div class="d-flex align-items-center mb-4">
                    <div class="icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white">
                      <i class="las la-question"></i>
                    </div>
                    <h2 class="h5 mb-0">How to claim funds on MintSea?</h2>
                  </div>

                  <div className="mb-4">
                    {/* <p class="text-md text-muted mb-3 fw-bold">2. Use of Your Data.</p> */}
                    <p class="text-md text-muted mb-3">
                      Claiming funds on MintSea is easy if you follow the
                      process correctly. It is a simple process with a few steps
                      that lead to a good start. In this article, we will
                      discuss how to claim funds on MintSea authentically. Let’s
                      begin
                    </p>

                    <h5 class="text-md text-muted mb-3 fw-bold">
                      How to begin with NFT selling?
                    </h5>
                    <p class="text-md text-muted mb-3 fw-bold">
                      Step 1: Begin with Connecting with your Crypto Wallet{" "}
                    </p>
                    <p class="text-md text-muted mb-3 ">
                      When any user comes into our Mintsea platform, he first
                      connects his crypto wallet, then connects our three
                      supported blockchain networks, which are supported by our
                      Mintsea platform:
                    </p>
                    <ol class="text-md text-muted mb-3 ">
                      <li>Ethereum Chain</li>
                      <li>Binance Chain</li>
                      <li>Polygon Chain</li>
                    </ol>
                    <p class="text-md text-muted mb-3 fw-bold">
                      Step 2: Minting NFT
                    </p>
                    <p class="text-md text-muted mb-3">
                      Once the user connects with a crypto wallet, he can mint
                      NFT using our three different chains. Here’s how you can
                      do this:
                    </p>
                    <ul
                      class="text-md text-muted mb-3"
                      style={{ listStyle: "none" }}
                    >
                      <li>
                        → Select your asset from your system and upload it on
                        our Mintsea platform.
                      </li>
                      <li>→ Give a title to your asset</li>
                      <li>→ Give a description of your asset</li>
                      <li>→ Select the category for your asset</li>
                      <li>→ Select the desired blockchain</li>
                    </ul>
                    <p class="text-md text-muted mb-3">
                      Once the blockchain is selected and the NFT is minted
                      (through the MINT NFT button), your uploaded NFT will show
                      on the Home Page.
                    </p>

                    <p class="text-md text-muted mb-3 fw-bold">
                      Step 3: Offering fee for your NFT
                    </p>
                    <p class="text-md text-muted mb-3">
                      After minting it using one of our three chains, the user
                      can offer any fee for his NFT, such as 0.1 ETH, 0.1 BNB,
                      or 0.1 MATIC.
                    </p>
                    <p class="text-md text-muted mb-3">
                      Once you offer the fee, three possible conditions may
                      arise for the user:
                    </p>
                    <ol class="text-md text-muted mb-3">
                      <li>
                        If the user just minted the NFT but has not placed any
                        offer, then on the Main Page their NFT card will show
                        the caption{" "}
                        <strong>“The owner didn’t put any offer”</strong> .
                      </li>
                      <li>
                        If the owner wants to fill the offer such as 0.1 BNB,
                        0.1 ETH, or 0.1 MATIC, then their NFT card will be shown
                        on the Marketplace for sale (the{" "}
                        <strong>“Buy NFT”</strong> button will be shown to the
                        buyer only).
                      </li>
                      <li>
                        If the owner has placed the offer, a{" "}
                        <strong>“Cancel” </strong>button will be shown on their
                        NFT card.
                      </li>
                    </ol>

                    <p class="text-md text-muted mb-3 fw-bold">
                      Step 4: Purchasing NFT (on the buyer’s end)
                    </p>
                    <p class="text-md text-muted mb-3">
                      After a while, another user decides they want to purchase
                      this NFT. They click the NFT card, fill out the offer
                      form, and make the purchase successfully.
                    </p>
                    <p class="text-md text-muted mb-3">
                      Here’s how you can do this:
                    </p>
                    <ul
                      class="text-md text-muted mb-3"
                      style={{ listStyle: "none" }}
                    >
                      <li>→ First, the buyer lands on our MintSea platform</li>
                      <li>→ Connects to a crypto wallet</li>
                      <li>→ Searches the NFT category which he wants to buy</li>
                      <li>
                        → Once the desired NFT is selected, then he makes the
                        offer, selects the desired blockchain of the selected
                        NFT card, and performs the transaction through any of
                        our four given crypto wallets
                      </li>
                      <li>
                        → As a result, the funds will be transferred to the
                        Marketplace Balance which will show the balance to the
                        original user who has put in the NFT, and he can claim
                        the fund
                      </li>
                    </ul>

                    <p class="text-md text-muted mb-3 fw-bold">
                      Step 5: Claiming the funds
                    </p>
                    <p class="text-md text-muted mb-3">
                      The original user of this NFT can see the claim fund
                      option in the drop-down menu, which will allow him to view
                      the Marketplace Balance before claiming his fund.
                    </p>
                    <p class="text-md text-muted mb-3">
                      Unless the NFT is not bought by any buyer, the Claim Fund
                      option in the drop-down menu will not be shown to the NFT
                      owner.
                    </p>
                    <p class="text-md text-muted mb-3">
                      If the NFT is bought by any buyer, the drop-down menu of
                      the owner will show:
                    </p>
                    <ol class="text-md text-muted mb-3">
                      <li> Marketplace Balance amount</li>
                      <li>“Claim Fund” button</li>
                    </ol>
                    <p class="text-md text-muted mb-3">
                      Once these are visible, the owner of the NFT can claim the
                      funds.{" "}
                    </p>

                    <h5 class="text-md text-muted mb-3 fw-bold">FAQs</h5>

                    <p class="text-md text-muted mb-3 fw-bold">
                      What do you mean by claiming funds?
                    </p>
                    <p class="text-md text-muted mb-3">
                      When a particular NFT is bought by the user, the actual
                      price of that NFT will be transferred to the original
                      creator of this NFT. Now, through the funds claiming
                      process, the original creator of the NFT can claim
                      ownership of these funds in their wallet, which can be
                      transferred to their crypto wallet, and then they can be
                      withdrawn in USD through the blockchain exchange.
                    </p>

                    <p class="text-md text-muted mb-3 fw-bold">
                      Can I claim funds sold on different blockchains?
                    </p>
                    <p class="text-md text-muted mb-3">
                      Yes, you can claim your funds sold on different chains,
                      i.e., Ethereum, Binance, and Polygon.
                    </p>
                    <p class="text-md text-muted mb-3">
                      How will I be able to see the Claim Fund option on the
                      MintSea platform?
                    </p>
                    <p class="text-md text-muted mb-3">
                      You can see the Claim Fund option in the drop-down menu
                      once your particular NFT is sold or bought by any buyer.
                    </p>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToClaimFundsOnMintSea;
