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
      <Media
        alias={"crafter11"}
        username={"minecraftisawesome"}
        hours={15}
        src="https://i.ytimg.com/vi/p-UOosKS8Ew/maxresdefault.jpg"
      />
    </>
  );
}
export default Following;
