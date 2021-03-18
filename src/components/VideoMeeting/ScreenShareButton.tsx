import { useContentShareControls } from 'amazon-chime-sdk-component-library-react'
import React from 'react'
import { BaseButton } from '../BaseButton'

export const ScreenShareButton: React.VFC = () => {
  const { toggleContentShare } = useContentShareControls()

  return <BaseButton onClick={toggleContentShare}>Share Screen</BaseButton>
}
