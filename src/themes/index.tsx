export type theme = {
  name: string;
  img: string;
  colors: {
    text?: string;
    background?: string;
    border?: string;
    inputText?: string;
    inputBackground?: string;
    inputBorder?: string;
    action?: string;
    actionBorder?: string;
    actionHover?: string;
    tableHover?: string;
    tableBorder?: string;
    tableHeadingText?: string;
    tableHeadingBackground?: string;
    abilityText?: string;
    abilityBackground?: string;
    abilityBorder?: string;
    abilityShadow?: string;
    buddyBackground?: string;
  };
};

type ThemeColorKey = keyof theme["colors"];

const themeDefaults: theme["colors"] = {
  text: "black",
  background: "white",
  border: "var(--color_action)",
  inputText: "var(--color_ability-text)",
  inputBackground: "var(--color_ability-background)",
  inputBorder: "var(--color_ability-border)",
  action: "royalblue",
  actionHover: "midnightblue",
  actionBorder: "var(--color_action-hover)",
  tableBorder: "var(--color_border)",
  tableHeadingText: "var(--color_background)",
  tableHeadingBackground: "var(--color_text)",
  tableHover: "var(--color_ability-background)",
  abilityText: "var(--color_text)",
  abilityBackground: "ghostwhite",
  abilityBorder: "var(--color_border)",
  abilityShadow: "var(--color_action)",
  buddyBackground: "var(--color_ability-background)"
};

export function ThemeStyles({ theme }:{ theme: theme }) {
  const finalColors = { ...themeDefaults, ...theme.colors };
  const themeVariableMap: Array<[ThemeColorKey, string]> = [
    ["text", "--color_text"],
    ["background", "--color_background"],
    ["border", "--color_border"],
    ["inputText", "--color_input-text"],
    ["inputBackground", "--color_input-background"],
    ["inputBorder", "--color_input-border"],
    ["action", "--color_action"],
    ["actionHover", "--color_action-hover"],
    ["actionBorder", "--color_action-border"],
    ["tableHover", "--color_table-hover"],
    ["tableBorder", "--color_table-border"],
    ["tableHeadingText", "--color_table-heading-text"],
    ["tableHeadingBackground", "--color_table-heading-background"],
    ["abilityText", "--color_ability-text"],
    ["abilityBackground", "--color_ability-background"],
    ["abilityBorder", "--color_ability-border"],
    ["abilityShadow", "--color_ability-shadow"],
    ["buddyBackground", "--color_buddy-background"],
  ];
  const themeVariables = themeVariableMap.map(([key, variable]) => {
    return `${variable}: ${finalColors[key]};`;
  }).join("\n");

  return (
    <style>
      {`body {
        ${themeVariables}
      }`}
    </style>
  )
}

// Sprites should be from https://pokemondb.net/sprites - 5th gen only

