import React from 'react';
import s from "./Menu.module.css"

import {NavLink} from "react-router-dom";
import {chatImg, profileImg, settingsImg, usersImg} from "../../../Images/dir/icons";

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.header}>
                <div className={s.title}>Guests</div>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <img src={profileImg} alt="profile" className={s.icon}/>
                    <NavLink to="/profile"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Profile</NavLink>
                    <span className={s.contactsPush}>25</span>
                </li>
                <li className={s.item}>
                    <img src={chatImg} alt="Dialogs" className={s.icon}/>
                    <NavLink to="/dialogs"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <img src={usersImg} alt="users" className={s.icon}/>
                    <NavLink to="/users"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Users</NavLink>
                </li>

                <li className={s.item}>
                    <img src={settingsImg} alt="Settings" className={s.icon}/>

                    <NavLink to="/settings"
                             className={({isActive}) => isActive ? `${s.link__active}` : `${s.link}`}>Settings</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
