// Lvl 1 cards
import scL101 from "../assets/cards/scoundrel/single_out.png";
import scL102 from "../assets/cards/scoundrel/flanking_strike.png";
import scL103 from "../assets/cards/scoundrel/smoke_bomb.png";
import scL104 from "../assets/cards/scoundrel/backstab.png";
import scL105 from "../assets/cards/scoundrel/thiefs_knack.png";
import scL106 from "../assets/cards/scoundrel/venom_shiv.png";
import scL107 from "../assets/cards/scoundrel/throwing_knives.png";
import scL108 from "../assets/cards/scoundrel/quick_hands.png";
import scL109 from "../assets/cards/scoundrel/special_mixture.png";

// Lvl X cards
import scLX01 from "../assets/cards/scoundrel/sinister_opportunity.png";
import scLX02 from "../assets/cards/scoundrel/tricksters_reversal.png";
import scLX03 from "../assets/cards/scoundrel/swift_bow.png";

// Lvl 2 cards
import scL201 from "../assets/cards/scoundrel/open_wound.png";
import scL202 from "../assets/cards/scoundrel/flintlock.png";

// Lvl 3 cards
import scL301 from "../assets/cards/scoundrel/hidden_daggers.png";
import scL302 from "../assets/cards/scoundrel/duelists_advance.png";

// Lvl 4 cards
import scL401 from "../assets/cards/scoundrel/flurry_of_blades.png";
import scL402 from "../assets/cards/scoundrel/gruesome_advantage.png";

// Lvl 5 cards
import scL501 from "../assets/cards/scoundrel/cull_the_weak.png";
import scL502 from "../assets/cards/scoundrel/visage_of_the_inevitable.png";

// Lvl 6 cards
import scL601 from "../assets/cards/scoundrel/crippling_poison.png";
import scL602 from "../assets/cards/scoundrel/burning_oil.png";

// Lvl 7 cards
import scL701 from "../assets/cards/scoundrel/stick_to_the_shadows.png";
import scL702 from "../assets/cards/scoundrel/spring_the_trap.png";

// Lvl 8 cards
import scL801 from "../assets/cards/scoundrel/stiletto_storm.png";
import scL802 from "../assets/cards/scoundrel/pains_end.png";

// Lvl 9 cards
import scL901 from "../assets/cards/scoundrel/long_con.png";
import scL902 from "../assets/cards/scoundrel/watch_it_burn.png";

import sunIcon from "../assets/classes/scoundrel-icon.png";
import sunPortrait from "../assets/classes/scoundrel-portrait.jpg";

const SCOUNDREL = {
  id: 7,
  className: "scoundrel",
  icon: sunIcon,
  portrait: sunPortrait,
  handSize: 9,
  color: "#8fe800",
  deck: [
    [
      { id: 97, lvl: "x", image: scLX01 },
      { id: 98, lvl: "x", image: scLX02 },
      { id: 99, lvl: "x", image: scLX03 },
    ],
    [
      { id: 88, lvl: "1", image: scL101 },
      { id: 89, lvl: "1", image: scL102 },
      { id: 90, lvl: "1", image: scL103 },
      { id: 90, lvl: "1", image: scL104 },
      { id: 92, lvl: "1", image: scL105 },
      { id: 93, lvl: "1", image: scL106 },
      { id: 94, lvl: "1", image: scL107 },
      { id: 95, lvl: "1", image: scL108 },
      { id: 96, lvl: "1", image: scL109 },
    ],
    [
      { id: 100, lvl: "2", image: scL201 },
      { id: 101, lvl: "2", image: scL202 },
    ],
    [
      { id: 102, lvl: "3", image: scL301 },
      { id: 103, lvl: "3", image: scL302 },
    ],
    [
      { id: 104, lvl: "4", image: scL401 },
      { id: 105, lvl: "4", image: scL402 },
    ],
    [
      { id: 106, lvl: "5", image: scL501 },
      { id: 107, lvl: "5", image: scL502 },
    ],
    [
      { id: 108, lvl: "6", image: scL601 },
      { id: 109, lvl: "6", image: scL602 },
    ],
    [
      { id: 110, lvl: "7", image: scL701 },
      { id: 111, lvl: "7", image: scL702 },
    ],
    [
      { id: 112, lvl: "8", image: scL801 },
      { id: 113, lvl: "8", image: scL802 },
    ],
    [
      { id: 114, lvl: "9", image: scL901 },
      { id: 115, lvl: "9", image: scL902 },
    ],
  ],
};

export default SCOUNDREL;
