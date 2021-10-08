import './Sidebar.scss';
import { IoHomeOutline } from "react-icons/io5";
import { MdPhonelink, MdList, MdSettings } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
function Sidebar() {
  return (
      <div className="main-container">
        <div className="side-bar">
            <div className="side-bar__home-logo">
                <img src="/images/home_logo.png" alt="home-logo" />
            </div>
            <div className="side-bar__avatar">
                <img src="/images/avatar.png" alt="home-logo" />
                <div className ="side-bar__avatar-details">
                    <div className="side-bar__avatar-home-text"> My Home </div>
                    <div className="side-bar__avatar-address">9898 Trent Bypass Suite 541</div>
                </div>
            </div>
            <ul className="side-bar__menu">
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><IoHomeOutline /></span>
                    <span className="side-bar__menu-text">Overview</span>
                </li>
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><MdPhonelink /></span>
                    <span className="side-bar__menu-text">Devices</span>
                </li>
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><ImStatsDots /></span>
                    <span className="side-bar__menu-text">Analytics</span>
                </li>
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><MdList /></span>
                    <span className="side-bar__menu-text">Rules</span>
                </li>
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><MdPhonelink /></span>
                    <span className="side-bar__menu-text">Gallery</span>
                </li>
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><FaUndo /></span>
                    <span className="side-bar__menu-text">History</span>
                </li>
                <li className="side-bar__menu-item">
                    <span className="side-bar__menu-icon"><MdSettings /></span>
                    <span className="side-bar__menu-text">Settings</span>
                </li>
            </ul>
        </div>
        <div className="main-content">
            Main Content
        </div>    
    </div>
  );
}

export default Sidebar;
