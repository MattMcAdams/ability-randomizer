import type { ability } from "@/data/";

/**
* @param pool - The pool of abilities to choose from
* @param omit - The names of abilities to omit from the pool
* @returns A filtered array of abilities
***/
export function filterAbilities(
  pool: ability[],
  omit?: string[],
  generation?: number
): ability[] {
  return pool.filter((ability) => {
    const isOmitted = omit ? omit.includes(ability.name) : false;
    const isCorrectGeneration = generation ? ability.generation <= generation : true;
    return !isOmitted && isCorrectGeneration;
  });
}
