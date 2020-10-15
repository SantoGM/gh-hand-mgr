// Lvl 1 cards
import mtL101 from "../assets/cards/mindthief/submissive_affliction.png";
import mtL102 from "../assets/cards/mindthief/into_the_night.png";
import mtL103 from "../assets/cards/mindthief/fearsome_blade.png";
import mtL104 from "../assets/cards/mindthief/feedback_loop.png";
import mtL105 from "../assets/cards/mindthief/gnawing_horde.png";
import mtL106 from "../assets/cards/mindthief/the_minds_weakness.png";
import mtL107 from "../assets/cards/mindthief/parasitic_influence.png";
import mtL108 from "../assets/cards/mindthief/scurry.png";
import mtL109 from "../assets/cards/mindthief/perverse_edge.png";
import mtL110 from "../assets/cards/mindthief/empathetic_assault.png";

// Lvl X cards
import mtLX01 from "../assets/cards/mindthief/withering_claw.png";
import mtLX02 from "../assets/cards/mindthief/possession.png";
import mtLX03 from "../assets/cards/mindthief/frigid_apparition.png";

// Lvl 2 cards
import mtL201 from "../assets/cards/mindthief/wretched_creature.png";
import mtL202 from "../assets/cards/mindthief/hostile_takeover.png";

// Lvl 3 cards
import mtL301 from "../assets/cards/mindthief/brain_leech.png";
import mtL302 from "../assets/cards/mindthief/silent_scream.png";

// Lvl 4 cards
import mtL401 from "../assets/cards/mindthief/pilfer.png";
import mtL402 from "../assets/cards/mindthief/cranium_overload.png";

// Lvl 5 cards
import mtL501 from "../assets/cards/mindthief/mass_hysteria.png";
import mtL502 from "../assets/cards/mindthief/frozen_mind.png";

// Lvl 6 cards
import mtL601 from "../assets/cards/mindthief/corrupting_embrace.png";
import mtL602 from "../assets/cards/mindthief/dark_frenzy.png";

// Lvl 7 cards
import mtL701 from "../assets/cards/mindthief/vicious_blood.png";
import mtL702 from "../assets/cards/mindthief/psychic_projection.png";

// Lvl 8 cards
import mtL801 from "../assets/cards/mindthief/shared_nightmare.png";
import mtL802 from "../assets/cards/mindthief/domination.png";

// Lvl 9 cards
import mtL901 from "../assets/cards/mindthief/many_as_one.png";
import mtL902 from "../assets/cards/mindthief/phantasmal_killer.png";

import mindthiefIcon from "../assets/classes/mindthief-icon.png";
import mindthiefPortrait from "../assets/classes/mindthief-portrait.jpg";

const MINDTHIEF = {
  id: 6,
  className: "Mindthief",
  icon: mindthiefIcon,
  portrait: mindthiefPortrait,
  handSize: 10,
  color: "#0066cc",
  deck: [
    [
      { id: 156, lvl: "x", image: mtLX01 },
      { id: 157, lvl: "x", image: mtLX02 },
      { id: 158, lvl: "x", image: mtLX03 },
    ],
    [
      { id: 146, lvl: "1", image: mtL101 },
      { id: 147, lvl: "1", image: mtL102 },
      { id: 148, lvl: "1", image: mtL103 },
      { id: 149, lvl: "1", image: mtL104 },
      { id: 150, lvl: "1", image: mtL105 },
      { id: 151, lvl: "1", image: mtL106 },
      { id: 152, lvl: "1", image: mtL107 },
      { id: 153, lvl: "1", image: mtL108 },
      { id: 154, lvl: "1", image: mtL109 },
      { id: 155, lvl: "1", image: mtL110 },
    ],
    [
      { id: 159, lvl: "2", image: mtL201 },
      { id: 160, lvl: "2", image: mtL202 },
    ],
    [
      { id: 161, lvl: "3", image: mtL301 },
      { id: 162, lvl: "3", image: mtL302 },
    ],
    [
      { id: 163, lvl: "4", image: mtL401 },
      { id: 164, lvl: "4", image: mtL402 },
    ],
    [
      { id: 165, lvl: "5", image: mtL501 },
      { id: 166, lvl: "5", image: mtL502 },
    ],
    [
      { id: 167, lvl: "6", image: mtL601 },
      { id: 168, lvl: "6", image: mtL602 },
    ],
    [
      { id: 169, lvl: "7", image: mtL701 },
      { id: 170, lvl: "7", image: mtL702 },
    ],
    [
      { id: 171, lvl: "8", image: mtL801 },
      { id: 172, lvl: "8", image: mtL802 },
    ],
    [
      { id: 173, lvl: "9", image: mtL901 },
      { id: 174, lvl: "9", image: mtL902 },
    ],
  ],
};

export default MINDTHIEF;
