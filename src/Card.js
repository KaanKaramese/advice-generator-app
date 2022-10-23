import Header from "./Header";
import Advice from "./Advice";
import Divider from "./Divider";
import Button from "./Button";

const Card = ({ advice, id, setClick, fetchError }) => {
  return (
    <section className="card-container">
        <Header id={id}/>
        <Advice advice={advice} fetchError={fetchError}/>
        <Divider />
        <Button setClick={setClick}/>
    </section>
  )
}

export default Card