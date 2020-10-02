// Lvl 1 cards
import bkL101 from "../assets/cards/berserker/resolute_stand.png";
import bkL102 from "../assets/cards/berserker/growing_rage.png";
import bkL103 from "../assets/cards/berserker/strength_in_agony.png";
import bkL104 from "../assets/cards/berserker/defiance_of_death.png";
import bkL105 from "../assets/cards/berserker/from_the_brink.png";
import bkL106 from "../assets/cards/berserker/blood_pact.png";
import bkL107 from "../assets/cards/berserker/cauterize.png";
import bkL108 from "../assets/cards/berserker/dazing_wound.png";
import bkL109 from "../assets/cards/berserker/furious_aid.png";
import bkL110 from "../assets/cards/berserker/bounce_back.png";

// Lvl X cards
import bkLX01 from "../assets/cards/berserker/unbridled_power.png";
import bkLX02 from "../assets/cards/berserker/glass_hammer.png";
import bkLX03 from "../assets/cards/berserker/numb_the_pain.png";

// Lvl 2 cards
import bkL201 from "../assets/cards/berserker/reckless_offensive.png";
import bkL202 from "../assets/cards/berserker/break_the_chains.png";

// Lvl 3 cards
import bkL301 from "../assets/cards/berserker/spiked_armor.png";
import bkL302 from "../assets/cards/berserker/fatal_fury.png";

// Lvl 4 cards
import bkL401 from "../assets/cards/berserker/flurry_of_axes.png";
import bkL402 from "../assets/cards/berserker/shiny_distraction.png";

// Lvl 5 cards
import bkL501 from "../assets/cards/berserker/seeing_red.png";
import bkL502 from "../assets/cards/berserker/final_fight.png";

// Lvl 6 cards
import bkL601 from "../assets/cards/berserker/devil_horns.png";
import bkL602 from "../assets/cards/berserker/unstoppable_destruction.png";

// Lvl 7 cards
import bkL701 from "../assets/cards/berserker/burning_hatred.png";
import bkL702 from "../assets/cards/berserker/careless_charge.png";

// Lvl 8 cards
import bkL801 from "../assets/cards/berserker/bone_breaker.png";
import bkL802 from "../assets/cards/berserker/vengeful_barrage.png";

// Lvl 9 cards
import bkL901 from "../assets/cards/berserker/immortality.png";
import bkL902 from "../assets/cards/berserker/the_maw_of_madness.png";

import berserkerIcon from "../assets/classes/berserker-icon.png";
import mindthiefPortrait from "../assets/classes/mindthief-portrait.jpg";

const LIGHTNINGS = {
  id: 2,
  className: "Berserker",
  icon: berserkerIcon,
  portrait: mindthiefPortrait,
  handSize: 10,
  deck: [
    [
      { id: 329, lvl: "x", image: bkLX01 },
      { id: 330, lvl: "x", image: bkLX02 },
      { id: 331, lvl: "x", image: bkLX03 },
    ],
    [
      { id: 319, lvl: "1", image: bkL101 },
      { id: 320, lvl: "1", image: bkL102 },
      { id: 321, lvl: "1", image: bkL103 },
      { id: 322, lvl: "1", image: bkL104 },
      { id: 323, lvl: "1", image: bkL105 },
      { id: 324, lvl: "1", image: bkL106 },
      { id: 325, lvl: "1", image: bkL107 },
      { id: 326, lvl: "1", image: bkL108 },
      { id: 327, lvl: "1", image: bkL109 },
      { id: 328, lvl: "1", image: bkL110 },
    ],
    [
      { id: 332, lvl: "2", image: bkL201 },
      { id: 333, lvl: "2", image: bkL202 },
    ],
    [
      { id: 334, lvl: "3", image: bkL301 },
      { id: 335, lvl: "3", image: bkL302 },
    ],
    [
      { id: 336, lvl: "4", image: bkL401 },
      { id: 337, lvl: "4", image: bkL402 },
    ],
    [
      { id: 338, lvl: "5", image: bkL501 },
      { id: 339, lvl: "5", image: bkL502 },
    ],
    [
      { id: 340, lvl: "6", image: bkL601 },
      { id: 341, lvl: "6", image: bkL602 },
    ],
    [
      { id: 342, lvl: "7", image: bkL701 },
      { id: 343, lvl: "7", image: bkL702 },
    ],
    [
      { id: 344, lvl: "8", image: bkL801 },
      { id: 345, lvl: "8", image: bkL802 },
    ],
    [
      { id: 346, lvl: "9", image: bkL901 },
      { id: 347, lvl: "9", image: bkL902 },
    ],
  ],
};

export default LIGHTNINGS;
