import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import type { theme } from "@/themes";
import { themes } from "@/themes";

interface Props {
  children: React.ReactNode;
}

type context = {
  theme: theme | null;
  blacklist: string[];
  updateBlacklist: (blacklist: string[]) => void;
  updateTheme: (theme: theme) => void;
  resetTheme: () => void;
  getCustomTheme: () => theme | null;
  updateCustomTheme: (theme: theme) => void;
}

const Context = createContext<context>({
  theme: null,
  blacklist: [],
  updateTheme: () => {},
  updateBlacklist: () => {},
  resetTheme: () => {},
  getCustomTheme: () => null,
  updateCustomTheme: () => {},
});

const Provider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<theme | null>(null);
  const [blacklist, setBlacklist] = useState<string[]>([]);

  function randomTheme() {
    return themes[Math.floor(Math.random() * themes.length)];
  }

  function updateTheme(newTheme: theme) {
    setTheme(newTheme);
    saveSettings(newTheme, blacklist);
  }

  function resetTheme() {
    setTheme(randomTheme());
    saveSettings(null, blacklist);
  }

  function updateBlacklist(newBlacklist: string[]) {
    setBlacklist(newBlacklist);
    saveSettings(theme, newBlacklist);
  }

  function getCustomTheme() {
    const customTheme = localStorage.getItem("customTheme");
    return customTheme ? JSON.parse(customTheme) : null;
  }

  function updateCustomTheme(newTheme: theme) {
    localStorage.setItem("customTheme", JSON.stringify(newTheme, undefined, 4));
    setTheme(newTheme);
    saveSettings(newTheme, blacklist);
  }

  /* =================================================================
  /* SECTION Save settings to local storage
  ================================================================= */

  function saveSettings(theme: theme | null, blacklist: string[]) {
    console.log("Saving settings to local storage:", { theme, blacklist });
    const settings = { theme: theme, blacklist: blacklist };
    localStorage.setItem(
      "settings",
      JSON.stringify(settings, undefined, 4)
    );
  }

  /* !SECTION Save settings to local storage */
  /* =================================================================
  /* SECTION Actions on load
  ================================================================= */

  useEffect(() => {
    const savedSettings = localStorage.getItem("settings");
    if (savedSettings) {
      const { theme, blacklist } = JSON.parse(savedSettings);
      if (blacklist) {
        setBlacklist(blacklist);
      }
      if (theme) {
        setTheme(theme);
      } else {
        setTheme(randomTheme());
      }
    } else {
      setTheme(randomTheme());
    }
  }, []);

  /* !SECTION Actions on load */

  return (
    <Context.Provider
      value={{
        theme,
        blacklist,
        updateBlacklist,
        updateTheme,
        resetTheme,
        getCustomTheme,
        updateCustomTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSessionContext = () => useContext(Context);
export default Provider;
