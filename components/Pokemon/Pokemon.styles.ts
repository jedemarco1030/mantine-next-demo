import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 64,
    fontWeight: 700,
    letterSpacing: -2,
    textAlign: 'center',

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));
