export default function ChampSlideshow({ allPictureLinks }) {
  return (
    <div>
      {Object.keys(allPictureLinks).map((key, index) => {
        return <img src={allPictureLinks[key]} />;
      })}
    </div>
  );
}
