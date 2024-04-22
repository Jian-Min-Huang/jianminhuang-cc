'use client'

import React from 'react'
import YouTube from 'react-youtube'
import { useMediaQuery } from 'usehooks-ts'

interface Props {
  videoId: string
}

export default function YoutubePlayer({ videoId }: Props) {
  const isDesktop: boolean = useMediaQuery('(min-width: 1024px)')
  const weight: string = isDesktop ? '479px' : '640px'
  const height: string = isDesktop ? '292px' : '390px'

  return (
    <YouTube
      videoId={videoId}
      opts={{ width: weight, height: height }}/>
  )
}
