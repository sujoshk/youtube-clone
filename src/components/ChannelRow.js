import React from 'react';
import './ChannelRow.css';
import {Avatar} from '@material-ui/core';

function ChannelRow({image, Channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelROw">

            <Avatar className="channelRow__logo" 
            alt={Channel}
            src={image}
            
            />

        </div>
    )
}

export default ChannelRow
