import { useState, useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import PortalPopup from "../components/PortalPopup";
import "./Administration.css";

const Administration = () => {
  const [isGroupComponentOpen, setGroupComponentOpen] = useState(false);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "chat" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const openGroupComponent = useCallback(() => {
    setGroupComponentOpen(true);
  }, []);

  const closeGroupComponent = useCallback(() => {
    setGroupComponentOpen(false);
  }, []);

  const onCallButtonContainerClick = useCallback(() => {
    // Please sync "Administration" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Analytics" to the project
  }, []);

  const onGroupContainer4Click = useCallback(() => {
    // Please sync "Administration" to the project
  }, []);

  return (
    <>
      <div className="administration">
        <div className="administration-child" />
        <div className="administration-item" />
        <div className="frame-parent" onClick={onGroupContainerClick}>
          <div className="iconlybulkbuy-parent">
            <img className="iconlybulkbuy" alt="" src="/iconlybulkbuy.svg" />
            <div className="user-chats">User Chats</div>
          </div>
          <div className="group-child" />
        </div>
        <div className="frame-group">
          <div className="iconlybulkstar-parent">
            <img className="iconlybulkbuy" alt="" src="/iconlybulkstar.svg" />
            <div className="user-chats">Administration</div>
          </div>
          <div className="group-child" />
        </div>
        <div
          className="iconlybulkcategory-parent"
          onClick={onFrameContainer2Click}
        >
          <img className="iconlybulkbuy" alt="" src="/iconlybulkcategory.svg" />
          <div className="dashboard">Dashboard</div>
        </div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="iconlybulklogout-parent">
            <img className="iconlybulkbuy" alt="" src="/iconlybulklogout.svg" />
            <div className="user-chats">Log out</div>
          </div>
        </div>
        <div className="user-info" onClick={openGroupComponent}>
          <div className="avatar">
            <div className="avatar1">
              <div className="outline-border">
                <div className="outline" />
                <div className="inner" />
              </div>
              <img className="image-icon" alt="" src="/image@2x.png" />
              <div className="initials">
                <div className="background" />
                <div className="initials1">AB</div>
              </div>
              <div className="icon">
                <div className="background1" />
                <img
                  className="essentials-user-circle"
                  alt=""
                  src="/essentials--usercircle.svg"
                />
              </div>
              <div className="add">
                <div className="background2" />
                <img
                  className="basics-add"
                  alt=""
                  src="/essentials--usercircle.svg"
                />
              </div>
              <div className="counter-top">
                <div className="large">
                  <div className="base" />
                  <div className="div">23</div>
                </div>
                <div className="medium">
                  <div className="base" />
                  <b className="b">12</b>
                </div>
                <div className="small">
                  <div className="base2" />
                  <b className="b">17</b>
                </div>
              </div>
              <div className="counter-bottom">
                <div className="large1">
                  <div className="base" />
                  <div className="div">23</div>
                </div>
                <div className="medium1">
                  <div className="base" />
                  <b className="b">12</b>
                </div>
                <div className="small1">
                  <div className="base2" />
                  <b className="b">17</b>
                </div>
              </div>
              <img
                className="counter-bottom"
                alt=""
                src="/essentials--usercircle.svg"
              />
              <div className="indicator-bottom">
                <div className="large2" />
                <div className="medium2" />
                <div className="small2" />
              </div>
              <div className="indicator-top">
                <div className="large3" />
                <div className="medium3" />
                <div className="small3" />
              </div>
            </div>
          </div>
          <div className="text">
            <b className="cody-fisher">Cody Fisher</b>
            <div className="kenzilawsonexamplecom">
              kenzi.lawson@example.com
            </div>
          </div>
          <img className="basics-up" alt="" src="/basics--up.svg" />
        </div>
        <img
          className="pioneer-auctions-logo-02-2"
          alt=""
          src="/pioneer-auctions-logo02-2@2x.png"
        />
        <div className="message-panel">
          <div className="call-button" onClick={onCallButtonContainerClick}>
            <div className="add-members">Add Members</div>
          </div>
        </div>
        <div className="administration2">Administration</div>
        <div className="frame-container" onClick={onGroupContainer3Click}>
          <div className="iconlybulkstar-parent">
            <img className="iconlybulkbuy" alt="" src="/iconlybulkstar1.svg" />
            <div className="user-chats">Analytics</div>
          </div>
          <div className="group-child" />
        </div>
        <div className="frame">
          <div className="frame1">
            <div className="rectangle" />
            <div className="name">Name</div>
          </div>
          <div className="frame2">
            <div className="rectangle1" />
            <div className="email">Email</div>
          </div>
          <div className="frame3">
            <div className="rectangle1" />
            <div className="email">Role</div>
          </div>
          <div className="frame4">
            <div className="rectangle1" />
            <div className="email">Requests</div>
          </div>
          <div className="frame5">
            <div className="rectangle1" />
            <div className="email">Status</div>
          </div>
          <div className="frame6">
            <div className="rectangle5" />
            <div className="email">Actions</div>
          </div>
          <div className="frame7">
            <div className="rectangle6" />
            <div className="message-component">
              <img
                className="message-component-child"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="frame-div">
                <div className="frame-parent1">
                  <div className="full-name-here-parent">
                    <div className="full-name-here">Florencio Dorrance</div>
                    <div className="m">12m</div>
                  </div>
                  <div className="job">Market Development Manager</div>
                </div>
                <div className="label-parent">
                  <div className="label">
                    <div className="title">Question</div>
                  </div>
                  <div className="label1">
                    <div className="title">Help wanted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame8">
            <div className="rectangle7" />
            <div className="johnmailcom">john@mail.com</div>
          </div>
          <div className="frame9">
            <div className="rectangle7" />
            <div className="refund-support">{`Refund & Support`}</div>
          </div>
          <div className="frame10">
            <div className="rectangle7" />
            <div className="completed">200</div>
          </div>
          <div className="frame11">
            <div className="rectangle7" />
            <div className="completed">50 Completed</div>
          </div>
          <div className="frame12">
            <div className="rectangle7" />
          </div>
          <div className="frame13">
            <div className="rectangle6" />
          </div>
          <div className="frame14">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame15">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame16">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame17">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <img className="frame-icon" alt="" src="/frame.svg" />
          <div className="frame18">
            <div className="rectangle6" />
          </div>
          <div className="frame19">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame20">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame21">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame22">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <img className="frame-icon1" alt="" src="/frame1.svg" />
          <div className="frame23">
            <div className="rectangle22" />
          </div>
          <div className="frame24">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame25">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame26">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <div className="frame27">
            <div className="rectangle7" />
            <div className="div3">-</div>
          </div>
          <img className="frame-icon2" alt="" src="/frame2.svg" />
          <div className="rectangle-group">
            <div className="group-child1" />
            <div className="group-parent">
              <div className="edit-wrapper" onClick={onGroupContainer4Click}>
                <div className="edit">{`Edit `}</div>
              </div>
              <div className="delete-wrapper">
                <div className="edit">Delete</div>
              </div>
            </div>
          </div>
          <img className="more-vertical-icon" alt="" src="/morevertical.svg" />
        </div>
        <div className="frame28">
          <div className="rectangle22" />
          <div className="message-component">
            <img
              className="message-component-child"
              alt=""
              src="/frame-101@2x.png"
            />
            <div className="frame-parent2">
              <div className="frame-parent1">
                <div className="full-name-here-parent">
                  <div className="full-name-here">Lavern Laboy</div>
                  <div className="m">5h</div>
                </div>
                <div className="job">Account Executive</div>
              </div>
              <div className="label-parent">
                <div className="label">
                  <div className="title">Question</div>
                </div>
                <div className="label3">
                  <div className="title">Some content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="message-component2">
          <img
            className="message-component-child"
            alt=""
            src="/frame-102@2x.png"
          />
          <div className="frame-parent2">
            <div className="frame-parent1">
              <div className="full-name-here-parent">
                <div className="full-name-here">Jamel Eusebio</div>
                <div className="m">1h</div>
              </div>
              <div className="job">Administrator</div>
            </div>
            <div className="label-parent">
              <div className="label">
                <div className="title">Bug</div>
              </div>
              <div className="label1">
                <div className="title">Hacktoberfest</div>
              </div>
            </div>
          </div>
        </div>
        <div className="message-component3">
          <img
            className="message-component-child"
            alt=""
            src="/frame-103@2x.png"
          />
          <div className="frame-parent2">
            <div className="frame-parent1">
              <div className="full-name-here-parent">
                <div className="full-name-here">Benny Spanbauer</div>
                <div className="m">24m</div>
              </div>
              <div className="job">Area Sales Manager</div>
            </div>
            <div className="label-parent">
              <div className="label6">
                <div className="title">Question</div>
              </div>
              <div className="label3">
                <div className="title">Some content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isGroupComponentOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGroupComponent}
        >
          <GroupComponent onClose={closeGroupComponent} />
        </PortalPopup>
      )}
    </>
  );
};

export default Administration;
