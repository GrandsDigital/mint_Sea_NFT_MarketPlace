import React, { useEffect, useState } from "react";
import PageBanner from "../../general/PageBanner";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";
import { useAccount, useChainId } from "wagmi";
import NftItem from "../../general/NftItem";
import Loader from "../../general/Loader";
import io from "socket.io-client";

const socket = io("https://sanjhavehra.womenempowerment.online/");

export default function Favorite() {
  const [show_Favorite, setshow_Favorite] = useState([]);
  const [Spinner, setSpinner] = useState(false);
  const { address } = useAccount();

  const Get_Favorite = async () => {
    let new_Array = [];
    try {
      setSpinner(true);
      let res = await axios.get(
        `https://sanjhavehra.womenempowerment.online/get_Favorite?useraddress=${address}`
      );
      console.log("Get_Favorite", res.data.data);
      setshow_Favorite(res.data.data);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);

      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("FavoriteListiner", (uNFT) => {
      Get_Favorite();
    });
    Get_Favorite();
  }, []);

  return (
    <div>
      <PageBanner heading={"Favorite NFTs"} />
      <section className="py-5">
        {/* FILTER CONTROLS */}
        <div className="container pt-5">
          {!Spinner ? (
            <div className="row mixitUpContainer gy-4 mb-5 align-items-stretch">
              {show_Favorite?.map((NFT, key, index) => {
                // console.log("NFT", NFT);

                return (
                  <div
                    className={`col-xl-3 col-lg-4 col-md-6 mix ${NFT.category}`}
                    key={key}
                  >
                    <NftItem
                      {...NFT}
                      NFT={NFT}
                      index={index}
                      price={NFT.price}
                      nftKey={key}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <h6 className="fw-normal text-muted text-center mb-0">
                Fetching data from the blockchain please wait...
              </h6>
              <Loader />
            </>
          )}

          {/* <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={collectionCtx.collection.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    /> */}
        </div>
      </section>
    </div>
  );
}
