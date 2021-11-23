import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img
          src="https://opensea.io/static/images/logos/opensea.svg"
          height="40"
          width="auto"
        />
        <h3>OpenSea</h3>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <SearchIcon />
          <input placeholder="Search items, collections and accounts" />
        </div>

        <div className="nav-menu">
          <p>Explore</p>
          <p>Stats</p>
          <p>Resources</p>
          <p>Create</p>
          <AccountCircleIcon className="nav-menu-icon" />
          <AccountBalanceWalletIcon className="nav-menu-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
