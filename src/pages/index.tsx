import type { ability } from "@/data";
import { abilityList } from "@/data";
import { useEffect, useState } from "react";
import { useSessionContext } from "@/context";
import { ThemeStyles } from "@/themes";
import { AbilityCard } from "@/components/AbilityCard";
import { ThemeSelector } from "@/components/ThemeSelector";
import {
  filterAbilities,
  rerollAbility,
  getAbilities,
} from "@/functions";

export default function Home() {
  const Session = useSessionContext();

  const [abilityPool, setAbilityPool] = useState<ability[]>(abilityList);
  const [abilityOfferings, setAbilityOfferings] = useState<ability[]>([]);

  const [generation, setGeneration] = useState(9);
  const [quantity, setQuantity] = useState(3);

  // Update the ability pool when the blacklist or generation changes
  useEffect(() => {
    setAbilityPool(filterAbilities(abilityList, Session.blacklist, generation));
  }, [Session.blacklist, generation]);

  // Generate initial ability offerings - do not auto-update
  useEffect(() => {
    setAbilityOfferings(getAbilities(quantity, abilityPool));
  }, []);

  function addToBlacklist(
    name: string,
  ) {
    Session.updateBlacklist([...Session.blacklist, name]);
    setAbilityOfferings(
      rerollAbility(name, abilityOfferings, abilityPool)
    );
  }

  function removeFromBlacklist(
    name: string,
  ) {
    const newBlacklist = Session.blacklist.filter((abilityName) => abilityName !== name);
    Session.updateBlacklist(newBlacklist);
  }

  function clearBlacklist() {
    Session.updateBlacklist([]);
  }

  function isAbilityBlacklisted(
    name: string,
  ) {
    return Session.blacklist.includes(name);
  }

  return (
    <main className="page">
      {Session.theme && <ThemeStyles theme={Session.theme} />}
      <div className="page__sidebar">
        <form
          className="controls layout--flow-half container"
          onSubmit={(e) => {
            e.preventDefault();
            setAbilityOfferings(getAbilities(quantity, abilityPool));
          }}
        >
          <div className="input">
            <label htmlFor="generation">Generation:</label>
            <select
              id="generation"
              value={generation}
              onChange={(e) => setGeneration(Number(e.target.value))}
            >
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <button type="submit">Reroll All</button>
        </form>
      </div>
      <div className="page__content container--wide">
        <h2 className="visually-hidden">Ability Offerings</h2>
        {abilityOfferings.find((a) => a.name === "ERROR") && (
          <section className="ability-offerings__error">
            <p>
              Unable to generate more abilities with the current settings.
              Please adjust the generation or clear the blacklist.
            </p>
          </section>
        )}
        <section className="ability-offerings layout--grid">
          {abilityOfferings.length >= 1 && (
            <>
              {abilityOfferings.map((ability) => {
                if (ability.name !== "ERROR") {
                  return (
                    <AbilityCard
                      key={ability.name}
                      name={ability.name}
                      description={ability.description}
                      onReroll={() =>
                        setAbilityOfferings(
                          rerollAbility(
                            ability.name,
                            abilityOfferings,
                            abilityPool
                          )
                        )
                      }
                      onBlacklist={() => addToBlacklist(ability.name)}
                    />
                  );
                }
              })}
            </>
          )}
        </section>
        <section className="ability-list layout--flow">
          <h2>Ability List</h2>
          <div className="table-wrapper">
            <table className="ability-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Gen</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filterAbilities(abilityList, [], generation).map((ability) => (
                  <tr
                    key={ability.name}
                    className={
                      isAbilityBlacklisted(ability.name) ? "blacklisted" : ""
                    }
                  >
                    <td>
                      {isAbilityBlacklisted(ability.name) ? (
                        <s>{ability.name}</s>
                      ) : (
                        ability.name
                      )}
                    </td>
                    <td>
                      {isAbilityBlacklisted(ability.name) ? (
                        <s>{ability.description}</s>
                      ) : (
                        ability.description
                      )}
                    </td>
                    <td>
                      {isAbilityBlacklisted(ability.name) ? (
                        <s>{ability.generation}</s>
                      ) : (
                        ability.generation
                      )}
                    </td>
                    <td>
                      {isAbilityBlacklisted(ability.name) ? (
                        <button
                          onClick={() => removeFromBlacklist(ability.name)}
                          aria-label="Remove from Blacklist"
                          title="Remove from Blacklist"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => addToBlacklist(ability.name)}
                          aria-label="Add to Blacklist"
                          title="Add to Blacklist"
                        >
                          <i className="fa-solid fa-ban"></i>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <div className="page__sidebar-after">
        <section className="blacklist container">
          <h2>Blacklist</h2>
          {Session.blacklist.length === 0 ? (
            <p>No abilities blacklisted.</p>
          ) : (
            <ul className="ability-blacklist">
              {Session.blacklist.map((name) => (
                <li key={name}>
                  {name}
                  <button
                    onClick={() => removeFromBlacklist(name)}
                    aria-label="Remove from blacklist"
                    title="Remove from blacklist"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {Session.blacklist.length > 0 && (
            <button onClick={clearBlacklist} className="clear-blacklist-btn">
              Clear Blacklist
            </button>
          )}
        </section>
        <ThemeSelector />
      </div>
    </main>
  );
}
