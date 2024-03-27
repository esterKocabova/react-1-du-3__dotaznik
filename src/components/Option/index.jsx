import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({type, text, onSelected}) => {

  return (
    <div onClick={() => onSelected(type)} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};


// Stav answered uvnitř komponenty Question přejmenujte na answer. Nyní bude obsahovat řetězec s typem ikonky pro QuestionBody. Výchozí hodnota stavu bude symbolQuestion.
// Zařiďte, aby komponenta QuestionBody zobrazovala místo symbolQuestion nebo iconTick ikonku odpovědi, na kterou uživatel kliknul.
// Nyní budeme potřebovat, aby nám komponenta Option skrze callback předala typ ikonky, na kterou uživatel kliknul. Komponenta Option tedy musí callbacku onSelected předat typ ikony, kterou zobrazuje.
// Funkce handleSelect v komponentě Question bude pak mít jeden parametr, který nazveme iconType. Jakmile se tato funkce zavolá, nastavíme náš stav answer na hodnotu získanou v tomto parametru.
