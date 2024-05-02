import themeConfig from "@src/config/theme";
import { createContext } from "react";

export const ThemeContext = createContext<String>(themeConfig.default);