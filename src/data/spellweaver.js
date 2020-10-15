// Lvl 1 cards
import swL101 from "../assets/cards/spellweaver/fire_orbs.png";
import swL102 from "../assets/cards/spellweaver/impaling_eruption.png";
import swL103 from "../assets/cards/spellweaver/reviving_ether.png";
import swL104 from "../assets/cards/spellweaver/freezing_nova.png";
import swL105 from "../assets/cards/spellweaver/mana_bolt.png";
import swL106 from "../assets/cards/spellweaver/frost_armor.png";
import swL107 from "../assets/cards/spellweaver/flame_strike.png";
import swL108 from "../assets/cards/spellweaver/ride_the_wind.png";

// Lvl X cards
import swLX01 from "../assets/cards/spellweaver/crackling_air.png";
import swLX02 from "../assets/cards/spellweaver/hardened_spikes.png";
import swLX03 from "../assets/cards/spellweaver/aid_from_the_ether.png";

// Lvl 2 cards
import swL201 from "../assets/cards/spellweaver/flashing_burst.png";
import swL202 from "../assets/cards/spellweaver/icy_blast.png";

// Lvl 3 cards
import swL301 from "../assets/cards/spellweaver/cold_fire.png";
import swL302 from "../assets/cards/spellweaver/elemental_aid.png";

// Lvl 4 cards
import swL401 from "../assets/cards/spellweaver/spirit_of_doom.png";
import swL402 from "../assets/cards/spellweaver/forked_beam.png";

// Lvl 5 cards
import swL501 from "../assets/cards/spellweaver/chromatic_explosion.png";
import swL502 from "../assets/cards/spellweaver/engulfed_in_flames.png";

// Lvl 6 cards
import swL601 from "../assets/cards/spellweaver/living_torch.png";
import swL602 from "../assets/cards/spellweaver/frozen_night.png";

// Lvl 7 cards
import swL701 from "../assets/cards/spellweaver/twin_restoration.png";
import swL702 from "../assets/cards/spellweaver/stone_fists.png";

// Lvl 8 cards
import swL801 from "../assets/cards/spellweaver/zephyr_wings.png";
import swL802 from "../assets/cards/spellweaver/cold_front.png";

// Lvl 9 cards
import swL901 from "../assets/cards/spellweaver/black_hole.png";
import swL902 from "../assets/cards/spellweaver/inferno.png";

import sunIcon from "../assets/classes/spellweaver-icon.png";
import sunPortrait from "../assets/classes/spellweaver-portrait.jpg";

const SPELLWEAVER = {
  id: 3,
  className: "spellweaver",
  icon: sunIcon,
  portrait: sunPortrait,
  handSize: 8,
  color: "#992de0",
  deck: [
    [
      { id: 69, lvl: "x", image: swLX01 },
      { id: 70, lvl: "x", image: swLX02 },
      { id: 71, lvl: "x", image: swLX03 },
    ],
    [
      { id: 61, lvl: "1", image: swL101 },
      { id: 62, lvl: "1", image: swL102 },
      { id: 63, lvl: "1", image: swL103 },
      { id: 64, lvl: "1", image: swL104 },
      { id: 65, lvl: "1", image: swL105 },
      { id: 66, lvl: "1", image: swL106 },
      { id: 67, lvl: "1", image: swL107 },
      { id: 68, lvl: "1", image: swL108 },
    ],
    [
      { id: 72, lvl: "2", image: swL201 },
      { id: 73, lvl: "2", image: swL202 },
    ],
    [
      { id: 74, lvl: "3", image: swL301 },
      { id: 75, lvl: "3", image: swL302 },
    ],
    [
      { id: 76, lvl: "4", image: swL401 },
      { id: 77, lvl: "4", image: swL402 },
    ],
    [
      { id: 78, lvl: "5", image: swL501 },
      { id: 79, lvl: "5", image: swL502 },
    ],
    [
      { id: 80, lvl: "6", image: swL601 },
      { id: 81, lvl: "6", image: swL602 },
    ],
    [
      { id: 82, lvl: "7", image: swL701 },
      { id: 83, lvl: "7", image: swL702 },
    ],
    [
      { id: 84, lvl: "8", image: swL801 },
      { id: 85, lvl: "8", image: swL802 },
    ],
    [
      { id: 86, lvl: "9", image: swL901 },
      { id: 87, lvl: "9", image: swL902 },
    ],
  ],
};

export default SPELLWEAVER;
