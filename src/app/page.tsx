"use client"
import * as React from 'react';

import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import NextLink from 'next/link';

export default function Home() {
  React.useEffect(() => {
    console.log('> Home page mounted');
    return () => {
      console.log('> Home page unmounted');
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Aplicación de Laboratorio Remoto
        </Typography>
        <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
          versión: Alpha
        </Typography>
        <Typography variant="subtitle2" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App with Router, in TypeScript
        </Typography>
        <Link href="/main" color="secondary" component={NextLink}>
          Go to the main page
        </Link>
      </Box>
    </Container>
  );
}
