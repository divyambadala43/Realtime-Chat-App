import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSeach, TeamChannelList, TeamChannelPreview } from "./";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

const Sidebar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt='Hospital' width='30' />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt='Logout' width='30' />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <div className='channel-list__header__text'>
      <p>Medical Pager</p>
    </div>
  </div>
);

function ChannelListContainer() {
  return (
    <React.Fragment>
      <Sidebar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
      </div>
    </React.Fragment>
  );
}

export default ChannelListContainer;
