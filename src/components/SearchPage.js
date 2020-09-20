import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
function SearchPage() {
    return (
        <div className="searchPage">

            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>


            <ChannelRow
            image="https://media.santabanta.com/gallery/Global%20Celebrities(F)/Sunny%20Leone/Sunny-Leone-406-v_th.jpg"
            Channel="Sujoshk"
            verified
            subs="725k"
            noOfVideos={152}
            description="Awesome channel to become awesome"
            
            />

            <h1>Search Page</h1>
        </div>
    )
}

export default SearchPage;
