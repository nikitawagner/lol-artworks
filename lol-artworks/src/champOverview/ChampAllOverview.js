import ChampOverview from "./ChampOverview";
import "./ChampOverview.css";

export default function ChampAllOverview({ champAllData, handleImageClick }) {
  return (
    <div className="containerAllChampOverview">
      {Object.keys(champAllData).map((key, index) => {
        return (
          <>
            <ChampOverview
              allPictureLinks={champAllData[key]}
              key={index}
              champName={key}
              handleImageClick={(link, keyName) =>
                handleImageClick(link, keyName)
              }
            />
          </>
        );
      })}
    </div>
  );
}
