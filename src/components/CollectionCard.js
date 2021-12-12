import React from "react";

function CollectionCard({img, title, eth, rate}) {
  return (
    <div className="collection">
      <p>1</p>
      <div className="collection-middle">
        <img src={img} />
        <div className="collection-middle-text">
          <p>{title}</p>
          <div className="collection-middle-balance">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png" />
            <p>{eth}</p>
          </div>
        </div>
      </div>
      <p className="collection-right">{rate}</p>
    </div>
  );
}

export default CollectionCard;