export const themes: theme[] = [
  {
    name: "Absol",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif",
    colors: {
      text: "#3f3f43",
      action: "#444c6d",
      actionHover: "#626986",
      actionBorder: "var(--color_action)",
      abilityBorder: "var(--color_action)",
      tableHeadingBackground: "var(--color_action)",
    },
  },
  {
    name: "Riolu",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/riolu.gif",
    colors: {
      text: "#2d373d",
      background: "ghostwhite",
      tableHover: "#DCF2FF",
      border: "#009FFF",
      action: "#17599D",
      actionHover: "#181D20",
      actionBorder: "var(--color_border)",
      inputBackground: "transparent",
      inputText: "var(--color_text)",
      abilityBackground: "var(--color_text)",
      abilityText: "white",
      abilityShadow: "var(--color_border)",
      buddyBackground: "transparent",
    },
  },
  {
    name: "Eevee",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif",
    colors: {
      text: "#492B1F",
      background: "#FFFAF1",
      border: "var(--color_action)",
      action: "#905640",
      actionHover: "var(--color_ability-border)",
      abilityBorder: "var(--color_text)",
      abilityBackground: "#FFF8E9",
    },
  },
  {
    name: "Furret",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/furret.gif",
    colors: {
      text: "#492B1F",
      background: "#FFFAF1",
      border: "var(--color_action)",
      action: "#905640",
      actionHover: "var(--color_ability-border)",
      abilityBorder: "var(--color_text)",
      abilityBackground: "#FFF8E9",
    },
  },
  {
    name: "Zangoose",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/zangoose.gif",
    colors: {
      text: "#292E2E",
      background: "#F9F9FF",
      action: "#DA2E53",
      actionHover: "#BC2142",
      actionBorder: "var(--color_border)",
      abilityBackground: "#efefff",
    },
  },
  {
    name: "Milotic",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/milotic.gif",
    colors: {
      text: "#362e22",
      background: "#FFFAF1",
      border: "#492B1F",
      abilityBackground: "#FFF3DB",
      action: "#CB4858",
      actionHover: "#BD2F40",
      actionBorder: "var(--color_border)",
      tableHeadingBackground: "#0C7EA7",
      tableHover: "#CCF1FF",
      tableBorder: "var(--color_table-heading-background)",
      abilityShadow: "var(--color_table-heading-background)",
    },
  },
  {
    name: "Growlithe",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif",
    colors: {
      text: "black",
      border: "var(--color_text)",
      background: "#FFFAF1",
      abilityBackground: "#FFF8E9",
      action: "#CD4D05",
      actionHover: "#9F3700",
      actionBorder: "var(--color_input-border)",
      abilityBorder: "var(--color_action)",
      tableHeadingBackground: "var(--color_action-hover)",
    },
  },
  {
    name: "Arcanine",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif",
    colors: {
      text: "black",
      border: "var(--color_text)",
      background: "#FFFAF1",
      abilityBackground: "#FFF8E9",
      action: "#CD4D05",
      actionHover: "#9F3700",
      actionBorder: "var(--color_input-border)",
      abilityBorder: "var(--color_action)",
      tableHeadingBackground: "var(--color_action-hover)",
    },
  },
  {
    name: "Wooper",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/wooper.gif",
    colors: {
      text: "#5D2159",
      background: "#F7FBFF",
      action: "#2576D1",
      actionHover: "#1A5699",
      abilityBackground: "#EAF4FF",
      abilityBorder: "var(--color_action-hover)",
      abilityShadow: "var(--color_border)",
      border: "#B74BAF",
    },
  },
  {
    name: "Spheal",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/spheal.gif",
    colors: {
      text: "#082631",
      action: "#4a6bbd",
      actionHover: "#3D599F",
      abilityBackground: "#F5EFE2",
      abilityBorder: "#f7dead",
      tableHover: "#F5F4F4",
      buddyBackground: "var(--color_table-hover)",
    },
  },
  {
    name: "Buizel",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/buizel.gif",
    colors: {
      background: "#FFFFF7",
      border: "#1E7BBB",
      action: "#C05700",
      actionHover: "var(--color_action)",
      abilityBackground: "#FFFFE3",
      abilityBorder: "var(--color_action)",
      tableHeadingBackground: "var(--color_border)",
    },
  },
  {
    name: "Gardevoir",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif",
    colors: {
      text: "#335938",
      background: "#F9F9FF",
      border: "#C9446B",
      tableBorder: "#9ca8c9",
      action: "var(--color_text)",
      actionHover: "#172E1A",
      actionBorder: "#73bd73",
      abilityBackground: "#efefff",
      abilityBorder: "#cecee6",
      abilityShadow: "#9ca8c9",
      tableHover: "#F2FFEC",
    },
  },
  {
    name: "Shinx",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/shinx.gif",
    colors: {
      text: "#2d2d3d",
      border: "#ffe65a",
      action: "#4D77B6",
      actionHover: "#3B5D8E",
      actionBorder: "var(--color_ability-border)",
      abilityShadow: "var(--color_border)",
      abilityBorder: "#5999F7",
    },
  },
  {
    name: "Flygon",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/flygon.gif",
    colors: {
      text: "#2E4F33",
      background: "#F4FFE3",
      border: "var(--color_action)",
      action: "#D13F50",
      actionHover: "#AB2938",
      actionBorder: "var(--color_border)",
      inputBackground: "#E8FFC2",
      abilityBackground: "#CAEBCE",
      abilityBorder: "var(--color_action)",
      abilityShadow: "#6faa77",
      tableBorder: "var(--color_ability-shadow)",
      tableHover: "#CAEBCE",
      buddyBackground: "var(--color_input-background)",
    },
  },
];

/*
{
  name: "Lapras",
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif",
  colors: {
    text: "#082631",
    action: "#147ABD",
    actionHover: "#0F5F94",
    abilityBackground: "#F5F4F4",
    abilityBorder: "#E1E1E1",
    inputBackground: "#F5EFE2",
    inputBorder: "#f7dead",
    tableHover: "var(--color_input-background)",
  },
},
{
  name: "Luxray",
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/luxray.gif",
  colors: {
    border: "#31496D",
    background: "#1A1A23",
    inputBorder: "#7aa4e4",
    text: "#EFEFEF",
    action: "#7aa4e4",
    actionHover: "var(--color_action)",
    actionBorder: "var(--color_ability-border)",
    abilityBackground: "#31496D",
    abilityBorder: "var(--color_action)",
    tableHeadingBackground: "#ffe65a",
    buddyBackground: "#0D0D11",
  },
},
{
  name: "Flygon",
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/flygon.gif",
  colors: {
    text: "#2E4F33",
    background: "#F4FFE3",
    border: "var(--color_action)",
    action: "#D13F50",
    actionHover: "#AB2938",
    actionBorder: "var(--color_border)",
    inputBackground: "#E8FFC2",
    abilityBackground: "#CAEBCE",
    abilityBorder: "var(--color_action)",
    abilityShadow: "#6faa77",
    tableBorder: "var(--color_ability-shadow)",
    tableHover: "#CAEBCE",
    buddyBackground: "var(--color_input-background)",
  },
},
{
  name: "Zoroark",
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/zoroark.gif",
  colors: {
    text: "#D1D1D9",
    border: "#ad1042",
    background: "#141418",
    abilityBackground: "#293142",
    action: "#FA0050",
    actionHover: "#CC0041",
    actionBorder: "var(--color_action)",
    abilityShadow: "var(--color_border)",
    tableHeadingBackground: "var(--color_ability-background)",
    tableHeadingText: "var(--color_text)",
  },
},
{
  name: "Lucario",
  img: "https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif",
  colors: {
    text: "#2d373d",
    background: "ghostwhite",
    tableHover: "#FFFFE9",
    border: "#77774e",
    action: "var(--color_text)",
    actionHover: "#181D20",
    abilityBorder: "var(--color_ability-shadow)",
    inputBorder: "var(--color_action-hover)",
    inputBackground: "transparent",
    inputText: "vat(--color_text)",
    abilityBackground: "#17599D",
    abilityText: "white",
    abilityShadow: "#009FFF",
    buddyBackground: "var(--color_table-hover)",
  },
},
*/
