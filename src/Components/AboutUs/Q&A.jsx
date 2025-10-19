import React, { useEffect } from 'react'
import './Aboutus.css'
import gsap from "gsap"
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

function Q_A({question , answer, list}) {
  // useEffect(() => {
  //   const split = SplitText.create(".animate_blog", { type: "words" });
  //   gsap.from(split.words, {
  //     y: -10,
  //     opacity: 0,
  //     ease: "power1.inOut",
  //     stagger: 0.01,
  //   });
  // }, []);
  return (
    <div className="Q_A flex">
        <div className="question-blog animate_blog">
            {question}
        </div>
        {(answer)?<div className="answer-blog animate_blog">{answer}</div>:""}
        {(list)?<ul className="list-blog">
            { list.split("->").map((v, i) => (
                <li className='list-blog-items animate_blog' key={i} type="radio">{v}</li>
            )) }
        </ul>:""}
    </div>
  )
}

export default Q_A
