import React from 'react';
import ImageAvatar from './assets/avatar.jpg';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaMicrophone, FaRegNewspaper, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function App() {
  return (
    <article className={`my-8 flex flex-col items-center gap-8`}>
      <img src={ImageAvatar} alt="Avatar" className={`h-64 w-64 rounded-full border-4 border-[#e89619]`} />
      <div className={`flex flex-col items-center gap-4 font-mono text-white`}>
        <h1 className={`text-xl font-bold`}>Jian-Min (Vincent) Huang</h1>
        <p className={`text-lg font-semibold`}>
          <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
        </p>
        <p className={`text-base font-medium`}>👨‍💻Coder, 🎤Speaker, 👨‍🏫Mentor, 🚀Leader</p>
      </div>
      <section className={`flex max-w-[360px] flex-wrap justify-center gap-8 text-white`}>
        <a href={`https://docs.google.com/document/d/1w3OKshhacU1vv2I6tAx-GSqNue8Nj_jm-_zHPkTzgrw`}>
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaRegNewspaper size={72} />
            CV
          </span>
        </a>
        <a href="https://www.facebook.com/yfr.huang/">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaFacebook size={72} />Facebook
          </span>
        </a>
        <a href="https://github.com/Jian-Min-Huang/tech-note/wiki">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaMicrophone size={72} />Speech
          </span>
        </a>
        <a href="https://developers.google.com/community/experts/directory/profile/profile-jian-min-huang">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaGoogle size={72} />Google
          </span>
        </a>
        <a href="https://github.com/Jian-Min-Huang">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaGithub size={72} />GitHub
          </span>
        </a>
        <a href="https://www.linkedin.com/in/jian-min-huang">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaLinkedin size={72} />LinkedIn
          </span>
        </a>
        <a href="https://twitter.com/JianMin_V_Huang">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaTwitter size={72} />Twitter
          </span>
        </a>
        <a href="https://www.youtube.com/user/yfrhuang">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaYoutube size={72} />YouTube
          </span>
        </a>
        <a href="https://t.me/yfr984">
          <span className={`flex flex-col items-center font-mono text-sm`}>
            <FaTelegram size={72} />Telegram
          </span>
        </a>
      </section>
    </article>
  )
}
