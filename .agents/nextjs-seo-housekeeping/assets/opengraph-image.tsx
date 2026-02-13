import { ImageResponse } from 'next/og'

export const alt = 'PAGE_TITLE'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'BACKGROUND_COLOR',
          color: 'FOREGROUND_COLOR',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          PAGE_TITLE
        </div>
      </div>
    ),
    { ...size }
  )
}
