import { Basic, Media } from "./tweets";
const data = [
  {
    alias: "spidey",
    username: "spiderfan",
    text: "I love the spiderman games!!",
    time: "15h",
  },
  {
    alias: "crafter11",
    username: "minecraftisawesome",
    time: "5d",
    src: "https://i.ytimg.com/vi/p-UOosKS8Ew/maxresdefault.jpg",
  },
  {
    alias: "dogsforever",
    username: "dogedogedoge",
    text: "hes so cute!",
    src: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B900%2C533%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg",
    time: "30m",
  },
];
function Following() {
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
export default Following;
