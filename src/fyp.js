import { Reply, Basic, Media } from "./tweets";
function Fyp() {
  return (
    <>
      <Basic
        alias={"rob"}
        username={"luckyguy77"}
        text={"hello world!"}
        hours={20}
      />
      <Media alias={"hello"} username={"anyafan9292"} hours={15} />
    </>
  );
}
export default Fyp;
