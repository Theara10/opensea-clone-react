import React, { useState } from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotableDropCard from "../components/NotableDropCard";
import CollectionCard from "../components/CollectionCard";
import Carousel from "react-elastic-carousel";

import collections from "../data/collections.json";
import { breakpoints } from "@mui/system";

function Home() {
  const [items, setItems] = useState([
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="home">
      <section className="home-banner">
        <div className="home-banner-left">
          <h2>Discover, collect, and sell extraordinary NFTs</h2>
          <p>
            on the world's first & <br />
            largest NFT marketplace
          </p>
          <div className="home-banner-bottons">
            <button className="explore-button">Explore</button>
            <button className="create-button">Create</button>
          </div>
          <div className="home-banner-left-learnmore">
            <SlowMotionVideoIcon className="video-icon" />
            <p>Learn more about Opensea</p>
          </div>
        </div>
        <div className="home-banner-right">
          <div className="home-banner-right-card">
            <img
              src="https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200"
              height="400"
              width="100%"
              style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
            />
            <div className="home-banner-right-bottom">
              <img
                src="https://lh3.googleusercontent.com/sASTPVLSZm4udp-lrQOyJDRp3ut7xxsQbnafH0XPEtGtjupaL7TjJFl2dav5FLRbNdwpUWCrA31AO8OgUrAMWofB7iVHlMeWbHfm=s80"
                height="30"
                width="auto"
              />
              <div className="home-banner-right-bottom-profile">
                <p className="home-banner-profile-name">GMA_048_002</p>
                <p className="home-banner-profile-desc">Jesuperman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="notable-drop">
        <h3>Notable Drop</h3>
        <NotableDropCard />
      </section>

      <section className="collections">
        <h3>Top collection over the last 7 days</h3>
        <div className="collection-container">
          {collections.map((x) => (
            <CollectionCard
              title={x.title}
              img={x.img}
              eth={x.eth}
              rate={x.rate}
            />
          ))}
        </div>
        <button>Go to Rankings</button>
      </section>

      <section className="category">
        <h3>Top collection over the last 7 days</h3>
        <div className="categories">
          <Carousel breakPoints={breakPoints}>
            <div className="category-card"></div>
          </Carousel>
        </div>
      </section>

      <section className="nfts">
        <h3>Create and sell your NFTs</h3>
        <div className="nfts-bottoms">
          <div className="nfts-bottom">
            <AccountBalanceWalletIcon className="nfts-icon" fontSize="32" />
            <h4>Setup your wallet</h4>
            <p>
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>
          <div className="nfts-bottom">
            <AccountBalanceWalletIcon className="nfts-icon" fontSize="32" />
            <h4>Setup your wallet</h4>
            <p>
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>
          <div className="nfts-bottom">
            <AccountBalanceWalletIcon className="nfts-icon" fontSize="32" />
            <h4>Setup your wallet</h4>
            <p>
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>
          <div className="nfts-bottom">
            <AccountBalanceWalletIcon className="nfts-icon" fontSize="32" />
            <h4>Setup your wallet</h4>
            <p>
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              wallets we support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
