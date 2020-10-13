// Lvl 1 cards
import brL101 from "../assets/cards/brute/trample.png";
import brL102 from "../assets/cards/brute/eye_for_an_eye.png";
import brL103 from "../assets/cards/brute/sweeping_blow.png";
import brL104 from "../assets/cards/brute/provoking_roar.png";
import brL105 from "../assets/cards/brute/overwhelming_assault.png";
import brL106 from "../assets/cards/brute/grab_and_go.png";
import brL107 from "../assets/cards/brute/warding_strength.png";
import brL108 from "../assets/cards/brute/shield_bash.png";
import brL109 from "../assets/cards/brute/leaping_cleave.png";
import brL110 from "../assets/cards/brute/spare_dagger.png";

// Lvl X cards
import brLX01 from "../assets/cards/brute/skewer.png";
import brLX02 from "../assets/cards/brute/balanced_measure.png";
import brLX03 from "../assets/cards/brute/wall_of_doom.png";

// Lvl 2 cards
import brL201 from "../assets/cards/brute/fatal_advance.png";
import brL202 from "../assets/cards/brute/juggernaut.png";

// Lvl 3 cards
import brL301 from "../assets/cards/brute/hook_and_chain.png";
import brL302 from "../assets/cards/brute/brute_force.png";

// Lvl 4 cards
import brL401 from "../assets/cards/brute/unstoppable_charge.png";
import brL402 from "../assets/cards/brute/devastating_hack.png";

// Lvl 5 cards
import brL501 from "../assets/cards/brute/whirlwind.png";
import brL502 from "../assets/cards/brute/skirmishing_maneuver.png";

// Lvl 6 cards
import brL601 from "../assets/cards/brute/quietus.png";
import brL602 from "../assets/cards/brute/immovable_phalanx.png";

// Lvl 7 cards
import brL701 from "../assets/cards/brute/defensive_tactics.png";
import brL702 from "../assets/cards/brute/crippling_offensive.png";

// Lvl 8 cards
import brL801 from "../assets/cards/brute/frenzied_onslaught.png";
import brL802 from "../assets/cards/brute/selfish_retribution.png";

// Lvl 9 cards
import brL901 from "../assets/cards/brute/king_of_the_hill.png";
import brL902 from "../assets/cards/brute/face_your_end.png";

import sunIcon from "../assets/classes/brute-icon.png";
import sunPortrait from "../assets/classes/brute-portrait.jpg";

const BRUTE = {
  id: 5,
  className: "brute",
  icon: sunIcon,
  portrait: sunPortrait,
  handSize: 11,
  color: "#0080ff",
  deck: [
    [
      { id: 11, lvl: "x", image: brLX01 },
      { id: 12, lvl: "x", image: brLX02 },
      { id: 13, lvl: "x", image: brLX03 },
    ],
    [
      { id: 1, lvl: "1", image: brL101 },
      { id: 2, lvl: "1", image: brL102 },
      { id: 3, lvl: "1", image: brL103 },
      { id: 4, lvl: "1", image: brL104 },
      { id: 5, lvl: "1", image: brL105 },
      { id: 6, lvl: "1", image: brL106 },
      { id: 7, lvl: "1", image: brL107 },
      { id: 8, lvl: "1", image: brL108 },
      { id: 9, lvl: "1", image: brL109 },
      { id: 10, lvl: "1", image: brL110 },
    ],
    [
      { id: 14, lvl: "2", image: brL201 },
      { id: 15, lvl: "2", image: brL202 },
    ],
    [
      { id: 16, lvl: "3", image: brL301 },
      { id: 17, lvl: "3", image: brL302 },
    ],
    [
      { id: 8, lvl: "4", image: brL401 },
      { id: 9, lvl: "4", image: brL402 },
    ],
    [
      { id: 20, lvl: "5", image: brL501 },
      { id: 21, lvl: "5", image: brL502 },
    ],
    [
      { id: 22, lvl: "6", image: brL601 },
      { id: 23, lvl: "6", image: brL602 },
    ],
    [
      { id: 24, lvl: "7", image: brL701 },
      { id: 25, lvl: "7", image: brL702 },
    ],
    [
      { id: 26, lvl: "8", image: brL801 },
      { id: 27, lvl: "8", image: brL802 },
    ],
    [
      { id: 28, lvl: "9", image: brL901 },
      { id: 29, lvl: "9", image: brL902 },
    ],
  ],
};

export default BRUTE;
