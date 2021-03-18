import AWS from 'aws-sdk'
import type { NextApiRequest, NextApiResponse } from 'next'

AWS.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.query.token

  if (typeof token !== 'string') {
    res.status(400)
  }

  const region = 'ap-northeast-1'
  const chime = new AWS.Chime({
    region: 'us-east-1',
    endpoint: 'service.chime.aws.amazon.com',
  })

  const { Meeting } = await chime
    .createMeeting({
      ClientRequestToken: token as string,
      MediaRegion: region,
    })
    .promise()

  if (!Meeting?.MeetingId) {
    res.status(500).json({ message: 'error' })
  }

  const { Attendee } = await chime
    .createAttendee({
      MeetingId: Meeting?.MeetingId as string,
      ExternalUserId: Date.now().toString(),
    })
    .promise()

  res.status(200).json({ Meeting, Attendee })
}
