interface iThemeConfig {
  default: string;
  themes: string[];
}

const themeConfig: iThemeConfig = {
  default: "dracula",
  themes: ["dracula", "nord"],
};

export default themeConfig;
