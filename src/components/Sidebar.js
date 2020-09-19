import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow'

import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";






function Sidebar() {
    return (
        <div className="sidebar">


            {/* Whenever passing components like icons as props, always capitilize the property. In this case "Icons". Small case doesn't work. */}
            
            <SidebarRow selected Icon={HomeIcon} title="Home"/>

            <SidebarRow Icon={WhatshotIcon} title="Trending"/>

            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>

            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
          
            <hr/>

        </div>
    )
}

export default Sidebar;
