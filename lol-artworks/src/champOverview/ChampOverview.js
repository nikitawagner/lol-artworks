import ChampHeaders from "./ChampHeader";
import ChampIcon from "./ChampIcon";
import ChampSlideshow from "./ChampSlideshow";

export default function ChampOverview({ allPictureLinks, champName }) {
  return (
    <div className="champOverview">
      <div className="nameIconDiv">
        <ChampHeaders
          champName={champName.charAt(0).toUpperCase() + champName.slice(1)}
        />
        <ChampIcon ogPicture={allPictureLinks.og} />
      </div>
      <ChampSlideshow allPictureLinks={allPictureLinks} />
    </div>
  );
}
