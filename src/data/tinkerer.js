// Lvl 1 cards
import tkL101 from "../assets/cards/tinkerer/proximity_mine.png";
import tkL102 from "../assets/cards/tinkerer/harmless_contraption.png";
import tkL103 from "../assets/cards/tinkerer/flamethrower.png";
import tkL104 from "../assets/cards/tinkerer/hook_gun.png";
import tkL105 from "../assets/cards/tinkerer/ink_bomb.png";
import tkL106 from "../assets/cards/tinkerer/net_shooter.png";
import tkL107 from "../assets/cards/tinkerer/stun_shot.png";
import tkL108 from "../assets/cards/tinkerer/reinvigorating_elixir.png";
import tkL109 from "../assets/cards/tinkerer/restorative_mist.png";
import tkL110 from "../assets/cards/tinkerer/energizing_tonic.png";
import tkL111 from "../assets/cards/tinkerer/enhancement_field.png";
import tkL112 from "../assets/cards/tinkerer/toxic_bolt.png";

// Lvl X cards
import tkLX01 from "../assets/cards/tinkerer/reviving_shock.png";
import tkLX02 from "../assets/cards/tinkerer/volatile_concoction.png";
import tkLX03 from "../assets/cards/tinkerer/potent_potables.png";

// Lvl 2 cards
import tkL201 from "../assets/cards/tinkerer/stamina_booster.png";
import tkL202 from "../assets/cards/tinkerer/disorienting_flash.png";

// Lvl 3 cards
import tkL301 from "../assets/cards/tinkerer/tinkerers_tools.png";
import tkL302 from "../assets/cards/tinkerer/crank_bow.png";

// Lvl 4 cards
import tkL401 from "../assets/cards/tinkerer/dangerous_contraption.png";
import tkL402 from "../assets/cards/tinkerer/micro_bots.png";

// Lvl 5 cards
import tkL501 from "../assets/cards/tinkerer/noxious_vials.png";
import tkL502 from "../assets/cards/tinkerer/disintegration_beam.png";

// Lvl 6 cards
import tkL601 from "../assets/cards/tinkerer/gas_canister.png";
import tkL602 from "../assets/cards/tinkerer/auto_turret.png";

// Lvl 7 cards
import tkL701 from "../assets/cards/tinkerer/murderous_contraption.png";
import tkL702 from "../assets/cards/tinkerer/curative_aerosol.png";

// Lvl 8 cards
import tkL801 from "../assets/cards/tinkerer/jet_propulsion.png";
import tkL802 from "../assets/cards/tinkerer/harsh_stimulants.png";

// Lvl 9 cards
import tkL901 from "../assets/cards/tinkerer/lethal_injection.png";
import tkL902 from "../assets/cards/tinkerer/chimeric_formula.png";

import tinkererIcon from "../assets/classes/tinkerer-icon.png";
import tinkererPortrait from "../assets/classes/tinkerer-portrait.jpg";

const TINKERER = {
  id: 9,
  className: "tinkerer",
  icon: tinkererIcon,
  portrait: tinkererPortrait,
  handSize: 12,
  color: "#8a553b",
  deck: [
    [
      { id: 42, lvl: "x", image: tkLX01 },
      { id: 43, lvl: "x", image: tkLX02 },
      { id: 44, lvl: "x", image: tkLX03 },
    ],
    [
      { id: 30, lvl: "1", image: tkL101 },
      { id: 31, lvl: "1", image: tkL102 },
      { id: 32, lvl: "1", image: tkL103 },
      { id: 33, lvl: "1", image: tkL104 },
      { id: 34, lvl: "1", image: tkL105 },
      { id: 35, lvl: "1", image: tkL106 },
      { id: 36, lvl: "1", image: tkL107 },
      { id: 37, lvl: "1", image: tkL108 },
      { id: 38, lvl: "1", image: tkL109 },
      { id: 39, lvl: "1", image: tkL110 },
      { id: 40, lvl: "1", image: tkL111 },
      { id: 41, lvl: "1", image: tkL112 },
    ],
    [
      { id: 45, lvl: "2", image: tkL201 },
      { id: 46, lvl: "2", image: tkL202 },
    ],
    [
      { id: 47, lvl: "3", image: tkL301 },
      { id: 48, lvl: "3", image: tkL302 },
    ],
    [
      { id: 49, lvl: "4", image: tkL401 },
      { id: 50, lvl: "4", image: tkL402 },
    ],
    [
      { id: 51, lvl: "5", image: tkL501 },
      { id: 52, lvl: "5", image: tkL502 },
    ],
    [
      { id: 53, lvl: "6", image: tkL601 },
      { id: 54, lvl: "6", image: tkL602 },
    ],
    [
      { id: 55, lvl: "7", image: tkL701 },
      { id: 56, lvl: "7", image: tkL702 },
    ],
    [
      { id: 57, lvl: "8", image: tkL801 },
      { id: 58, lvl: "8", image: tkL802 },
    ],
    [
      { id: 59, lvl: "9", image: tkL901 },
      { id: 60, lvl: "9", image: tkL902 },
    ],
  ],
};

export default TINKERER;
