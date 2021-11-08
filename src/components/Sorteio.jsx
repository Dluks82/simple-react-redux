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

export default Sorteio;
