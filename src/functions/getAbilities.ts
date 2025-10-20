import type { ability } from "@/data/";
import { getAbility } from "./getAbility";
import { filterAbilities } from "./filterAbilities";

/**
* @param quantity - The number of abilities to generate
* @param pool - The pool of abilities to choose from
* @returns A random ability from the pool
***/
export function getAbilities(
  quantity: number,
  pool: ability[],
): ability[] {
  const offerings: ability[] = [];

  // Generate abilities for the requested quantity
  for (let i = 0; i < quantity; i++) {
    // Filter pool to exclude already chosen abilities
    const offeredAbilityNames = offerings.map((a) => a.name);
    const filteredPool = filterAbilities(pool, offeredAbilityNames);
    offerings.push(getAbility(filteredPool));
  }

  return offerings;
}
