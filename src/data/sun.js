// Lvl 1 cards
import skL101 from "../assets/cards/sunkeeper/purifying_aura.png";
import skL102 from "../assets/cards/sunkeeper/cautious_advance.png";
import skL103 from "../assets/cards/sunkeeper/brilliant_prayer.png";
import skL104 from "../assets/cards/sunkeeper/empowering_command.png";
import skL105 from "../assets/cards/sunkeeper/protective_blessing.png";
import skL106 from "../assets/cards/sunkeeper/dazzling_charge.png";
import skL107 from "../assets/cards/sunkeeper/tactical_order.png";
import skL108 from "../assets/cards/sunkeeper/holy_strike.png";
import skL109 from "../assets/cards/sunkeeper/hammer_blow.png";
import skL110 from "../assets/cards/sunkeeper/defensive_stance.png";
import skL111 from "../assets/cards/sunkeeper/lay_on_hands.png";

// Lvl X cards
import skLX01 from "../assets/cards/sunkeeper/daybreak.png";
import skLX02 from "../assets/cards/sunkeeper/beacon_of_light.png";
import skLX03 from "../assets/cards/sunkeeper/glorious_bolt.png";

// Lvl 2 cards
import skL201 from "../assets/cards/sunkeeper/practical_plans.png";
import skL202 from "../assets/cards/sunkeeper/unwavering_mandate.png";

// Lvl 3 cards
import skL301 from "../assets/cards/sunkeeper/burning_flash.png";
import skL302 from "../assets/cards/sunkeeper/mobilizing_axiom.png";

// Lvl 4 cards
import skL401 from "../assets/cards/sunkeeper/righteous_strength.png";
import skL402 from "../assets/cards/sunkeeper/engulfing_radiance.png";

// Lvl 5 cards
import skL501 from "../assets/cards/sunkeeper/path_of_glory.png";
import skL502 from "../assets/cards/sunkeeper/scales_of_justice.png";

// Lvl 6 cards
import skL601 from "../assets/cards/sunkeeper/supportive_chant.png";
import skL602 from "../assets/cards/sunkeeper/illuminate_the_target.png";

// Lvl 7 cards
import skL701 from "../assets/cards/sunkeeper/weapon_of_purity.png";
import skL702 from "../assets/cards/sunkeeper/bright_aegis.png";

// Lvl 8 cards
import skL801 from "../assets/cards/sunkeeper/cleansing_force.png";
import skL802 from "../assets/cards/sunkeeper/inspiring_sanctity.png";

// Lvl 9 cards
import skL901 from "../assets/cards/sunkeeper/angelic_ascension.png";
import skL902 from "../assets/cards/sunkeeper/divine_intervention.png";

import sunIcon from "../assets/classes/sun-icon.png";
import sunPortrait from "../assets/classes/sun-portrait.jpg";

const SUN = {
  id: 3,
  className: "Sunkeeper",
  icon: sunIcon,
  portrait: sunPortrait,
  handSize: 11,
  color: "#ffff99",
  deck: [
    [
      { id: 186, lvl: "x", image: skLX01 },
      { id: 187, lvl: "x", image: skLX02 },
      { id: 188, lvl: "x", image: skLX03 },
    ],
    [
      { id: 175, lvl: "1", image: skL101 },
      { id: 176, lvl: "1", image: skL102 },
      { id: 177, lvl: "1", image: skL103 },
      { id: 178, lvl: "1", image: skL104 },
      { id: 179, lvl: "1", image: skL105 },
      { id: 180, lvl: "1", image: skL106 },
      { id: 181, lvl: "1", image: skL107 },
      { id: 182, lvl: "1", image: skL108 },
      { id: 183, lvl: "1", image: skL109 },
      { id: 184, lvl: "1", image: skL110 },
      { id: 185, lvl: "1", image: skL111 },
    ],
    [
      { id: 332, lvl: "2", image: skL201 },
      { id: 333, lvl: "2", image: skL202 },
    ],
    [
      { id: 334, lvl: "3", image: skL301 },
      { id: 335, lvl: "3", image: skL302 },
    ],
    [
      { id: 336, lvl: "4", image: skL401 },
      { id: 337, lvl: "4", image: skL402 },
    ],
    [
      { id: 338, lvl: "5", image: skL501 },
      { id: 339, lvl: "5", image: skL502 },
    ],
    [
      { id: 340, lvl: "6", image: skL601 },
      { id: 341, lvl: "6", image: skL602 },
    ],
    [
      { id: 342, lvl: "7", image: skL701 },
      { id: 343, lvl: "7", image: skL702 },
    ],
    [
      { id: 344, lvl: "8", image: skL801 },
      { id: 345, lvl: "8", image: skL802 },
    ],
    [
      { id: 346, lvl: "9", image: skL901 },
      { id: 347, lvl: "9", image: skL902 },
    ],
  ],
};

export default SUN;
