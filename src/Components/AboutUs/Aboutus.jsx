import React, { useEffect } from 'react'
import './Aboutus.css'
import Q_A from './Q&A'
function Aboutus() {
  return (
    <div className='blog-home'>
      <div className="upperPage-blog">
        <div className="heading-blogPage animate_blog" >
          🚀 Introducing <b>CraftRume</b> : 
        </div>
        <div className="content-blog-page">
          <Q_A 
            question={"Your Personal Resume Building Companion"} 
            answer={`<b>CraftRume</b> is a sleek, intelligent, and user-friendly <b>Resume Builder Application</b> designed to make resume creation effortless. From choosing modern templates to customizing every detail, CraftRume helps you turn your experiences into a story worth reading. Built using the latest web technologies like React 19, Vite, and Node.js, CraftRume is not just a tool — it's your <b>career companion</b>.`} />
          <Q_A 
            question={"🎯 Why We Built CraftRume"} 
            answer={`We noticed a common struggle — students and professionals often spend hours formatting resumes but still end up with something that doesn't reflect their true potential. Existing platforms were either too complex, outdated, or lacked flexibility.
So, we built <b>CraftRume</b> — a smart, modern, and customizable resume builder that lets you focus on what truly matters: <b>your journey, your skills, and your growth</b>.`} />
          <Q_A 
            question={"👥 Who Is CraftRume For?"}
            answer={"<b>CraftRume</b> makes resume building faster, easier, and more elegant than ever. Whether you're:"}
            list={`
                  ->A student applying for internships,
                  ->A fresh graduate stepping into your first job
                  ->A professional looking to refresh your portfolio`
              }
          />
          <Q_A 
            question={"💡 What Makes CraftRume Special?"}
            list={`📄 Smart Templates: Professionally designed templates that make your resume stand out instantly.
                  ->⚙️ Live Preview: See every change in real time as you edit.
                  ->🧠 Custom Sections: Add projects, achievements, and skills tailored to your profession.
                  ->🔐 Secure & Private: Your data stays with you — safe, protected, and confidential.
                  ->☁️ Instant Download: Export your resume in high-quality formats within seconds.`}
          />
          <Q_A 
            question={"🚀 The Result?"}
            answer={`No more wrestling with Word files or spending hours adjusting margins. With CraftRume, creating a professional, modern, and polished resume becomes as easy as a few clicks. </br>Because at the end of the day, your story deserves to be crafted beautifully — and that's what we do best. ✨`}
          />
        </div>
      </div>
    </div>
  )
}

export default Aboutus