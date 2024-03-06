import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import { useState } from 'react';

export const Question = ({text}) => {
  const [answered, setAnswered] = useState(false)

  return (
    <div className="question">
      <QuestionBody 
        iconType="symbolQuestion" 
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím"/>
        <Option type="smileyYes" text="Spíše souhlasím"/>
        <Option type="smileyNeutral" text="Nevím"/>
        <Option type="smileyNo" text="Spíše nesouhlasím"/>
        <Option type="smileyStrongNo" text="Nesouhlasím"/>
      </div>
    </div>
  );
};
