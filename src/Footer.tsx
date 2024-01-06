import React from 'react'
import ImagePureFuncBlack from './assets/purefunc_black.png'

export default function Footer() {
  return (
    <footer className={`flex flex-row items-center justify-center gap-2 border-t-2 border-white pt-4 font-mono text-base text-white`}>
      <span>Powered By</span>
      <a href={`https://purefunc.net`} className={`underline underline-offset-2`}>PureFunc Inc.</a>
      <img src={ImagePureFuncBlack} alt="$_purefunc Logo" width={24} height={24}/>
    </footer>
  )
}
