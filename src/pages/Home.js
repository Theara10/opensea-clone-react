import React from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import NotableDropCard from "../components/NotableDropCard";
import CollectionCard from "../components/CollectionCard";

import collections from "../data/collections.json";

function Home() {
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

      <section>
        
      </section>
    </div>
  );
}

export default Home;
