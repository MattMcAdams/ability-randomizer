import type { ability } from "@/data/";
import { getAbility } from "./getAbility";
import { filterAbilities } from "./filterAbilities";

/**
* @param name - The name of the ability to reroll
* @param offerings - The current ability offerings
* @param pool - The pool of abilities to choose from
* @returns A random ability from the pool
**/
export function rerollAbility(
  name: string,
  offerings: ability[],
  pool: ability[]
) {
  // Filter pool to exclude already chosen abilities
  const offeredAbilityNames = offerings.map((a) => a.name);
  const filteredPool = filterAbilities(pool, offeredAbilityNames);
  // Map through offerings and replace the rerolled ability
  const newOfferings = offerings.map((ability) => {
    if (ability.name === name) {
      return getAbility(filteredPool);
    } else {
      return ability;
    }
  });
  return newOfferings;
}
