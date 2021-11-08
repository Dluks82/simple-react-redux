import { connect } from "react-redux";
import Card from "./Card";

const Soma = (props) => {
  const { min, max } = props;
  return (
    <Card title="Soma numbers" blue>
      <div>
        <span>
          <span>Result: </span>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma);
