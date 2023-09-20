import React, { useEffect, useState } from "react";
import useWeb3 from "../components/Components/useWeb3";
import axios from "axios";
import { toast } from "react-hot-toast";
import FullScreenLoader from "../components/general/FullScreenLoader";
import { useHistory } from "react-router-dom";
import { API } from "../API";
import { useAccount } from "wagmi";
import { useAddress } from "@thirdweb-dev/react";
import { API_URL } from "../config";
import { useSelector } from "react-redux";

const ipfsClient = require("ipfs-http-client");
//const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const auth =
  "Basic " +
  Buffer.from(
    `${process.env.REACT_APP_INFURA_PROJECTID}:${process.env.REACT_APP_INFURA_APIKEY}`
  ).toString("base64");
const ipfs = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  apiPath: "/api/v0",
  headers: { authorization: auth },
});

export default function Edit_User_Profile() {
  const history = useHistory();
  const [getUserData, setgetUserData] = useState({
    username: null,
    bio: null,
    email: null,
  });
  const [IsSpinner, setIsSpinner] = useState(false);
  const user_Profile = useSelector((state) => state.Offers.user_Profile);

  const { address } = useAccount();

  // const history=useNavigate()
  const [UserData, setUserData] = useState(null);
  const [getUserFile, setgetUserFile] = useState({
    profile: null,
    Cover_Image: null,
  });

  const handleChange = (e) => {
    setgetUserData({ ...getUserData, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    setgetUserFile({ ...getUserFile, [e.target.name]: e.target.files[0] });
  };

  // console.log("getUserData", Object.keys(user_Profile).length );

  const PostData = async () => {
    try {
      if (Object.keys(user_Profile).length != 0) {
        await Update_Profile();
      } else {
        if (
          getUserData.username == null ||
          getUserData.email == null ||
          getUserData.bio == null
        ) {
          // toast.error("Please Select Profile Picture First")
          toast.error("Please Fill All fields");
        } else {
          // if (getUserFile.profile == null) {
          //   toast.error("Please Select Profile Picture First");
          // } else {
          setIsSpinner(true);
          let fileAdded = null;
          let fileCover = null;
          if (getUserFile?.profile != null) {
            fileAdded = await ipfs.add(getUserFile?.profile);
            if (!fileAdded) {
              console.error("Something went wrong when updloading the file");
            }
          }

          if (getUserFile?.bg_Image != null) {
            fileCover = await ipfs.add(getUserFile?.bg_Image);
            if (!fileCover) {
              console.error("Something went wrong when updloading the file");
              return;
            }
          }

          let formData = new FormData();
          formData.append(
            "image",
            getUserFile?.profile != null
              ? `https://skywalker.infura-ipfs.io/ipfs/${fileAdded.path}`
              : ""
          );
          formData.append(
            "Cover_image",
            getUserFile?.bg_Image != null
              ? `https://skywalker.infura-ipfs.io/ipfs/${fileCover.path}`
              : ""
          );
          formData.append("address", address?.toUpperCase());
          formData.append("username", getUserData.username);
          formData.append("email", getUserData.email);
          formData.append("bio", getUserData.bio);

          let res = await axios.post(
            "https://sanjhavehra.womenempowerment.online/create_user_profile",
            formData
          );
          console.log("Res", res);
          toast.success("Your Profile is Updated");
          history.push("/");
          setIsSpinner(false);
          // }
        }
      }
    } catch (e) {
      console.log("Error while fatech api", e);
      setIsSpinner(false);
    }
  };

  const Update_Profile = async () => {
    // setImageAsFile(Image)

    try {
      setIsSpinner(true);

      let fileAdded = null;
      let fileCover = null;
      if (getUserFile?.profile != null) {
        fileAdded = await ipfs.add(getUserFile?.profile);
        if (!fileAdded) {
          console.error("Something went wrong when updloading the file");
        }
      }

      if (getUserFile?.bg_Image != null) {
        fileCover = await ipfs.add(getUserFile?.bg_Image);
        if (!fileCover) {
          console.error("Something went wrong when updloading the file");
          return;
        }
      }

     

      let res = await axios.post(
        `https://sanjhavehra.womenempowerment.online/update_user_profile?address=${address.toUpperCase()}`,
        {
          address:
            getUserData.address == null
              ? user_Profile.address
              : address?.toUpperCase(),
          image:
            getUserFile.profile == null
              ? user_Profile.profile
              : `https://skywalker.infura-ipfs.io/ipfs/${fileAdded.path}`,

          Cover_image:
            getUserFile?.bg_Image != null
              ? `https://skywalker.infura-ipfs.io/ipfs/${fileCover.path}`
              : user_Profile.profile,
          username:
            getUserData.username == null
              ? user_Profile.username
              : getUserData.username,
          email:
            getUserData.email == null ? user_Profile.email : getUserData.email,
          bio: getUserData.bio == null ? user_Profile.bio : getUserData.bio,
        }
      );
      console.log("Update_Profile", res);

      toast.success("Your Profile is Updated");
      setIsSpinner(false);
      // history('/User_Profile')
    } catch (e) {
      console.log("Error while fatech api", e);
      setIsSpinner(false);
    }
  };
  // console.log("getUserFile.bg_Image", user_Profile.Cover_image);

  return (
    <div>
      {IsSpinner ? <FullScreenLoader heading="loading" /> : null}
      <main className="pt-[5.5rem] lg:pt-18">
        {/* Banner */}
        <div className="relative">
          <img
            src={
              getUserFile.bg_Image == null && getUserFile.bg_Image == undefined
                ? Object.keys(user_Profile).length != 0
                  ? user_Profile.Cover_image == ""
                    ? "images/items/coverBG.jpeg"
                    : `${user_Profile?.Cover_image}` ||
                      "images/items/coverBG.jpeg"
                  : "images/items/coverBG.jpeg"
                : URL.createObjectURL(getUserFile.bg_Image) ||
                  "images/items/coverBG.jpeg"
            }
            alt="banner"
            className="h-[18.75rem] object-cover"
            width="100%"
          />
          <div className="container relative -translate-y-4">
            <div className="group absolute right-0 bottom-4 flex items-center rounded-lg bg-white py-2 px-4 font-display text-sm hover:bg-accent">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 cursor-pointer opacity-0"
                name="bg_Image"
                onChange={handleChangeFile}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="mr-1 h-4 w-4 fill-jacarta-400 group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
              </svg>
              <span className="mt-0.5 block text-muted text-sm ">
                Edit cover photo
              </span>
            </div>
          </div>
        </div>
        {/* end banner */}
        {/* Edit Profile */}
        <section className="relative py-16 dark:bg-jacarta-800">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="img/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <div className="mx-auto max-w-[48.125rem] md:flex">
              {/* Form */}
              <div className="mb-12 md:w-1/2 md:pr-8">
                <div className="mb-6">
                  <label
                    htmlFor="profile-username"
                    className="mb-1 block font-display text-sm text-jacarta-700 text-muted"
                  >
                    Username<span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="profile-username"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 text-muted dark:placeholder:text-jacarta-300"
                    placeholder="Enter username"
                    required=""
                    name="username"
                    defaultValue={
                      Object.keys(user_Profile).length != 0
                        ? user_Profile?.username
                        : ""
                    }
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="profile-bio"
                    className="mb-1 block font-display text-sm text-jacarta-700 text-muted"
                  >
                    Bio<span className="text-red">*</span>
                  </label>
                  <textarea
                    id="profile-bio"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 text-muted dark:placeholder:text-jacarta-300"
                    required=""
                    placeholder="Tell the world your story!"
                    name="bio"
                    defaultValue={
                      Object.keys(user_Profile).length != 0
                        ? user_Profile?.bio
                        : ""
                    }
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="profile-email"
                    className="mb-1 block font-display text-sm text-jacarta-700 text-muted"
                  >
                    Email address<span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="profile-email"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 text-muted dark:placeholder:text-jacarta-300"
                    placeholder="Enter email"
                    defaultValue={
                      Object.keys(user_Profile).length != 0
                        ? user_Profile?.email
                        : ""
                    }
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="profile-email"
                    className="mb-1 block font-display text-sm text-jacarta-700 text-muted"
                  >
                    Wallet Address<span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="profile-email"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 text-muted dark:placeholder:text-jacarta-300"
                    value={address}
                  />
                </div>

                <button
                  className="btn btn-gradient-primary"
                  onClick={() => PostData()}
                >
                  Update Profile
                </button>
              </div>
              {/* Avatar */}
              <div className=" lg:flex  space-x-5 md:w-1/2 md:pl-8">
                <form className="shrink-0">
                  <figure className="relative inline-block">
                    <img
                      src={
                        getUserFile.profile == null
                          ? Object.keys(user_Profile).length != 0
                            ? user_Profile.image == ""
                              ? "images/items/item-5.jpg"
                              : `${user_Profile?.image}`
                            : "images/items/item-5.jpg"
                          : URL.createObjectURL(getUserFile.profile)
                      }
                      // src="img/user/user_avatar.gif"
                      alt="collection avatar"
                      // width={getUserFile.profile == null ? "" : "5%"}
                      style={{ width: "175px", height: "150px" }}
                      className=" rounded-xl border-[5px] border-white dark:border-jacarta-600"
                    />
                    <div className="group absolute -right-3 -bottom-2 h-8 w-8 overflow-hidden rounded-full border border-jacarta-100 bg-white text-center hover:border-transparent hover:bg-accent">
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute top-0 left-0 w-full cursor-pointer opacity-0"
                        name="profile"
                        onChange={handleChangeFile}
                      />
                      <div className="flex h-full items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="h-4 w-4 fill-jacarta-400 group-hover:fill-white"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
                        </svg>
                      </div>
                    </div>
                  </figure>
                </form>
                <div className="mt-4">
                  <span className="mb-3 block font-display text-sm text-jacarta-700 text-muted">
                    Profile Image
                  </span>
                  <p className="text-sm leading-normal text-muted text-sm ">
                    We recommend an image of at least 300x300. Gifs work too.
                    Max 5mb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end edit profile */}
      </main>
    </div>
  );
}
