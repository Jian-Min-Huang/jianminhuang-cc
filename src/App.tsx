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
import { formatHourOrMinute } from './utils/date'

export default function App() {
  return (
    <div className={`my-8 flex flex-wrap justify-center gap-6 bg-gray-100 font-mono text-[#00386b]`}>
      <aside className={`flex flex-col items-center gap-6 md:flex-row md:gap-12 lg:flex-col lg:gap-6 lg:pb-4`}>
        <div className={`flex flex-col gap-4`}>
          <img
            src={ImageAvatar}
            alt="Avatar"
            width={296}
            height={296}
            className={`rounded-full border-4 border-[#e89619] drop-shadow-2xl`}/>
          <h1 className={`text-xl font-bold`}>Jian-Min (Vincent) Huang</h1>
          <div className={`flex flex-col gap-1`}>
            <p className={`text-lg font-semibold`}>
              <span className={`text-[#e89619]`}>$_purefunc</span>, Co-founder
            </p>
          </div>
        </div>
        <ul className={`flex w-64 flex-col gap-2 text-base font-medium`}>
          {
            links()
              .map(link =>
                <li
                  key={link.text}
                  className={`flex flex-row items-center gap-2`}>
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
      <section className={`hidden w-[640px] justify-between rounded-md border border-gray-500 px-6 pb-4 pt-6 md:flex md:flex-col`}>
        <div className={`flex flex-col gap-8`}>
        <h2 className={`border-b border-gray-500 pb-2 text-xl font-bold`}>Hi there 👋, I am Vincent Huang 😎</h2>
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
        <h3 className={`border-b border-gray-500 pb-2 text-xl font-bold`}>2023, Public Speaking</h3>
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
                      className={`border-b border-[#00386b]`}
                      rel="noreferrer">
                      👉 Slides
                    </a>
                    |
                    <a
                      href={link.href}
                      target={`_blank`}
                      className={`border-b border-[#00386b]`}
                      rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                )
            }
        </ul>
        <h3 className={`border-b border-gray-500 pb-2 text-xl font-bold`}>2022, Public Speaking</h3>
          <ul className={`rounded-md bg-gray-200 text-base font-medium`}>
            {
              links2022()
                .map(link =>
                  <li
                    key={link.name}
                    className={`flex flex-row items-center gap-2`}>
                    <a
                      href={link.slides}
                      target={`_blank`}
                      className={`border-b border-[#00386b]`}
                      rel="noreferrer">
                      👉 Slides
                    </a>
                    |
                    <a
                      href={link.href}
                      target={`_blank`}
                      className={`border-b border-[#00386b]`}
                      rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                )
            }
        </ul>
        </div>
        <span className={`flex justify-end text-base font-medium`}>
        <a
          href={`https://github.com/Jian-Min-Huang/tech-note/wiki/`}
          target={`_blank`}
          rel="noreferrer">
          ⋯⋯ more
        </a>
        </span>
      </section>
    </div>
  )
}

function links() {
  const date: Date = new Date()
  const time: string = `${formatHourOrMinute(date.getHours())}:${formatHourOrMinute(date.getMinutes())} (UTC +08:00)`

  return [
    {
      icon: <FaBuilding size={20}/>,
      href: 'https://purefunc.net',
      text: 'PureFunc Inc.',
    },
    {
      icon: <FaLocationDot size={20}/>,
      href: 'https://en.wikipedia.org/wiki/Taipei',
      text: 'Taipei, Taiwan',
    },
    {
      icon: <FaClock size={20}/>,
      href: 'https://en.wikipedia.org/wiki/UTC%2B08:00',
      text: time,
    },
    {
      icon: <FaEnvelope size={20}/>,
      href: 'mailto:yfr.huang@hotmail.com',
      text: 'yfr.huang@hotmail.com',
    },
    {
      icon: <FaLinkedin size={20}/>,
      href: 'https://www.linkedin.com/in/jian-min-huang',
      text: 'in/jian-min-huang',
    },
    {
      icon: <FaGithub size={20}/>,
      href: 'https://github.com/Jian-Min-Huang',
      text: '@Jian-Min-Huang',
    },
    {
      icon: <FaGoogle size={20}/>,
      href: 'https://g.dev/Vincent',
      text: 'g.dev/Vincent',
    },
    {
      icon: <FaMicrophoneLines size={20}/>,
      href: 'https://github.com/Jian-Min-Huang/tech-note/wiki',
      text: 'Public Speaking',
    },
    {
      icon: <FaFacebook size={20}/>,
      href: 'https://www.facebook.com/yfr.huang/',
      text: '黃健旻',
    },
    {
      icon: <FaTwitter size={20}/>,
      href: 'https://twitter.com/JianMin_V_Huang',
      text: '@JianMin_V_Huang',
    },
    {
      icon: <FaYoutube size={20}/>,
      href: 'https://www.youtube.com/user/yfrhuang',
      text: '@yfrhuang',
    },
  ]
}

