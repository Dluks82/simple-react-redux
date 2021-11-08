import { connect } from "react-redux";
import Card from "./Card";
import "./Interval.css";
import { changeMinNumber, changeMaxNumber } from "../store/actions/numbers";

const Interval = (props) => {
  const { min, max, changeMin, changeMax } = props;
  return (
    <Card title="Numbers interval" red>
      <div className="Interval">
        <span>
          <strong>Min:</strong>
        </span>
        <input
          type="number"
          value={min}
          min={0}
          onChange={(e) => changeMin(+e.target.value)}
        />
        <span>
          <strong>Max:</strong>
        </span>
        <input
          type="number"
          value={max}
          onChange={(e) => changeMax(+e.target.value)}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeMin(newNumber) {
      // action creator => action
      const action = changeMinNumber(newNumber);
      dispatch(action);
    },
    changeMax(newNumber) {
      // action creator => action
      const action = changeMaxNumber(newNumber);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
