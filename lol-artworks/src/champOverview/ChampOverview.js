import ChampHeaders from "./ChampHeader";
import ChampIcon from "./ChampIcon";
import ChampSlideshow from "./ChampSlideshow";

export default function ChampOverview({ allPictureLinks }) {
  return (
    <>
      <ChampHeaders />
      <ChampIcon />
      <ChampSlideshow allPictureLinks={allPictureLinks} />
    </>
  );
}
