import axios from 'axios'
import React, { useState } from 'react'
import type { Meeting, Attendee } from 'aws-sdk/clients/chime'
import { useMeetingManager } from 'amazon-chime-sdk-component-library-react'
import { BaseButton } from '../BaseButton'

export const MeetingManager: React.VFC = () => {
  const [token, setToken] = useState('')
  const meetingManager = useMeetingManager()

  const joinMeeting = async () => {
    const { data } = await axios.get<{ Meeting: Meeting; Attendee: Attendee }>(
      '/api/meetings',
      { params: { token } }
    )
    await meetingManager.join({
      meetingInfo: data.Meeting,
      attendeeInfo: data.Attendee,
    })
    await meetingManager.start()
    alert('joined')
  }

  return (
    <div className="space-x-2">
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="border py-1 px-4"
      />
      <BaseButton onClick={joinMeeting}>join</BaseButton>
    </div>
  )
}
