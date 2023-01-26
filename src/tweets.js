function Basic(props) {
  return (
    <div className="basic">
      <div className="column-full card">
        <div className="pfp-container col-20">
          <div className="tweet-pfp"></div>
        </div>
        <div className="col-80">
          <div className="user">
            <span className="alias">{props.alias}</span>
            <span className="username">@{props.username}</span>
            <span className="time">* {props.time}</span>
            <p className="basic-text">{props.text}</p>
          </div>
        </div>
      </div>
      <div className="icons column-full">
        <i className="fa-regular fa-message"></i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-regular fa-heart"></i>
      </div>
    </div>
  );
}

function Media(props) {
  const mediaText = props.text ? (
    <p className="media-text">{props.text}</p>
  ) : null;
  return (
    <div className="basic">
      <div className="column-full card">
        <div className="pfp-container col-20">
          <div className="tweet-pfp"></div>
        </div>
        <div className="col-80">
          <div className="user">
            <span className="alias">{props.alias}</span>
            <span className="username">@{props.username}</span>
            <span className="time">* {props.time}</span>
            {mediaText}
            <p className="media">
              <img src={props.src} alt="" className="tweet-img" />
            </p>
          </div>
        </div>
      </div>
      <div className="icons column-full">
        <i className="fa-regular fa-message"></i>
        <i className="fa-solid fa-retweet"></i>
        <i className="fa-regular fa-heart"></i>
      </div>
    </div>
  );
}

export { Basic, Media };
