import { Basic, Media } from "./tweets";
function Following() {
  return (
    <>
      <Basic
        alias={"spidey"}
        username={"spiderfan22"}
        text={"I love the spiderman game!"}
        hours={2}
      />
      <Media alias={"hello"} username={"anyafan9292"} hours={15} />
    </>
  );
}
export default Following;
