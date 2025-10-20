import type { theme } from "@/themes";
import { themes } from "@/themes";
import { useSessionContext } from "@/context";

export const ThemeSelector = () => {
  const Session = useSessionContext();

  const onThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const foundTheme = themes.find(
      (t) => t.name === e.target.value
    );
    if (foundTheme) {
      Session.updateTheme(foundTheme);
    } else if (e.target.value === "Custom") {
      const customTheme = Session.getCustomTheme();
      if (customTheme) {
        Session.updateTheme(customTheme);
      } else {
        Session.updateCustomTheme({
          name: "Custom",
          img: "",
          colors: {},
        });
      }
    }
  };

  const updateCustomTheme = (
    image?: string,
    colors?: theme["colors"],
  ) => {
    if (Session.theme && Session.theme.name === "Custom") {
      if (image !== undefined) {
        Session.updateCustomTheme({
          name: "Custom",
          img: image,
          colors: Session.theme.colors,
        });
      };
      if (colors !== undefined) {
        Session.updateCustomTheme({
          name: "Custom",
          img: Session.theme.img,
          colors: { ...Session.theme.colors, ...colors },
        });
      };
    };
  };

  return (
    <section className="theme-selector container">
      <div className="lil-buddy">
        {Session.theme && <img src={Session.theme.img} alt="" />}
      </div>
      <p>Theme:</p>
      <div className="buddy-controls">
        <select
          onChange={onThemeChange}
          value={Session?.theme ? Session.theme.name : ""}
          className="lil-buddy__select"
        >
          {themes.map((theme) => (
            <option key={theme.name} value={theme.name}>
              {theme.name}
            </option>
          ))}
          <option value="Custom">Custom</option>
        </select>
        <button onClick={Session.resetTheme} aria-label="Random" title="Random">
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
      {Session.theme && Session.theme.name === "Custom" && (
        <details className="custom-theme-controls">
          <summary>Custom Theme Settings</summary>
          <div className="input">
            <label htmlFor="custom-img">Image URL:</label>
            <input
              type="url"
              id="custom-img"
              value={Session.theme.name === "Custom" ? Session.theme.img : ""}
              onChange={(e) => updateCustomTheme(e.target.value, undefined)}
            />
          </div>
          <div className="input">
            <label htmlFor="custom-text-color">Text Color:</label>
            <input
              type="text"
              id="custom-text-color"
              value={
                Session.theme.name === "Custom" ? Session.theme.colors.text : ""
              }
              onChange={(e) =>
                updateCustomTheme( undefined, { text: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-background-color">Background Color:</label>
            <input
              type="text"
              id="custom-background-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.background
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, { background: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-border-color">Border Color:</label>
            <input
              type="text"
              id="custom-border-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.border
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, { border: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-input-text-color">Input Text Color:</label>
            <input
              type="text"
              id="custom-input-text-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.inputText
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, { inputText: e.target.value })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-input-background-color">
              Input Background Color:
            </label>
            <input
              type="text"
              id="custom-input-background-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.inputBackground
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  inputBackground: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-input-border-color">
              Input Border Color:
            </label>
            <input
              type="text"
              id="custom-input-border-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.inputBorder
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  inputBorder: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-action-color">Action Color:</label>
            <input
              type="text"
              id="custom-action-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.action
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  action: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-action-hover-color">
              Action Hover Color:
            </label>
            <input
              type="text"
              id="custom-action-hover-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.actionHover
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  actionHover: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-action-border-color">
              Action Border Color:
            </label>
            <input
              type="text"
              id="custom-action-border-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.actionBorder
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  actionBorder: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-table-hover-color">Table Hover Color:</label>
            <input
              type="text"
              id="custom-table-hover-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.tableHover
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  tableHover: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-table-border-color">
              Table Border Color:
            </label>
            <input
              type="text"
              id="custom-table-border-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.tableBorder
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  tableBorder: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-table-heading-text-color">
              Table Heading Text Color:
            </label>
            <input
              type="text"
              id="custom-table-heading-text-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.tableHeadingText
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  tableHeadingText: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-table-heading-background-color">
              Table Heading Background Color:
            </label>
            <input
              type="text"
              id="custom-table-heading-background-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.tableHeadingBackground
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  tableHeadingBackground: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-ability-text-color">
              Ability Text Color:
            </label>
            <input
              type="text"
              id="custom-ability-text-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.abilityText
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  abilityText: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-ability-background-color">
              Ability Background Color:
            </label>
            <input
              type="text"
              id="custom-ability-background-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.abilityBackground
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  abilityBackground: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-ability-border-color">
              Ability Border Color:
            </label>
            <input
              type="text"
              id="custom-ability-border-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.abilityBorder
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  abilityBorder: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-ability-shadow-color">
              Ability Shadow Color:
            </label>
            <input
              type="text"
              id="custom-ability-shadow-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.abilityShadow
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  abilityShadow: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label htmlFor="custom-buddy-background-color">
              Buddy Background Color:
            </label>
            <input
              type="text"
              id="custom-buddy-background-color"
              value={
                Session.theme.name === "Custom"
                  ? Session.theme.colors.buddyBackground
                  : ""
              }
              onChange={(e) =>
                updateCustomTheme(undefined, {
                  buddyBackground: e.target.value,
                })
              }
            />
          </div>
        </details>
      )}
    </section>
  );
}

//             {Session.theme && Session.theme.name === "Custom" && (
//               <div className="custom-theme-inputs">
//                 <div className="input">
//                   <label htmlFor="custom-img">Image URL:</label>
//                   <input
//                     type="text"
//                     id="custom-img"
//                     value={
//                       Session.theme.name === "Custom" ? Session.theme.img : ""
//                     }
//                     onChange={(e) =>
//                       Session.updateCustomTheme({
//                         name: "Custom",
//                         img: e.target.value,
//                         colors: Session.theme?.colors
//                           ? Session.theme.colors
//                           : {},
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="input">
//                   <label htmlFor="custom-text-color">Text Color:</label>
//                   <input
//                     type="text"
//                     id="custom-text-color"
//                     value={
//                       Session.theme.name === "Custom"
//                         ? Session.theme.colors.text
//                         : ""
//                     }
//                     onChange={(e) =>
//                       Session.updateCustomTheme({
//                         name: "Custom",
//                         img: Session.theme?.img ? Session.theme.img : "",
//                         colors: {
//                           ...Session.theme?.colors,
//                           text: e.target.value,
//                         },
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//             )}
//           </section>
// }
