import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";
type cardListProp = {
  monsters: Monster[];
};
const CardList = ({ monsters }: cardListProp) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
