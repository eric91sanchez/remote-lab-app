import * as React from 'react';

import { Stack } from '@mui/material';

import { MainContentOptions } from '@/app/main/page';
import CameraCard from '../common/cameraCard';
import SensorsCard from '../common/sensorsCard';

export interface MainContentProps {
  mainContentOption: MainContentOptions,
}

function MainContent({
  mainContentOption,
}: MainContentProps) {
  const [fullModeList, setFullModeList] = React.useState([false, false, false]);

  return (
    <Stack
      spacing={2}
      height='100%'
      width='100%'
    >
      {(mainContentOption === 'camera') && (
        <CameraCard />
      )}
      {(mainContentOption === 'sensors') && (
        <SensorsCard />
      )}
      {(mainContentOption === 'all') && (
        <Stack
          direction="column"
          spacing={2}
          height='100%'
        >
          <CameraCard />
          <SensorsCard />
        </Stack>
      )}
    </Stack >
  );
}

export default MainContent;
