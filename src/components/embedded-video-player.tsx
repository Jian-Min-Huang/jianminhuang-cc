'use client'

import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import ReactPlayer from 'react-player'

interface Props {
  url: string
}

export default function EmbeddedVideoPlayer({ url }: Props) {
  const isDesktop: boolean = useMediaQuery('(min-width: 1024px)')
  const weight: string = isDesktop ? '479px' : '640px'
  const height: string = isDesktop ? '292px' : '390px'

  return (
    <ReactPlayer
      url={url}
      width={weight}
      height={height} />
  )
}
