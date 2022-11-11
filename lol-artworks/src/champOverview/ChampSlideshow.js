export default function ChampSlideshow({ allPictureLinks }) {
  return (
    <div className="slideshow">
      {Object.keys(allPictureLinks).map((key, index) => {
        return (
          <div key={index} className="imageContainer">
            <img src={allPictureLinks[key]} alt="champ" />
          </div>
        );
      })}
    </div>
  );
}
