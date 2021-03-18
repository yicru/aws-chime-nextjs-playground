import {
  Grid,
  lightTheme,
  MeetingProvider,
  VideoTileGrid,
} from 'amazon-chime-sdk-component-library-react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NextPage } from 'next'
import { MeetingManager } from '../components/VideoMeeting/MeetingManager'
import { LocalVideoToggle } from '../components/VideoMeeting/LocalVideoToggle'

export const Home: NextPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MeetingProvider>
        <div className="relative p-10 space-y-4 h-screen">
          <div className="flex items-center space-x-4">
            <MeetingManager />
            <LocalVideoToggle />
          </div>
          <Grid>
            <VideoTileGrid
              noRemoteVideoView={<div>No one is sharing his video</div>}
            />
          </Grid>
        </div>
      </MeetingProvider>
    </ThemeProvider>
  )
}

export default Home
