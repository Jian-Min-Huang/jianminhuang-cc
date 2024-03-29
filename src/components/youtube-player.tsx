'use client'

import React from 'react'
import YouTube from 'react-youtube'
import { useMediaQuery } from 'usehooks-ts'

interface Props {
  videoId: string
}

export default function YoutubePlayer({ videoId }: Props) {
  const isDesktop: boolean = useMediaQuery('(min-width: 1024px)')
  const height: string = isDesktop ? '600px' : '390px'

  return (
    <YouTube
      videoId={videoId}
      opts={{ width: '100%', height: height }}/>
  )
}
