interface iThemeConfig {
  default_dark: string;
  default_light: string;
  themes: string[];
}

const themeConfig: iThemeConfig = {
  default_dark: "dracula",
  default_light: "nord",
  themes: ["dracula", "nord"],
};

export default themeConfig;
