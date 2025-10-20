# ability-randomizer

An ability randomizer for pokemon. I got this idea watching Patterz and GameBoyLuke on Youtube. I thought it would be a fun project to build, and it absolutely was.

It includes abilities up to 9th generation. You can select what generation game you're playing to only show abilities valid in that generation.

You can also select the number of abilities to roll and an error will display if the ability pool is smaller than the number to generate.

You can blacklist abilities you want to exclude, like wonder guard or ball fetch. The blacklist is saved in local storage and will persist across tabs / reloads.

There's a theming system inspired by some of my favorite pokemon. The theme is randomly chosen on load. If you select a theme manually, that preference will be saved to local storage and will persist across tabs / reloads. You can also create a custom theme.

## Contributing

Contributions welcome! Ability data is stored in `src/data/index.ts` if you'd like to update any ability names / descriptions / generation.

If you'd like to add a new theme, you can do so in `src/themes/index.tsx`. Take a look at how colors are inherited.

## Thanks

Huge thanks to [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability), [Smogon](https://www.smogon.com/dex/sv/abilities/), and [The Pokemon Database](https://pokemondb.net/sprites). This project would not be possible without them. Please go support their projects!

All Pokémon images, names, and abilities © 1995-2025 Nintendo/Game Freak
