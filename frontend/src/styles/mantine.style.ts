import { MantineThemeOverride } from '@mantine/core';

export default <MantineThemeOverride>{
  colors: {
    victoria: [
      '#eff2ff',
      '#dfe2f2',
      '#bdc2de',
      '#99a0ca',
      '#7a84b9',
      '#6672af',
      '#5c69ac',
      '#4c5897',
      '#424e88',
      '#36437a',
    ],
  },
  fontFamily: '"Noto Sans TC","Noto Sans SC","sans-serif"',
  primaryColor: 'victoria',
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
