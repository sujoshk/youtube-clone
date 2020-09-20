import React, {useState}from 'react';
import {Link} from 'react-router-dom'
import '../components/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {



    // Hooks concept. Need to import useState from React for this. NEED TO READ MORE ABOUT THIS
    const [inputSearch, setInputSearch] = useState('');


    return (
        <div className="header">
            
            <div className="header__left">
                <MenuIcon/>




                {/* Clicking on the youtube image takes you to homepage */}
                <Link to="/">

                <img  className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="youtube logo"/>

                </Link>


                
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>




                {/* Dynamically go to a different page based on what you entered into the searchbar */}
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon  className="header__inputButton" />
                </Link>


                


            </div>


            <div className="header__icons">
                <VideoCallIcon  className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar className="header__icon"/>
            </div>

        </div>
    )
}

export default Header
