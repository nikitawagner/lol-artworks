import { useState } from "react";
import ChampAllOverview from "../champOverview/ChampAllOverview";
import ImageModal from "../modals/ImageModal";
import "./Landingpage.css";

export default function Landingpage() {
  const champAllData = {
    aatrox: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      jukistar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg",
      mecha:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg",
      seeJaeger:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg",
      blutmond:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg",
      blutmondPrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_8.jpg",
    },

    ahri: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      dynastie:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg",
      fuchsfeuer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg",
      popstar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg",
      herausforderer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg",
      akademie:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg",
      arcade:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg",
      sternenwaechterin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg",
      kda: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg",
      kdaPrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg",
      ahnenholz:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg",
      seelenblumen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg",
      kdaAllOut:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg",
      hexenzirkel:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg",
      kdaPrestige2022:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_65.jpg",
      arkana:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg",
    },
    akshan: {
      default:
        "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg?quality=90&width=1215",
      cyberpop:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_1.jpg",
      kristallrose:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_10.jpg",
    },
    akali: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
      stechende:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_1.jpg",
      infernal:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_2.jpg",
      allStar:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_3.jpg",
      krankenschwester:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_4.jpg",
      blutmond:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_5.jpg",
      silberzahn:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_6.jpg",
      kopfjaeger:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_7.jpg",
      sashimi:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_8.jpg",
      kda: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg",
      kdaPrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_13.jpg",
      projekt:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_14.jpg",
      trueDamage:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_15.jpg",
      kdaAllOut:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_32.jpg",
      gangsteralbtraum:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_50.jpg",
      kdaPrestige2022:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_60.jpg",
      sternenwaechterin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_61.jpg",
    },
    alistar: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
      schwarz:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_1.jpg",
      golden:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_2.jpg",
      matador:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_3.jpg",
      langhorn:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_4.jpg",
      entfesselt:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_5.jpg",
      infernal:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_6.jpg",
      libero:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_7.jpg",
      marodeur:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_8.jpg",
      sktT1:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_9.jpg",
      muhkuh:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_10.jpg",
      hextech:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_19.jpg",
      eroberer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_20.jpg",
      schwarzfrost:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_22.jpg",
      mondzodiak:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_29.jpg",
    },
    amumu: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
      pharao:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_1.jpg",
      vancouver:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_2.jpg",
      emumu:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_3.jpg",
      geschenk:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_4.jpg",
      beinaheBallkoenig:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_5.jpg",
      kleinerRitter:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_6.jpg",
      traurigerRoboter:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_7.jpg",
      ueberraschungsparty:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_8.jpg",
      infernalischer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_17.jpg",
      hextech:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_23.jpg",
      kuerbisprinz:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_24.jpg",
      porzellan:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_34.jpg",
    },
    anivia: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
      friedensphoenix:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_1.jpg",
      raubvogel:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_2.jpg",
      noxusjaeger:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_3.jpg",
      hextech:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_4.jpg",
      schwarzfrost:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_5.jpg",
      urzeit:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_6.jpg",
      karnevalskoenigin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_7.jpg",
      papierkunst:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_8.jpg",
      kosmischeSchwingen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_17.jpg",
      geottlicherPhoenix:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_27.jpg",
      hexereiFledernivia:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_37.jpg",
    },
    annie: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
      gothic:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_1.jpg",
      rotkaeppchen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_2.jpg",
      anniImWunderland:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_3.jpg",
      ballkoenigin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_4.jpg",
      frostfeuer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_5.jpg",
      rollentausch:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_6.jpg",
      frankentibbers:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_7.jpg",
      panda:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_8.jpg",
      herzblatt:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_9.jpg",
      hextech:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_10.jpg",
      supergalaktische:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_11.jpg",
      jubilaeum:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_12.jpg",
      mondzodiak:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_13.jpg",
      konditorei:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_22.jpg",
      schreckensnacht:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_31.jpg",
    },
    aphelios: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
      flammendeFinsternis:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_1.jpg",
      mondzodiak:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_9.jpg",
      edg: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_18.jpg",
      seelenblumen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg",
    },
    ashe: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
      freljord:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg",
      sherwoodForest:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_2.jpg",
      waid: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_3.jpg",
      koenigin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_4.jpg",
      amethyst:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_5.jpg",
      herzsucher:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_6.jpg",
      marodeur:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_7.jpg",
      projekt:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_8.jpg",
      meisterschafts:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_9.jpg",
      kosmischeKoenigin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_11.jpg",
      highNoon:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg",
      feebdrache:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_23.jpg",
      hexenzirkel:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_32.jpg",
      meeresrauschen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_43.jpg",
    },
    aurelionSol: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
      aschfahlerFuerst:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_1.jpg",
      mecha:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_2.jpg",
      sturmdrache:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_11.jpg",
    },
    azir: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
      galaktischer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_1.jpg",
      grabesfuerst:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_2.jpg",
      sktT1:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_3.jpg",
      kriegsherr:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_4.jpg",
      ahnenholz:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_5.jpg",
      wm2022:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_14.jpg",
    },
    bard: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
      ahnenholz:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_1.jpg",
      schneetag:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_5.jpg",
      bardDerBarde:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_6.jpg",
      astronauten:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_8.jpg",
      konditorei:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_17.jpg",
    },
    belveth: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
      schlachtboss:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_1.jpg",
    },
    blitzcrank: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
      rostiger:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_1.jpg",
      torwart:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_2.jpg",
      bummBumm:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_3.jpg",
      piltoverCustoms:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_4.jpg",
      eindeutigNicht:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_5.jpg",
      i: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_6.jpg",
      riot: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_7.jpg",
      schlachtboss:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_11.jpg",
      ruchloseLanze:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_20.jpg",
      aufrichtigeLanze:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_21.jpg",
      hexenkessel:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_22.jpg",
      weltraumGroove:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_29.jpg",
      siegreicher:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_36.jpg",
      zenitspiele:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_47.jpg",
    },
    brand: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
      apokalyptischer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_1.jpg",
      vandalen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_2.jpg",
      gefrier:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_3.jpg",
      zombie:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_4.jpg",
      geistesfeuer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_5.jpg",
      schlachtboss:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_6.jpg",
      lichtbogen:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_7.jpg",
      ewigkeitsdrache:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_8.jpg",
      charmeur:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_21.jpg",
      charmeurPrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_22.jpg",
    },
    braum: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
      drachentoeter:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_1.jpg",
      elTigre:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_2.jpg",
      loewenherz:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_3.jpg",
      weihnachts:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_10.jpg",
      gangster:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_11.jpg",
      zuckerschock:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_24.jpg",
      poolparty:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_33.jpg",
    },
    caitlyn: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
      widerstands:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_1.jpg",
      sheriff:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_2.jpg",
      safari:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_3.jpg",
      arktische:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_4.jpg",
      officer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg",
      kopfjaeger:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_6.jpg",
      mondgeist:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_10.jpg",
      pulsfeuer:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_11.jpg",
      poolparty:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_13.jpg",
      arcade:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_19.jpg",
      arcadePrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_20.jpg",
      academiaCermantis:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_22.jpg",
      arcane:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_28.jpg",
      arcadePrestige2022:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_29.jpg",
      schneemond:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_30.jpg",
    },
    camille: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
      programm:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_1.jpg",
      hexenzirkel:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_2.jpg",
      ig: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_10.jpg",
      arkana:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_11.jpg",
      angriffskommandantin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_21.jpg",
    },
    cassiopeia: {
      default: "",
    },
    chogath: {
      default: "",
    },
    corki: {
      default: "",
    },
    darius: {
      default: "",
    },
    diana: {
      default: "",
    },
    drMundo: {
      default: "",
    },
    draven: {
      default: "",
    },
    ekko: {
      default: "",
    },
    elise: {
      default: "",
    },
    evelynn: {
      default: "",
    },
    ezrael: {
      default: "",
    },
    fiddlesticks: {
      default: "",
    },
    lux: {
      default:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
      zauberin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_1.jpg",
      zauberdieb:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_2.jpg",
      kommando:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_3.jpg",
      imperiale:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_4.jpg",
      stahllegion:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_5.jpg",
      sternenwaechterin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_6.jpg",
      derElemente:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg",
      mondkaiserin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_8.jpg",
      pyjamawaechterin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_14.jpg",
      academiaCermantis:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_15.jpg",
      academiaCermantisPrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_16.jpg",
      kosmischeVernichterin:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_17.jpg",
      kosmische:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_18.jpg",
      weltraumGroove:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_19.jpg",
      porzellan:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_29.jpg",
      academiaCermantisPrestige2022:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_39.jpg",
      porzellanPrestige:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_40.jpg",
    },
  };

  const [show, setShow] = useState(false);
  const [skinName, setSkinName] = useState("");
  const [skinLink, setSkinLink] = useState("");

  function handleImageClick(link, keyName) {
    setSkinLink(link);
    setSkinName(keyName);
    setShow(true);
  }

  return (
    <>
      <ChampAllOverview
        champAllData={champAllData}
        handleImageClick={(link, keyName) => handleImageClick(link, keyName)}
      />
      <ImageModal
        clickedImage={null}
        show={show}
        setShow={(value) => setShow(value)}
        skinLink={skinLink}
        skinName={skinName}
      />
    </>
  );
}
