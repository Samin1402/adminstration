import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <div className="rectangle-root">
      <div className="component-child" />
      <div className="group-container">
        <div className="my-profile-wrapper">
          <div className="my-profile">My Profile</div>
        </div>
        <img className="group-icon" alt="" src="/group-177091.svg" />
      </div>
      <div className="component-item" />
      <div className="component-inner" />
      <div className="message-square-parent">
        <img className="message-square-icon" alt="" src="/messagesquare.svg" />
        <div className="chats-wrapper">
          <div className="my-profile">Chats</div>
        </div>
      </div>
      <div className="sign-out-parent">
        <div className="sign-out">Sign out</div>
        <img className="group-child2" alt="" src="/group-177094.svg" />
      </div>
    </div>
  );
};

export default GroupComponent;
