import themeConfig from "@src/config/theme";
import { createContext } from "react";

export interface iThemeContext {
  theme: string;
  setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<iThemeContext>({
  theme: themeConfig.default,
  setTheme: () => {},
});
