import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected,  Icon, title }) {
    return (


        // Conditional statement saying that if selected property is true, add selected as classname too
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title" >{title}</h2>

        </div>
    );
}

export default SidebarRow;
