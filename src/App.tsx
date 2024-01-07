import React from 'react';
import ImageAvatar from './assets/avatar.webp';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaMicrophone, FaRegNewspaper, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function App() {
  return (
    <article className={`my-8 flex flex-col items-center gap-8`}>
      <img src={ImageAvatar} alt="Avatar" className={`h-64 w-64 rounded-full border-4 border-[#e89619] lg:h-80 lg:w-80`} />
      <div className={`flex flex-col items-center gap-4 font-mono text-white`}>
        <h1 className={`text-xl font-bold lg:text-2xl`}>Jian-Min (Vincent) Huang</h1>
        <p className={`text-lg font-semibold lg:text-xl`}>
          <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
        </p>
        <p className={`text-base font-medium lg:text-lg`}>👨‍💻Coder, 🎤Speaker, 👨‍🏫Mentor, 🚀Leader</p>
      </div>
      <section className={`flex max-w-[360px] flex-wrap justify-center gap-8 text-white lg:max-w-[548px]`}>
        <a href={`https://docs.google.com/document/d/1w3OKshhacU1vv2I6tAx-GSqNue8Nj_jm-_zHPkTzgrw`}>
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaRegNewspaper size={72} />CV
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaRegNewspaper size={84} />CV
          </span>
        </a>
        <a href="https://www.facebook.com/yfr.huang/">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaFacebook size={72} />Facebook
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaFacebook size={84} />Facebook
          </span>
        </a>
        <a href="https://github.com/Jian-Min-Huang/tech-note/wiki">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaMicrophone size={72} />Speech
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaMicrophone size={84} />Speech
          </span>
        </a>
        <a href="https://developers.google.com/community/experts/directory/profile/profile-jian-min-huang">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaGoogle size={72} />Google
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaGoogle size={84} />Google
          </span>
        </a>
        <a href="https://github.com/Jian-Min-Huang">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaGithub size={72} />GitHub
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaGithub size={84} />GitHub
          </span>
        </a>
        <a href="https://www.linkedin.com/in/jian-min-huang">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaLinkedin size={72} />LinkedIn
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaLinkedin size={84} />LinkedIn
          </span>
        </a>
        <a href="https://twitter.com/JianMin_V_Huang">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaTwitter size={72} />Twitter
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaTwitter size={84} />Twitter
          </span>
        </a>
        <a href="https://www.youtube.com/user/yfrhuang">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaYoutube size={72} />YouTube
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaYoutube size={84} />YouTube
          </span>
        </a>
        <a href="https://t.me/yfr984">
          <span className={`flex flex-col items-center font-mono text-sm lg:hidden`}>
            <FaTelegram size={72} />Telegram
          </span>
          <span className={`hidden items-center font-mono lg:flex lg:flex-col`}>
            <FaTelegram size={84} />Telegram
          </span>
        </a>
      </section>
    </article>
  )
}
