interface iThemeConfig {
  default: string
  themes: string[]
};

const themeConfig: iThemeConfig = {
  default: 'dracula',
  themes: ['dracula', 'pastel']
};

export default themeConfig;
