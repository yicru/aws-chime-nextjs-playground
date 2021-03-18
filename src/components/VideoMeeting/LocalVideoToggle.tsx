import React from 'react'
import { useLocalVideo } from 'amazon-chime-sdk-component-library-react'
import { BaseButton } from '../BaseButton'

export const LocalVideoToggle: React.VFC = () => {
  const { isVideoEnabled, toggleVideo } = useLocalVideo()

  return (
    <BaseButton onClick={toggleVideo}>
      {isVideoEnabled ? 'Stop your video' : 'Start your video'}
    </BaseButton>
  )
}
