import React from 'react'

function Home() {
    return (
        <div className="home">
            <section className="home-banner">
                <div className="home-banner-left">
                    <h2>Discover, collect, and sell extraordinary NFTs</h2>
                    <p>on the world's first & largest NFT marketplace</p>
                    <div>
                        <button>Explore</button>
                        <button>Create</button>
                    </div>
                </div>
                <div className="home-banner-right">
                    <div className="home-banner-right-card">
                        <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
                         height="" width="auto"
                        />
                        <div>
                            <img src="https://lh3.googleusercontent.com/sASTPVLSZm4udp-lrQOyJDRp3ut7xxsQbnafH0XPEtGtjupaL7TjJFl2dav5FLRbNdwpUWCrA31AO8OgUrAMWofB7iVHlMeWbHfm=s80" 
                                height="30" width="auto" />
                            <div>
                                <p>GMA_048_002</p>
                                <p>Jesuperman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
