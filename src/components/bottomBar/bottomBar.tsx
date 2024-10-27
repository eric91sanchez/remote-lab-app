import * as React from 'react';

import { Stack, IconButton, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';

import theme from '@/theme';

import { MainContentOptions } from '@/app/main/page';

export interface SideBarProps {
  sideBarExpanded: boolean,
  setSideBarExpanded: (expanded: boolean) => void,
  mainContentOption: MainContentOptions,
  setMainContentOption: (option: MainContentOptions) => void,
}

function SideBar({
  sideBarExpanded,
  setSideBarExpanded,
  mainContentOption,
  setMainContentOption,
}: SideBarProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{
        height: '48px',
        width: '100%',
      }}
    >
      {/* Left stack */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          width: '33%',
          borderRadius: 2,
          background: theme.palette.background.paper,
          padding: 1,
        }}
      >
        <IconButton>
          <GridViewOutlinedIcon
            color={mainContentOption === 'all' ? 'primary' : 'action'}
            onClick={() => setMainContentOption('all')}
          />
        </IconButton>
        <IconButton>
          <VideocamOutlinedIcon
            color={mainContentOption === 'camera' ? 'primary' : 'action'}
            onClick={() => setMainContentOption('camera')}
          />
        </IconButton>
        <IconButton>
          <TimelineOutlinedIcon
            color={mainContentOption === 'sensors' ? 'primary' : 'action'}
            onClick={() => setMainContentOption('sensors')}
          />
        </IconButton>
      </Stack>

      {/* Center stack */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{
          width: '33%',
          borderRadius: 2,
          background: theme.palette.background.paper,
          padding: 1,
        }}
      >
        <Stack
          sx={{
            backgroundColor: '#FF000030',
            borderRadius: 2,
            paddingX: 2,
          }}
        >
          <Typography variant="h6" >
            System status
          </Typography>
        </Stack>
      </Stack>

      {/* Right stack */}
      <Stack
        direction="row"
        sx={{
          width: '33%',
          borderRadius: 2,
          background: theme.palette.background.paper,
        }}
        justifyContent="space-between"
      >
        {/* Left */}
        <Stack
          direction="row"
        >
          <IconButton
            onClick={() => setSideBarExpanded(!sideBarExpanded)}
          >
            <SettingsOutlinedIcon
              color={sideBarExpanded ? 'primary' : 'action'}
            />
          </IconButton>
          <IconButton
          >
            <StopCircleOutlinedIcon />
          </IconButton>
          <IconButton
          >
            <PlayCircleOutlineOutlinedIcon />
          </IconButton>
          <IconButton
          >
            <PauseCircleOutlineOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
        >
          <IconButton
            size='large'
          >
            <PanToolOutlinedIcon
              color={'error'}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SideBar;
