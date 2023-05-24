// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FBFAF5', // Set your desired background color here
        minHeight: '100vh', // Set the minimum height of the body to 100vh
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

      },
    },
  },
});

export default theme;