export default function ChampSlideshow({ allPictureLinks, handleImageClick }) {
  return (
    <div className="slideshow">
      {Object.keys(allPictureLinks).map((key, index) => {
        return (
          <div
            key={index}
            className="imageContainer"
            onClick={(index) => handleImageClick(index.target.src, key)}
          >
            <img src={allPictureLinks[key]} alt="champ" />
          </div>
        );
      })}
    </div>
  );
}
