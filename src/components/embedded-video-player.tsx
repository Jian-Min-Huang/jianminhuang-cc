'use client'

import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import ReactPlayer from 'react-player'

interface Props {
  url: string
}

export default function EmbeddedVideoPlayer({ url }: Props) {
  const isDesktop: boolean = useMediaQuery('(min-width: 1024px)')
  const weight: number = isDesktop ? 479 : 640
  const height: number = isDesktop ? 268 : 360

  return (
    <ReactPlayer
      url={url}
      width={weight}
      height={height} />
  )
}
