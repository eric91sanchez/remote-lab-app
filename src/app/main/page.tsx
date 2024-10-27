"use client"
import * as React from 'react';

import { Stack } from '@mui/material';

import SideBar from '@/components/sideBar';
import MainContent from '@/components/mainContent';
import BottomBar from '@/components/bottomBar';

export type MainContentOptions = 'all' | 'camera' | 'sensors' | 'communication';
export const mainContentOptions: MainContentOptions[] = [
  'all',
  'camera',
  'sensors',
  'communication',
];

export default function About() {
  const [sideBarExpanded, setSideBarExpanded] = React.useState(false);
  const [mainContentOption, setMainContentOption] = React.useState<MainContentOptions>(mainContentOptions[0]);

  const pxMargin = 16;
  return (
    <Stack
      direction="column"
      spacing={2}
      margin={`${pxMargin}px`}
      justifyContent="space-between"
      height={`calc(100vh - ${pxMargin * 2}px)`}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        height="100%"
      >
        <Stack
          width={sideBarExpanded ? '80%' : '100%'}
        >
          <MainContent
            mainContentOption={mainContentOption}
          />
        </Stack>
        {sideBarExpanded && (
          <Stack
            width="20%"
          >
            <SideBar />
          </Stack>
        )}
      </Stack>
      <Stack>
        <BottomBar
          sideBarExpanded={sideBarExpanded}
          setSideBarExpanded={setSideBarExpanded}
          mainContentOption={mainContentOption}
          setMainContentOption={setMainContentOption}
        />
      </Stack>
    </Stack >
  );
}
