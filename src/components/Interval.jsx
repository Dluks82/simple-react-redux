import { connect } from "react-redux";
import Card from "./Card";
import "./Interval.css";

const Interval = (props) => {
  const { min, max } = props;
  return (
    <Card title="Numbers interval" red>
      <div className="Interval">
        <span>
          <strong>Min:</strong>
        </span>
        <input type="number" value={min} min={0} readOnly />
        <span>
          <strong>Max:</strong>
        </span>
        <input type="number" value={max} readOnly />
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

export default connect(mapStateToProps)(Interval);
