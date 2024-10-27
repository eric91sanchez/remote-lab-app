import * as React from 'react';

import { Stack, Button } from '@mui/material';

import NextLink from 'next/link';
import theme from '@/theme';

function SideBar() {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      spacing={2}
      sx={{
        background: theme.palette.background.paper,
        height: '100%',
        width: '100%',
        p: 2,
        borderRadius: 2,
      }}
    >
      <Button variant="contained" component={NextLink} href="/" fullWidth>
        Go to the home page
      </Button>
      <Button variant="contained" component={NextLink} href="/" fullWidth>
        Go to the home page
      </Button>
      <Button variant="contained" component={NextLink} href="/" fullWidth>
        Go to the home page
      </Button>
      <Button variant="contained" component={NextLink} href="/" fullWidth>
        Go to the home page
      </Button>
    </Stack>
  );
}

export default SideBar;
