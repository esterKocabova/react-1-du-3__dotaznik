import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text}) => {
  return (
    <div className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};


// Prohlédněte si komponentu Option. Přepište ji tak, aby používala destrukturování props.
// Totéž proveďte s komponentami Question a QuestionBody.