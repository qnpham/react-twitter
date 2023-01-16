function Basic() {
  return (
    <div className="basic">
      <div className="basic-top">
        <div className="tweet-pfp"></div>
        <div className="user">
          <span className="alias">alias</span>
          <span className="username">@username</span>
          <span className="time">* 20h</span>
        </div>
      </div>
      <p className="basic-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
        temporibus quas. Eos, animi consectetur voluptates deleniti eveniet
        ullam eaque! Officia eligendi
      </p>
      <div className="icons">
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
