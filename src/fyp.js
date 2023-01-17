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
      <Media />
    </>
  );
}
export default Fyp;
