import ChampAllOverview from "../champOverview/ChampAllOverview";
import ChampOverview from "../champOverview/ChampOverview";
import "./Landingpage.css";

export default function Landingpage() {
  const champAllData = {
    aatrox: {
      og: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      jukistar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg",
      mecha:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg",
    },
    akshan: {
      og: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg?quality=90&width=1215",
      cyberpop:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_1.jpg",
    },
  };

  return (
    <>
      <ChampAllOverview champAllData={champAllData} />
    </>
  );
}
