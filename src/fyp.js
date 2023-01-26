import { Basic, Media } from "./tweets";
const data = [
  {
    alias: "rob",
    username: "luckyguy77",
    text: "hello world!",
    time: "20h",
  },
  {
    alias: "hello",
    username: "anyafan9292",
    time: "1d",
    src: "https://img1.ak.crunchyroll.com/i/spire2/e64be766aa2a3ce3811fc5a31454a0d71663339986_main.jpg",
  },
  {
    alias: "bee",
    username: "luckyguy77",
    text: "hello world!",
    time: "20h",
  },
  {
    alias: "sponge",
    username: "spongebobsquarefan",
    time: "2w",
    text: "are you ready???",
  },
];
function Fyp() {
  const tweets = data.map((e, i) => {
    if (e.src) {
      return (
        <Media
          alias={e.alias}
          username={e.username}
          text={e.text}
          src={e.src}
          time={e.time}
          key={i}
        />
      );
    } else {
      return (
        <Basic
          alias={e.alias}
          username={e.username}
          text={e.text}
          time={e.time}
          key={i}
        />
      );
    }
  });
  return <>{tweets}</>;
}
export default Fyp;
