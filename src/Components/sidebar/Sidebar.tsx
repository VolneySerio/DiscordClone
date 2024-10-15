import React from "react";
import "./sidebar.scss";
import SidebarChannel from "./SidebarChannel";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MicIcon from "@mui/icons-material/Mic";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>不和</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sideabarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>チャンネル生成</h4>
            </div>
            <AddIcon className="sidebarIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src="./icon.png" alt=" " />
              <div className="accountName">
                <h4>Volney</h4>
                <span>#9834</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
