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
        <input
          type="number"
          value={min}
          min={0}
          max={max - 1}
          onChange={(e) => props.onMinChange(+e.target.value)}
        />
        <span>
          <strong>Max:</strong>
        </span>
        <input
          type="number"
          value={max}
          min={min + 1}
          onChange={(e) => props.onMaxChange(+e.target.value)}
        />
      </div>
    </Card>
  );
};

export default Interval;
