import React from 'react';
import ImageAvatar from './assets/avatar.webp';
import {
  FaBuilding,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaLocationDot,
  FaMicrophoneLines,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa6';

export default function App() {
  const date: Date = new Date();

  return (
    <article className={`mx-auto my-8 flex flex-col items-center gap-4 bg-gray-100`}>
      <img src={ImageAvatar} alt="Avatar" className={`mx-auto h-80 w-80 rounded-full border-4 border-[#e89619]`} />
      <h1 className={`mx-auto font-mono text-xl font-bold text-[#00386b]`}>Jian-Min (Vincent) Huang</h1>
      <div className={`flex flex-col gap-1 font-mono text-[#00386b]`}>
        <p className={`text-lg font-semibold`}>
          <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
        </p>
      </div>
      <section className={`flex w-64 flex-col justify-start gap-2 font-mono text-base font-medium text-[#00386b]`}>
        <div className={`flex flex-row items-center gap-2`}>
          <FaBuilding size={20} />
          <a
            href={`https://purefunc.net`}
            target="_blank"
            rel="noreferrer">
            PureFunc Inc.
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaLocationDot size={20} />
          <a
            href={`https://en.wikipedia.org/wiki/Taipei`}
            target="_blank"
            rel="noreferrer">
            Taipei, Taiwan
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaClock size={20} />
          <span className={`font-mono text-base`}>{`${date.getHours()}:${date.getMinutes()}`} (UTC +08:00)</span>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaEnvelope size={20} />
          <a href={`mailto:yfr.huang@hotmail.com`}>
            yfr.huang@hotmail.com
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaLinkedin size={20} />
          <a
            href={`https://www.linkedin.com/in/jian-min-huang`}
            target="_blank"
            rel="noreferrer">
            in/jian-min-huang
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaGithub size={20} />
          <a
            href={`https://github.com/Jian-Min-Huang`}
            target="_blank"
            rel="noreferrer">
            @Jian-Min-Huang
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaGoogle size={20} />
          <a
            href={`https://g.dev/Vincent`}
            target="_blank"
            rel="noreferrer">
            g.dev/Vincent
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaMicrophoneLines size={20} />
          <a
            href={`https://github.com/Jian-Min-Huang/tech-note/wiki`}
            target="_blank"
            rel="noreferrer">
            Public Speaking
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaFacebook size={20} />
          <a
            href={`https://www.facebook.com/yfr.huang/`}
            target="_blank"
            rel="noreferrer">
            黃健旻
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaTwitter size={20} />
          <a
            href={`https://twitter.com/JianMin_V_Huang`}
            target="_blank"
            rel="noreferrer">
            @JianMin_V_Huang
          </a>
        </div>
        <div className={`flex flex-row items-center gap-2`}>
          <FaYoutube size={20} />
          <a
            href={`https://www.youtube.com/user/yfrhuang`}
            target="_blank"
            rel="noreferrer">
            @yfrhuang
          </a>
        </div>
      </section>
    </article>
  )
}