function introduction() {
  return [
    'MBTI - ESFJ',
    'Coder, Speaker, Mentor, Leader',
    'Joint of React Frontend & JVM Backend & DevOps',
    'Google Developer Expert (Kotlin)',
  ]
}

function links2023() {
  return [
    {
      slides: 'https://docs.google.com/presentation/d/1-NiK_qBK1CFlIllbAwisGjfaVN_2K7-fSA8E4gh4lX8',
      name: 'GDG DevFest Taipei 2023',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-devfest-taipei-2023/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1-NiK_qBK1CFlIllbAwisGjfaVN_2K7-fSA8E4gh4lX8',
      name: 'GDG DevFest Taichung 2023',
      href: 'https://gdg.community.dev/events/details/google-gdg-taichung-presents-devfest-taichung-2023/',
    },
    {
      slides: 'https://github.com/PureFuncInc/FooTinder-iThome-2023',
      name: '第15屆 IT邦幫忙鐵人賽',
      href: 'https://ithelp.ithome.com.tw/users/20119361/ironman/6313',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1a4OEnSRN5ZupqFBCApJiQnYZxfVZ-ZeiWKGBTKDpGn4',
      name: 'JCConf 2023',
      href: 'https://jcconf.tw/2023/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1BCa2Oy2xxIXdo6iIgwyMetgNFPJZ6oL112CXwn-o56M',
      name: 'DDDesign TW Conference 2023',
      href: 'https://conference.ddd-tw.com/2023/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1zUyCEVU3n4TT6ljJk4gmbJ47fl8I4ug9PRxJKsJsBgM',
      name: 'Kotlin Annual Meetup 2023',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-annual-meetup-2023/',
    },
    {
      slides: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-meetup-kotlinconf-2023-global-watch-party/',
      name: 'KotlinConf 2023 Global Watch Party',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-meetup-kotlinconf-2023-global-watch-party/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/19L3qmLbKYLmyD072owXfEwcCspRQK_LibnFuHPlUhgY',
      name: 'DevOps Taiwan, Copilot 交流',
      href: 'https://devops.kktix.cc/events/meetup-50',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1m2LzC1bYmTWIChrB7CjMiQnExCukBvKH5h9W-2lyxcI',
      name: 'Kotlin Meetup 202302',
      href: 'https://gdg.community.dev/events/details/google-gdg-taipei-presents-kotlin-meetup-9/',
    },
  ]
}

function links2022() {
  return [
    {
      slides: 'https://docs.google.com/presentation/d/1JKhP5NEqw9rrX-7vSwwJQSX4u9tn48TqLQTscZjYv6M',
      name: 'Will 保哥的技術交流中心 X 純函式',
      href: 'https://fb.watch/gKWaJy07di/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1H3MbEs_xdDcRaBtJ3aqCC121nYU_5ZqP6JdNsRQftfA',
      name: 'MOPCON 2022',
      href: 'https://mopcon.org/2022/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1DtjFhlGbs12HvlO4q5cma7VZcuaJkcBOemMeL5JWetY',
      name: 'JCConf 2022',
      href: 'https://jcconf.tw/2022/',
    },
    {
      slides: 'https://docs.google.com/presentation/d/1R-nRP7SZyMxVqTWdSoUQmbVO9L952HZGC299bPPhrEU',
      name: 'Google I/O Extended\'22 Taichung',
      href: 'https://gdg.community.dev/events/details/google-gdg-taichung-presents-google-io-extended22/',
    },
  ]
}
