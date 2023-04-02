import React from 'react'
import left from './left.module.css'

export default function Leftcomponent() {
  return (
        <div className={left.left_container}>
            <div className={left.submission}>
                <h3>Daily Assignment Submission</h3>
                <h4>Number of substrings divisible by 6</h4>
                <p>Deadline is : 29 Mar,11:59 PM</p>
                <p>videoLinkAssignment</p>
                <input type="text"  placeholder='Enter submission link here'/>
                <button>Submit link</button>
            </div>
            <div className={left.course_structure}>
                <h3>Course Structure</h3>
                <p>introduction</p>
                <hr/>
                <p>React day 1</p>
                <hr/>
                <p>React day 2</p>
                <hr/>
                <p>React installation </p>
                <hr/>
                <p>DOM & Virtual DOM</p>
                <hr/>
                <p>Prop passing functions and CSS</p>
                <hr/>
            </div>
            <div className={left.advertize}>
                <h3>More students Like You</h3>
                <p>If you feel FunctionUp is helping you in shaping your career, we want our new admissions to have the same motivation as yours.</p>
            </div>
            <button>Share Now</button>
        </div>
  )
}
