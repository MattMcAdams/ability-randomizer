import type { ability } from "@/data/";

/**
* @param pool - The pool of abilities to choose from
* @returns A random ability from the pool
***/
export function getAbility(
  pool: ability[],
): ability {
  if (pool.length > 1) {
    // Return random ability if there is more than one option
    return pool[Math.floor(Math.random() * pool.length)];
  } else if (pool.length === 1) {
    // Return the only ability if there is exactly one option
    return pool[0];
  } else {
    // Return an error ability if there are no options
    return { name: "ERROR", generation: 0, description: "Ability pool exhausted." };
  }
}
