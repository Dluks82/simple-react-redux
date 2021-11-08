import Card from "./Card";
import { connect } from "react-redux";

const Media = (props) => {
  const { min, max } = props;
  return (
    <Card title="Media numbers" green>
      <div>
        <span>
          <span>Result: </span>
          <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
