import Card from "./Card";

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

export default Media;
