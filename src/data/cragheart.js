// Lvl 1 cards
import chL101 from "../assets/cards/cragheart/opposing_strike.png";
import chL102 from "../assets/cards/cragheart/crushing_grasp.png";
import chL103 from "../assets/cards/cragheart/avalanche.png";
import chL104 from "../assets/cards/cragheart/rumbling_advance.png";
import chL105 from "../assets/cards/cragheart/massive_boulder.png";
import chL106 from "../assets/cards/cragheart/backup_ammunition.png";
import chL107 from "../assets/cards/cragheart/rock_tunnel.png";
import chL108 from "../assets/cards/cragheart/unstable_upheaval.png";
import chL109 from "../assets/cards/cragheart/crater.png";
import chL110 from "../assets/cards/cragheart/dirt_tornado.png";
import chL111 from "../assets/cards/cragheart/earthen_clod.png";

// Lvl X cards
import chLX01 from "../assets/cards/cragheart/heaving_swing.png";
import chLX02 from "../assets/cards/cragheart/forceful_storm.png";
import chLX03 from "../assets/cards/cragheart/natures_lift.png";

// Lvl 2 cards
import chL201 from "../assets/cards/cragheart/explosive_punch.png";
import chL202 from "../assets/cards/cragheart/sentient_growth.png";

// Lvl 3 cards
import chL301 from "../assets/cards/cragheart/clear_the_way.png";
import chL302 from "../assets/cards/cragheart/blunt_force.png";

// Lvl 4 cards
import chL401 from "../assets/cards/cragheart/rock_slide.png";
import chL402 from "../assets/cards/cragheart/kinetic_assault.png";

// Lvl 5 cards
import chL501 from "../assets/cards/cragheart/petrify.png";
import chL502 from "../assets/cards/cragheart/stone_pummel.png";

// Lvl 6 cards
import chL601 from "../assets/cards/cragheart/dig_pit.png";
import chL602 from "../assets/cards/cragheart/cataclysm.png";

// Lvl 7 cards
import chL701 from "../assets/cards/cragheart/meteor.png";
import chL702 from "../assets/cards/cragheart/brutal_momentum.png";

// Lvl 8 cards
import chL801 from "../assets/cards/cragheart/rocky_end.png";
import chL802 from "../assets/cards/cragheart/lumbering_bash.png";

// Lvl 9 cards
import chL901 from "../assets/cards/cragheart/blind_destruction.png";
import chL902 from "../assets/cards/cragheart/pulverize.png";

import cragheartIcon from "../assets/classes/cragheart-icon.png";
import cragheartPortrait from "../assets/classes/cragheart-portrait.jpg";

const CRAGHEART = {
  id: 5,
  className: "cragheart",
  icon: cragheartIcon,
  portrait: cragheartPortrait,
  handSize: 11,
  color: "#659c65",
  deck: [
    [
      { id: 127, lvl: "x", image: chLX01 },
      { id: 128, lvl: "x", image: chLX02 },
      { id: 129, lvl: "x", image: chLX03 },
    ],
    [
      { id: 116, lvl: "1", image: chL101 },
      { id: 117, lvl: "1", image: chL102 },
      { id: 118, lvl: "1", image: chL103 },
      { id: 119, lvl: "1", image: chL104 },
      { id: 120, lvl: "1", image: chL105 },
      { id: 121, lvl: "1", image: chL106 },
      { id: 122, lvl: "1", image: chL107 },
      { id: 123, lvl: "1", image: chL108 },
      { id: 124, lvl: "1", image: chL109 },
      { id: 125, lvl: "1", image: chL110 },
      { id: 126, lvl: "1", image: chL111 },
    ],
    [
      { id: 130, lvl: "2", image: chL201 },
      { id: 131, lvl: "2", image: chL202 },
    ],
    [
      { id: 132, lvl: "3", image: chL301 },
      { id: 133, lvl: "3", image: chL302 },
    ],
    [
      { id: 134, lvl: "4", image: chL401 },
      { id: 135, lvl: "4", image: chL402 },
    ],
    [
      { id: 136, lvl: "5", image: chL501 },
      { id: 137, lvl: "5", image: chL502 },
    ],
    [
      { id: 138, lvl: "6", image: chL601 },
      { id: 139, lvl: "6", image: chL602 },
    ],
    [
      { id: 140, lvl: "7", image: chL701 },
      { id: 141, lvl: "7", image: chL702 },
    ],
    [
      { id: 142, lvl: "8", image: chL801 },
      { id: 143, lvl: "8", image: chL802 },
    ],
    [
      { id: 144, lvl: "9", image: chL901 },
      { id: 145, lvl: "9", image: chL902 },
    ],
  ],
};

export default CRAGHEART;
