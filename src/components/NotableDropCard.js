import React from "react";

const data = [
  {
    title: "noobmaster69",
    sub: "The greatest gamer of all time",
    image:
      "https://depor.com/resizer/9DEol52ZAZYAr3CdiAsroZazsVQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/P5EL4QKJZNC4JHUSGT4542ZFMM.jpg",
  },
  {
    title: "noobmaster69",
    sub: "The greatest gamer of all time",
    image:
      "https://lh3.googleusercontent.com/xMQWIv4dfaDNdTSWoUlshqAD6iAQXCikeCqwQxz9sGvhys-EfaSveiHKiaLVPOYiXuDjfaTvH9nwJiPOtjRGfEo",
  },
  {
    title: "The Dark Knight",
    sub: "The greatest gamer of all time",
    image:
      "https://media.comicbook.com/2021/03/batman-black-and-white-nft-darwyn-cooke-1260348.jpeg?auto=webp&width=700&height=700&crop=700:700,smart",
  },
];

function NotableDropCard() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
  return (
    <div className="notable-drop-cards">
      {data.map((x) => (
        <div className="notable-drop-card" style={{backgroundColor: `#${randomColor}`}}>
          <img src={x.image} />
          <div className="notable-drop-card-bottom">
            <h3>{x.title}</h3>
            <p>{x.sub}</p>
            <button>Live</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotableDropCard;
