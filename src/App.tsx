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
    <div className={`my-8 flex flex-wrap justify-center gap-8 bg-gray-100 font-mono text-[#00386b]`}>
      <aside className={`flex flex-col items-center gap-8 md:flex-row md:gap-16 lg:flex-col lg:gap-8`}>
        <div className={`flex flex-col gap-4`}>
          <img src={ImageAvatar} alt="Avatar" className={`h-80 w-80 rounded-full border-4 border-[#e89619]`} />
          <h1 className={`text-xl font-bold`}>Jian-Min (Vincent) Huang</h1>
          <div className={`flex flex-col gap-1`}>
            <p className={`text-lg font-semibold`}>
              <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
            </p>
          </div>
        </div>
        <section className={`flex w-64 flex-col justify-start gap-2 text-base font-medium`}>
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
            <span>{`${date.getHours()}:${date.getMinutes()}`} (UTC +08:00)</span>
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
      </aside>
      <section className={`hidden w-[640px] gap-8 border border-gray-500 p-8 md:flex md:flex-col`}>
        <h2 className={`border-b border-gray-500 pb-2 text-xl font-bold`}>Hi there 👋, I am Vincent Huang 😎</h2>
        <ul className={`text-base font-medium`}>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            MBTI - <a href={`https://www.16personalities.com/esfj-personality`} target={`_blank`} className={`border-b border-[#00386b]`}>ESFJ</a>
          </li>
          <li><span className={`px-2 font-extrabold text-[#e89619]`}>-</span>Coder, Speaker, Mentor, Leader</li>
          <li><span className={`px-2 font-extrabold text-[#e89619]`}>-</span>Joint of React Frontend & JVM Backend & DevOps</li>
          <li><span className={`px-2 font-extrabold text-[#e89619]`}>-</span>Google Developer Expert (Kotlin)</li>
        </ul>
        <h3 className={`border-b border-gray-500 pb-2 text-xl font-bold`}>2023, Public Speaking</h3>
        <ul className={`text-base font-medium`}>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
        </ul>
        <h3 className={`border-b border-gray-500 pb-2 text-xl font-bold`}>2022, Public Speaking</h3>
        <ul className={`text-base font-medium`}>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
          <li>
            <span className={`px-2 font-extrabold text-[#e89619]`}>-</span>
            <a
              href={``}
              target={`_blank`}
              className={`border-b border-[#00386b]`}>
              TODO
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
