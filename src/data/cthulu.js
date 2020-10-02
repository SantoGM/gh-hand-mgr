// Lvl 1 cards
import phL101 from "../assets/cards/plagueherald/vile_pestilence.png";
import phL102 from "../assets/cards/plagueherald/grasping_vermin.png";
import phL103 from "../assets/cards/plagueherald/wretched_swarm.png";
import phL104 from "../assets/cards/plagueherald/spread_the_plague.png";
import phL105 from "../assets/cards/plagueherald/biting_gnats.png";
import phL106 from "../assets/cards/plagueherald/winged_congregation.png";
import phL107 from "../assets/cards/plagueherald/creeping_curse.png";
import phL108 from "../assets/cards/plagueherald/gathering_doom.png";
import phL109 from "../assets/cards/plagueherald/paralyzing_bite.png";
import phL110 from "../assets/cards/plagueherald/foul_wind.png";
import phL111 from "../assets/cards/plagueherald/scattered_terror.png";

// Lvl X cards
import phLX01 from "../assets/cards/plagueherald/epidemic.png";
import phLX02 from "../assets/cards/plagueherald/virulent_strain.png";
import phLX03 from "../assets/cards/plagueherald/blistering_vortex.png";

// Lvl 2 cards
import phL201 from "../assets/cards/plagueherald/under_the_skin.png";
import phL202 from "../assets/cards/plagueherald/rot_maggots.png";

// Lvl 3 cards
import phL301 from "../assets/cards/plagueherald/succumb_to_the_gift.png";
import phL302 from "../assets/cards/plagueherald/fetid_flurry.png";

// Lvl 4 cards
import phL401 from "../assets/cards/plagueherald/storm_of_wings.png";
import phL402 from "../assets/cards/plagueherald/nightmarish_affliction.png";

// Lvl 5 cards
import phL501 from "../assets/cards/plagueherald/accelerated_end.png";
import phL502 from "../assets/cards/plagueherald/willing_sacrifice.png";

// Lvl 6 cards
import phL601 from "../assets/cards/plagueherald/stinging_cloud.png";
import phL602 from "../assets/cards/plagueherald/black_tides.png";

// Lvl 7 cards
import phL701 from "../assets/cards/plagueherald/airborne_toxin.png";
import phL702 from "../assets/cards/plagueherald/baneful_hex.png";

// Lvl 8 cards
import phL801 from "../assets/cards/plagueherald/spreading_scourge.png";
import phL802 from "../assets/cards/plagueherald/grim_bargain.png";

// Lvl 9 cards
import phL901 from "../assets/cards/plagueherald/mass_extinction.png";
import phL902 from "../assets/cards/plagueherald/convert_the_flock.png";

import cthuluIcon from "../assets/classes/cthulu-icon.png";
import cthuluPortrait from "../assets/classes/cthulu-portrait.jpg";

const CTHULU = {
  id: 4,
  className: "Plagueherald",
  icon: cthuluIcon,
  portrait: cthuluPortrait,
  handSize: 11,
  deck: [
    [
      { id: 300, lvl: "x", image: phLX01 },
      { id: 301, lvl: "x", image: phLX02 },
      { id: 302, lvl: "x", image: phLX03 },
    ],
    [
      { id: 289, lvl: "1", image: phL101 },
      { id: 290, lvl: "1", image: phL102 },
      { id: 291, lvl: "1", image: phL103 },
      { id: 292, lvl: "1", image: phL104 },
      { id: 293, lvl: "1", image: phL105 },
      { id: 294, lvl: "1", image: phL106 },
      { id: 295, lvl: "1", image: phL107 },
      { id: 296, lvl: "1", image: phL108 },
      { id: 297, lvl: "1", image: phL109 },
      { id: 298, lvl: "1", image: phL110 },
      { id: 299, lvl: "1", image: phL111 },
    ],
    [
      { id: 303, lvl: "2", image: phL201 },
      { id: 304, lvl: "2", image: phL202 },
    ],
    [
      { id: 305, lvl: "3", image: phL301 },
      { id: 306, lvl: "3", image: phL302 },
    ],
    [
      { id: 307, lvl: "4", image: phL401 },
      { id: 308, lvl: "4", image: phL402 },
    ],
    [
      { id: 309, lvl: "5", image: phL501 },
      { id: 310, lvl: "5", image: phL502 },
    ],
    [
      { id: 311, lvl: "6", image: phL601 },
      { id: 312, lvl: "6", image: phL602 },
    ],
    [
      { id: 313, lvl: "7", image: phL701 },
      { id: 314, lvl: "7", image: phL702 },
    ],
    [
      { id: 315, lvl: "8", image: phL801 },
      { id: 316, lvl: "8", image: phL802 },
    ],
    [
      { id: 317, lvl: "9", image: phL901 },
      { id: 318, lvl: "9", image: phL902 },
    ],
  ],
};

export default CTHULU;
