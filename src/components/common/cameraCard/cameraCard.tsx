import * as React from 'react';

import { Stack, Typography } from '@mui/material';

import theme from '@/theme';

export interface CameraCardProps { }

function CameraCard({ }: CameraCardProps) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        background: theme.palette.background.paper,
        height: '100%',
        width: '100%',
        minHeight: '20%',
        minWidth: '20%',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">Cámara</Typography>
    </Stack>
  );
}

export default CameraCard;
