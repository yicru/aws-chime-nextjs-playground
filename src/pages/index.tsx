import {
  Grid,
  lightTheme,
  MeetingProvider,
  VideoTileGrid,
  VideoInputControl,
  AudioInputControl,
  AudioOutputControl,
} from 'amazon-chime-sdk-component-library-react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NextPage } from 'next'
import { MeetingManager } from '../components/VideoMeeting/MeetingManager'
import { LocalVideoToggle } from '../components/VideoMeeting/LocalVideoToggle'
import { ScreenShareButton } from '../components/VideoMeeting/ScreenShareButton'

export const Home: NextPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MeetingProvider>
        <div className="flex flex-col relative p-10 space-y-4 h-screen">
          <div className="flex items-center space-x-4">
            <MeetingManager />
            <LocalVideoToggle />
            <ScreenShareButton />
            <VideoInputControl />
            <AudioInputControl />
            <AudioOutputControl />
          </div>
          <div className="flex-1">
            <Grid>
              <VideoTileGrid
                noRemoteVideoView={<div>No one is sharing his video</div>}
              />
            </Grid>
          </div>
        </div>
      </MeetingProvider>
    </ThemeProvider>
  )
}

export default Home
