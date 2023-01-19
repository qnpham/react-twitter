import { Basic, Media } from "./tweets";
function Fyp() {
  return (
    <>
      <Basic
        alias={"rob"}
        username={"luckyguy77"}
        text={"hello world!"}
        hours={20}
      />
      <Media
        alias={"hello"}
        username={"anyafan9292"}
        hours={15}
        src="https://img1.ak.crunchyroll.com/i/spire2/e64be766aa2a3ce3811fc5a31454a0d71663339986_main.jpg"
      />
    </>
  );
}
export default Fyp;
