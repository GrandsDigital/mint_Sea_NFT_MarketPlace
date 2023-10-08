
import React from "react";
import { useForm } from "@formspree/react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Load_offers";

function Footer() {
  const [state, handleSubmit] = useForm("xlezgplp");
  let dispatch = useDispatch();

  return (
    <>
      <div className="container px-0">
        <div className="pt-1 section-seprator"></div>
      </div>

      <footer className="footer">
        {/** style={{background: 'url(img/world-map.png) no-repeat', backgroundSize: 'contain'}} */}
        <div className="container pt-5 z-index-20 px-5">
          <div className="row pt-5" style={{ display: "none" }}>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6>Marketplace</h6>
              <ul className="list-unstyled text-white mb-0">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/explore">
                    All NFTs
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/art"
                    onClick={() => dispatch(setCategory("art"))}
                  >
                    Art
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/music"
                    onClick={() => dispatch(setCategory("music"))}
                  >
                    Music
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/domainNames"
                    onClick={() => dispatch(setCategory("domainNames"))}
                  >
                    Domain Names
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    className="text-sm text-reset"
                    to="/categories/virtualWorlds"
                    onClick={() => dispatch(setCategory("virtualWorlds"))}
                  >
                    Virtual World
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6>Account</h6>
              <ul className="list-unstyled text-white mb-0">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/User_Profile">
                    Profile
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/Favorite">
                    Favourites
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/User_Collection">
                    Collection
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h6>About Us</h6>
              <ul className="list-unstyled text-white mb-4">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/about-us">
                    About us
                  </NavLink>
                </li>
              </ul>

              <h6>Support</h6>
              <ul className="list-unstyled text-white mb-0">
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/docs">
                    Docs
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/privacy-policy">
                    Privacy & Policy
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink className="text-sm text-reset" to="/terms-of-service">
                    Terms of Service
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h6>Newsletter</h6>
              <p className="text-sm text-white">
                Subscribe to our newsletter to get updates regarding all NFTs and
                the marketplace.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-group shadow-sm bg-body rounded-sm">
                  <input
                    className="form-control border-0 bg-none shadow-0"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Enter your email address..."
                  />
                  <button className="btn btn-primary btn-sm" type="submit">
                    <i className="las la-paper-plane"></i>
                  </button>
                </div>
              </form>
              {state.succeeded ? (
                <p className="bg-primary text-white mt-1 px-3 py-1  rounded-sm">
                  Thanks!
                </p>
              ) : null}
            </div>
          </div>

          <div className="row pt-5 pb-2">
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-6 col-sm-3 ">
                  <h6>Marketplace</h6>
                  <ul className="list-unstyled text-white mb-0">
                    <li className="mb-1">
                      <NavLink className="text-sm text-reset" to="/explore">
                        All NFTs
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/art"
                        onClick={() => dispatch(setCategory("art"))}
                      >
                        Art
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/music"
                        onClick={() => dispatch(setCategory("music"))}
                      >
                        Music
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/domainNames"
                        onClick={() => dispatch(setCategory("domainNames"))}
                      >
                        Domain Names
                      </NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink
                        className="text-sm text-reset"
                        to="/categories/virtualWorlds"
                        onClick={() => dispatch(setCategory("virtualWorlds"))}
                      >
                        Virtual World
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3 ">
                  <div className="row">
                    <div className="d-none d-md-block col-md-1 px-0">
                      <img className="mt-1 mx-auto" src="/images/side_icon.png" alt="side icon" style={{ height: "4.3rem" }} />
                    </div>

                    <div className="col-12 col-md-11">
                      <h6>Account</h6>
                      <ul className="list-unstyled text-white mb-0">
                        <li className="mb-1">
                          <NavLink className="text-sm text-reset" to="/User_Profile">
                            Profile
                          </NavLink>
                        </li>
                        <li className="mb-1">
                          <NavLink className="text-sm text-reset" to="/Favorite">
                            Favourites
                          </NavLink>
                        </li>
                        <li className="mb-1">
                          <NavLink
                            className="text-sm text-reset"
                            to="/User_Collection"
                          >
                            Collection
                          </NavLink>
                        </li>
                      </ul>



                      <div className="footer-mask">
                        <div className="row py-4">
                          <div className="col-12 d-flex align-items-center justify-content-center">
                            <p className="text-white text-xs mb-0">
                              © 2023 All rights reserved. Designed with
                              <i className="las la-xs la-heart mx-1" style={{ color: "#1ADFBB" }}></i> by
                              <span className="ms-1" style={{ color: "#1ADFBB" }}>Grands Digital</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
