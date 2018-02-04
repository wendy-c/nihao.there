import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LessonContainer = styled.ul`
  list-style-type: none;

  li {
    margin: 0.5rem;
    padding: 1rem 2rem;
    border: 1px solid #ef5f4f;
    font-size: 1.5em;
    border-radius: 25px;
    font-weight: bold;
    text-align: left;
    min-width: 60%;
  }

  a {
    text-decoration: none;
    color: #ef5f4f;
  }
`;

const Lessons = props => {
  return (
    <div>
    <Nav/>
    <Container>
      <LessonContainer>
        <li>
          <Link to="/lessons/1">Lesson One - Animals</Link>
        </li>
        <li>
          <Link to="/lessons/2">Lesson Two - Fruits</Link>
        </li>
        <li>
          <Link to="/lessons/3">Lesson Three - People</Link>
        </li>
        <li>
          <Link to="/lessons/4">Lesson Four - Occupations</Link>
        </li>
        <li>
          <Link to="/lessons/5">Lesson Five - Transportations</Link>
        </li>
        <li>
          <Link to="/lessons/6">Lesson Six - Numbers</Link>
        </li>
        <li>
          <Link to="/lessons/7">Lesson Seven - Business</Link>
        </li>
        <li>
          <Link to="/lessons/8">Lesson Eight - Restaurant</Link>
        </li>
      </LessonContainer>
    </Container>
    </div>
  );
};

export default Lessons;