import React from 'react';
import ImageAvatar from './assets/avatar.jpg';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaMicrophone, FaRegNewspaper, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function App() {
  return (
    <article className={`my-8 flex flex-col items-center gap-8`}>
      <img src={ImageAvatar} alt="Avatar" className={`h-64 w-64 rounded-full border-4 border-[#e89619]`}/>
      <div className={`flex flex-col items-center gap-4 font-mono text-white`}>
        <h1 className={`text-xl font-bold`}>Jian-Min (Vincent) Huang</h1>
        <p className={`text-lg font-semibold`}>
          <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
        </p>
        <p className={`text-base font-medium`}>👨‍💻Coder, 🎤Speaker, 👨‍🏫Mentor, 🚀Leader</p>
      </div>
      <section className={`flex max-w-[280px] flex-wrap justify-center gap-8 text-white`}>
        <a href={`https://docs.google.com/document/d/1w3OKshhacU1vv2I6tAx-GSqNue8Nj_jm-_zHPkTzgrw`}>
          <FaRegNewspaper size={72}/>
        </a>
        <a href="https://www.facebook.com/yfr.huang/">
          <FaFacebook size={72}/>
        </a>
        <a href="https://github.com/Jian-Min-Huang/tech-note/wiki">
          <FaMicrophone size={72}/>
        </a>
        <a href="https://developers.google.com/community/experts/directory/profile/profile-jian-min-huang">
          <FaGoogle size={72}/>
        </a>
        <a href="https://github.com/Jian-Min-Huang">
          <FaGithub size={72}/>
        </a>
        <a href="https://www.linkedin.com/in/jian-min-huang">
          <FaLinkedin size={72}/>
        </a>
        <a href="https://twitter.com/JianMin_V_Huang">
          <FaTwitter size={72}/>
        </a>
        <a href="https://www.youtube.com/user/yfrhuang">
          <FaYoutube size={72}/>
        </a>
        <a href="https://t.me/yfr984">
          <FaTelegram size={72}/>
        </a>
      </section>
    </article>
  )
}
