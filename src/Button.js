import dice from "./images/icon-dice.svg";

const Button = ({ setClick } ) => {
  const clickHandler = () => {
    setClick((click) => !click);
  }
  return (
    <button onClick={() => clickHandler()}><img id="dice" src={dice} alt="" /></button>
  )
}

export default Button