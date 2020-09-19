import React from 'react'
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';




function VideoCard({title, views, timeStamp, image, channel}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="nothing"/>


            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt="channel" src=""/>

                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timeStamp}
                    </p>
                </div>
            </div>           
        </div>
    )
}

export default VideoCard;
