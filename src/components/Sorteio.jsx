import { connect } from "react-redux";
import Card from "./Card";

const Sorteio = (props) => {
  const { min, max } = props;

  const sorteio = parseInt(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio number" purple>
      <div>
        <span>
          <span>Result: </span>
          <strong>{sorteio}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
};
export default connect(mapStateToProps)(Sorteio);
