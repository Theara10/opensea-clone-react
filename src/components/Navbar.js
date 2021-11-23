import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function Navbar(){
    return(
        <div className="nav">
            
            <div className="nav-left">
                <img/>
                <h3>OpenSea</h3>
            </div>
            <div className="nav-right">
                <input placeholder="Search" />
                <div className="nav-menu">
                    <p>Explore</p>
                    <p>Stats</p>
                    <p>Resources</p>
                    <p>Create</p>
                    <AccountCircleIcon className="nav-menu-icon"/>
                    <AccountBalanceWalletIcon className="nav-menu-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;