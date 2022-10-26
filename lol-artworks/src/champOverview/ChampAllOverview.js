import ChampOverview from "./ChampOverview";

export default function ChampAllOverview({ champAllData }) {
    return (
        <div className="champPic">
        {Object.keys(champAllData).map((key, index) => {
          return <ChampOverview allPictureLinks={champAllData[key]} />;
        })}
      </div>
    )
}