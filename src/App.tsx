import React from 'react';
import ImageAvatar from './assets/avatar.webp';
import {
  FaBuilding,
  FaEnvelope,
  FaFacebook,
  FaFloppyDisk,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaLocationDot,
  FaMicrophoneLines,
  FaRegNewspaper,
  FaRegStar,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa6';
import YoutubePlayer from './components/youtube-player'

export default function App() {
  return (
    <div className={`mx-auto my-8 flex max-w-[984px] flex-wrap justify-center gap-6 bg-gray-200 font-mono text-[#00386b]`}>
      <aside className={`flex flex-col gap-6 rounded-md border border-black bg-gray-100 shadow-lg md:w-[640px] md:flex-row md:gap-0 lg:w-[320px] lg:flex-col lg:gap-6`}>
        <div className={`flex flex-col items-center gap-4 px-6 pt-6 md:pb-6 lg:px-0 lg:pb-0`}>
          <img
            src={ImageAvatar}
            alt="Avatar"
            width={296}
            height={296}
            className={`mx-auto aspect-square rounded-full border-4 border-[#e89619] shadow-lg md:w-[256px] lg:w-[290px]`}/>
          <h1 className={`text-xl font-bold`}>Jian-Min (Vincent) Huang</h1>
          <div className={`flex flex-col gap-1`}>
            <p className={`text-lg font-semibold`}>
              <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
            </p>
          </div>
        </div>
        <ul className={`flex flex-col gap-2 rounded-b-md px-6 pb-6 text-base font-medium md:pt-6 lg:pt-0`}>
          {
            links()
              .map(link =>
                <li
                  key={link.text}
                  className={`flex flex-row items-center gap-6`}>
                  {link.icon}
                  <a
                    href={link.href}
                    target={`_blank`}
                    rel="noreferrer">
                    {link.text}
                  </a>
                </li>
              )
          }
        </ul>
      </aside>
      <section className={`hidden w-[640px] justify-between rounded-md border border-black bg-gray-100 p-6 shadow-lg md:flex md:flex-col`}>
        <div className={`flex flex-col gap-8`}>
          <h2 className={`flex flex-row gap-2 border-b border-black pb-2 text-xl font-bold`}>
            Hi there
            <div className={`animate-wiggle-more animate-duration-[600ms] animate-infinite animate-ease-out`}>👋</div>
            , I am Vincent Huang
            <div className={`animate-rotate-y animate-duration-[200ms] animate-infinite animate-ease-linear`}>🔥</div>
          </h2>
          <ul className={`rounded-md bg-gray-200 text-base font-medium`}>
            {
              introduction()
                .map(description =>
                  <li
                    key={description}
                    className={`flex flex-row items-center gap-4`}>
                    <span>◾️</span>
                    {description}
                  </li>
                )
            }
          </ul>
          <div className={`flex flex-row items-center border-b border-black pb-2`}>
            <h3 className={`flex-1 text-xl font-bold`}>2023, Public Speaking</h3>
            <a
              href={`https://github.com/Jian-Min-Huang/tech-note/wiki/`}
              target={`_blank`}
              rel="noreferrer">
              ⋯⋯ more
            </a>
          </div>
          <ul className={`rounded-md bg-gray-200 text-base font-medium`}>
            {
              links2023()
                .map(link =>
                  <li
                    key={link.name}
                    className={`flex flex-row items-center gap-2`}>
                    <a
                      href={link.slides}
                      target={`_blank`}
                      rel="noreferrer">
                      👉 Slides
                    </a>
                    |
                    <a
                      href={link.href}
                      target={`_blank`}
                      rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                )
            }
          </ul>
          <div className={`flex flex-row items-center border-b border-black pb-2`}>
            <h3 className={`flex-1 text-xl font-bold`}>Side Project</h3>
            <a
              href={`https://github.com/Jian-Min-Huang`}
              target={`_blank`}
              rel="noreferrer">
              ⋯⋯ more
            </a>
          </div>
          <div className={`flex flex-wrap gap-4 text-sm`}>
            <a
              href={`https://github.com/b2etw/Spring-Kotlin-iThome-2021`}
              target={`_blank`}
              rel="noreferrer">
              <div className={`flex w-[287px] flex-col gap-4 rounded-md border border-black p-2`}>
                <span className={`flex flex-row items-center gap-2 font-semibold`}>
                  <FaFloppyDisk size={16}/>
                  Spring-Kotlin-iThome-2021
                </span>
                <div className={`flex flex-row gap-2`}>
                  <FaRegStar size={16}/>
                  38
                  <span className={`font-medium text-purple-700`}>Kotlin</span>
                </div>
              </div>
            </a>
            <a
              href={`https://github.com/PureFuncInc/pure-backend-practice`}
              target={`_blank`}
              rel="noreferrer">
              <div className={`flex w-[287px] flex-col gap-4 rounded-md border border-black p-2`}>
                <span className={`flex flex-row items-center gap-2 font-semibold`}>
                  <FaFloppyDisk size={16}/>
                  pure-backend-practice
                </span>
                <div className={`flex flex-row gap-2`}>
                  <FaRegStar size={16}/>
                  54
                  <span className={`font-medium text-yellow-600`}>Java</span>
                </div>
              </div>
            </a>
            <a
              href={`https://github.com/taiwan-kotlin-user-group/emoji-jvm-string`}
              target={`_blank`}
              rel="noreferrer">
              <div className={`flex w-[287px] flex-col gap-4 rounded-md border border-black p-2`}>
                <span className={`flex flex-row items-center gap-2 font-semibold`}>
                  <FaFloppyDisk size={16}/>
                  emoji-jvm-string
                </span>
                <div className={`flex flex-row gap-2`}>
                  <FaRegStar size={16}/>
                  21
                  <span className={`font-medium text-purple-700`}>Kotlin</span>
                </div>
              </div>
            </a>
            <a
              href={`https://github.com/PureFuncInc/spring-boot-3-practice`}
              target={`_blank`}
              rel="noreferrer">
              <div className={`flex w-[287px] flex-col gap-4 rounded-md border border-black p-2`}>
                <span className={`flex flex-row items-center gap-2 font-semibold`}>
                  <FaFloppyDisk size={16}/>
                  spring-boot-3-practice
                </span>
                <div className={`flex flex-row gap-2`}>
                  <FaRegStar size={16}/>
                  14
                  <span className={`font-medium text-yellow-600`}>Java</span>
                  <span className={`font-medium text-purple-700`}>Kotlin</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className={`hidden gap-6 border border-black shadow-lg md:flex md:w-[640px] md:flex-wrap lg:w-[984px]`}>
        {/*JCCONF 2023*/}
        <YoutubePlayer videoId={`DTnUq22E6dM`} />
        {/*JCCONF 2022*/}
        <YoutubePlayer videoId={`yj8_i9Ray9o`} />
        {/*MOPCON 2021*/}
        <YoutubePlayer videoId={`Ktw4OxsE9ug`} />
        {/*COSCUP 2021*/}
        <YoutubePlayer videoId={`7_WKAPR5z64`} />
        {/*MOPCON 2020*/}
        <YoutubePlayer videoId={`lQZSHfvp3lg`} />
        {/*JCCONF 2020*/}
        <YoutubePlayer videoId={`91swUbkPOfU`} />
        {/*JCCONF 2019*/}
        <YoutubePlayer videoId={`1gC7UY_IFec`} />
      </section>
    </div>
  )
}

function links() {
  return [
    {
      icon: <FaBuilding size={20}/>,
      href: 'https://purefunc.net',
      text: 'Purefunc Co., Ltd.'
    },
    {
      icon: <FaLocationDot size={20}/>,
      href: 'https://en.wikipedia.org/wiki/Taipei',
      text: 'Taipei, Taiwan'
    },
    {
      icon: <FaEnvelope size={20}/>,
      href: 'mailto:yfr.huang@hotmail.com',
      text: 'yfr.huang@hotmail.com'
    },
    {
      icon: <FaRegNewspaper size={20}/>,
      href: 'https://docs.google.com/document/d/1w3OKshhacU1vv2I6tAx-GSqNue8Nj_jm-_zHPkTzgrw',
      text: 'Curriculum Vitae'
    },
    {
      icon: <FaLinkedin size={20}/>,
      href: 'https://www.linkedin.com/in/jian-min-huang',
      text: 'in/jian-min-huang'
    },
    {
      icon: <FaGithub size={20}/>,
      href: 'https://github.com/Jian-Min-Huang',
      text: '@Jian-Min-Huang'
    },
    {
      icon: <FaGoogle size={20}/>,
      href: 'https://g.dev/Vincent',
      text: 'g.dev/Vincent'
    },
    {
      icon: <FaMicrophoneLines size={20}/>,
      href: 'https://github.com/Jian-Min-Huang/tech-note/wiki',
      text: 'Public Speaking'
    },
    {
      icon: <FaFacebook size={20}/>,
      href: 'https://www.facebook.com/yfr.huang/',
      text: '黃健旻'
    },
    {
      icon: <FaTwitter size={20}/>,
      href: 'https://twitter.com/JianMin_V_Huang',
      text: '@JianMin_V_Huang'
    },
    {
      icon: <FaYoutube size={20}/>,
      href: 'https://www.youtube.com/user/yfrhuang',
      text: '@yfrhuang'
    }
  ]
}

function introduction() {
  return [
    'MBTI - ESFJ',
    'Coder, Speaker, Mentor, Leader',
    'Joint of React Frontend & JVM Backend & DevOps',
    'Google Developer Expert (Kotlin)'
  ]
}

function links2023() {
  return [
    {
      slides: 'https://docs.google.com/presentation/d/1-NiK_qBK1CFlIllbAwisGjfaVN_2K7-fSA8E4gh4lX8',
      name: 'GDG DevFest Taipei 2023',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-devfest-taipei-2023/'
    },
    {
      slides: 'https://docs.google.com/presentation/d/1-NiK_qBK1CFlIllbAwisGjfaVN_2K7-fSA8E4gh4lX8',
      name: 'GDG DevFest Taichung 2023',
      href: 'https://gdg.community.dev/events/details/google-gdg-taichung-presents-devfest-taichung-2023/'
    },
    {
      slides: 'https://github.com/PureFuncInc/FooTinder-iThome-2023',
      name: '第15屆 IT邦幫忙鐵人賽',
      href: 'https://ithelp.ithome.com.tw/users/20119361/ironman/6313'
    },
    {
      slides: 'https://docs.google.com/presentation/d/1a4OEnSRN5ZupqFBCApJiQnYZxfVZ-ZeiWKGBTKDpGn4',
      name: 'JCConf 2023',
      href: 'https://jcconf.tw/2023/'
    },
    {
      slides: 'https://docs.google.com/presentation/d/1BCa2Oy2xxIXdo6iIgwyMetgNFPJZ6oL112CXwn-o56M',
      name: 'DDDesign TW Conference 2023',
      href: 'https://conference.ddd-tw.com/2023/'
    },
    {
      slides: 'https://docs.google.com/presentation/d/1zUyCEVU3n4TT6ljJk4gmbJ47fl8I4ug9PRxJKsJsBgM',
      name: 'Kotlin Annual Meetup 2023',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-annual-meetup-2023/'
    },
    {
      slides: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-meetup-kotlinconf-2023-global-watch-party/',
      name: 'KotlinConf 2023 Global Watch Party',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-meetup-kotlinconf-2023-global-watch-party/'
    },
    {
      slides: 'https://docs.google.com/presentation/d/19L3qmLbKYLmyD072owXfEwcCspRQK_LibnFuHPlUhgY',
      name: 'DevOps Taiwan, Copilot 交流',
      href: 'https://devops.kktix.cc/events/meetup-50'
    },
    {
      slides: 'https://docs.google.com/presentation/d/1m2LzC1bYmTWIChrB7CjMiQnExCukBvKH5h9W-2lyxcI',
      name: 'Kotlin Meetup 202302',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-meetup-9/'
    }
  ]
}
