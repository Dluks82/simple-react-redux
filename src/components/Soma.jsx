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

export default Soma;
