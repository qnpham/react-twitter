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
            <span className="time">* {props.hours}h</span>
            <p className="basic-text">{props.text}</p>
          </div>
        </div>
      </div>
      <div className="icons column-full">
        <i class="fa-regular fa-message"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  );
}

function Media(props) {
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
            <span className="time">* {props.hours}h</span>
            <p className="media">
              <img
                src="https://img1.ak.crunchyroll.com/i/spire2/e64be766aa2a3ce3811fc5a31454a0d71663339986_main.jpg"
                alt=""
                className="tweet-img"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="icons column-full">
        <i class="fa-regular fa-message"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  );
}

function Reply() {
  return <h3>reply!</h3>;
}

export { Basic, Reply, Media };
