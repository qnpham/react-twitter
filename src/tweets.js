function Basic() {
  return (
    <div className="basic">
      <div className="column-full card">
        <div className="pfp-container col-20">
          <div className="tweet-pfp"></div>
        </div>
        <div className="col-80">
          <div className="user">
            <span className="alias">alias</span>
            <span className="username">@username</span>
            <span className="time">* 20h</span>
            <p className="basic-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quas laborum nulla quo iusto recusandae nihil a fugiat eveniet
              accusamus consequuntur praesentium debitis doloribus, nam, odit
              fuga libero repellat provident.
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

function Media() {
  return <h2>Media!</h2>;
}

export { Basic, Reply, Media };
