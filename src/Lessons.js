import React from "react";
import { Link } from "react-router-dom";

const Lessons = props => {
  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        <li><Link to="/lessons/1">Lesson One - Animals</Link></li>
        <li><Link to="/lessons/2">Lesson Two - Fruits</Link></li>
        <li><Link to="/lessons/3">Lesson Three - People</Link></li>
        <li><Link to="/lessons/4">Lesson Four - Occupations</Link></li>
        <li><Link to="/lessons/5">Lesson Five - Transportations</Link></li>
        <li><Link to="/lessons/6">Lesson Six - Numbers</Link></li>
        <li><Link to="/lessons/7">Lesson Seven - Business</Link></li>
        <li><Link to="/lessons/8">Lesson Eight - Restaurant</Link></li>
      </ul>

    </div>
    )
} 

export default Lessons;