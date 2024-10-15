import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import GroupsIcon from "@mui/icons-material/Groups";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="ChatHeaderLeft">
        <h3>
          <span className="ChatHeaderHash">#</span>
          Udemy
        </h3>
      </div>
      <div className="ChatHeaderRight">
        <NotificationsIcon />
        <PushPinIcon />
        <GroupsIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
