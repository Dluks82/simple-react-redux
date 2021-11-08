import { connect } from "react-redux";
import Card from "./Card";

const Sorteio = (props) => {
  const { min, max } = props;

  const random = parseInt(Math.random() * (max + 1 - min)) + min;
  return (
    <Card title="Sorteio number" purple>
      <div>
        <span>
          <span>Result: </span>
          <strong>{random}</strong>
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
