import React from 'react';
import ImageAvatar from './assets/avatar.jpg';
import { FaEnvelope, FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaMicrophone, FaNoteSticky, FaTwitter, FaYoutube } from 'react-icons/fa6';

function App() {
  return (
    <article className={`my-8 flex flex-col items-center gap-2`}>
      <img src={ImageAvatar} alt="Avatar" className={`h-32 w-32 rounded-full`} />
      <h1 className={`text-xl font-medium`}>Jian-Min (Vincent) Huang</h1>
      <p>👨‍💻 Coder, 🎤 Speaker, 👨‍🏫 Mentor and 🚀 Leader</p>
      <div className={`flex max-w-72 flex-wrap justify-center`}>
        <section className={`flex h-24 w-24  flex-col items-center justify-center`}>
          <FaNoteSticky className={`text-yellow-500`} size={32} />
          <a href={`https://docs.google.com/document/d/1w3OKshhacU1vv2I6tAx-GSqNue8Nj_jm-_zHPkTzgrw`}>CV</a>
        </section>
        <section className={`flex h-24 w-24 flex-col items-center justify-center`}>
          <FaFacebook className={`text-blue-500`} size={32} />
          <a href="https://www.facebook.com/yfr.huang/">FB</a>
        </section>
        <section className={`flex h-24 w-24  flex-col items-center justify-center`}>
          <FaGithub className={`text-gray-500`} size={32} />
          <a href="https://github.com/Jian-Min-Huang">GitHub</a>
        </section>
        <section className={`flex h-24 w-24 flex-col items-center justify-center`}>
          <FaMicrophone className={`text-red-500`} size={32} />
          <a href="https://github.com/Jian-Min-Huang/tech-note/wiki">Speech</a>
        </section>
        <section className={`flex h-24 w-24 flex-col items-center justify-center`}>
          <FaGoogle className={`text-red-500`} size={32} />
          <a href="https://developers.google.com/community/experts/directory/profile/profile-jian-min-huang">Google</a>
        </section>
        <section className={`flex h-24 w-24  flex-col items-center justify-center`}>
          <FaLinkedin className={`text-blue-700`} size={32} />
          <a href="https://www.linkedin.com/in/jian-min-huang">LinkedIn</a>
        </section>
        <section className={`flex h-24 w-24  flex-col items-center justify-center`}>
          <FaTwitter className={`text-blue-400`} size={32} />
          <a href="https://twitter.com/JianMin_V_Huang">Twitter</a>
        </section>
        <section className={`flex h-24 w-24  flex-col items-center justify-center`}>
          <FaYoutube className={`text-red-600`} size={32} />
          <a href="https://www.youtube.com/user/yfrhuang">YouTube</a>
        </section>
        <section className={`flex h-24 w-24  flex-col items-center justify-center`}>
          <FaEnvelope className={`text-red-600`} size={32} />
          <a href="mailto:yfr.huang@hotmail.com">Email</a>
        </section>
      </div>
    </article>
  );
}

export default App;
