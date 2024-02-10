import {
  Bad,
  Good,
  Neutral,
  Positive,
  StatisticList,
  Total,
} from './Statistics.module';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <li>
        <Good>Good: {good}</Good>
      </li>
      <li>
        <Neutral>Neutral: {neutral}</Neutral>
      </li>
      <li>
        <Bad>Bad: {bad}</Bad>
      </li>
      <li>
        <Total>Total: {total}</Total>
      </li>
      <li>
        <Positive>Positive feedback: {positivePercentage}</Positive>
      </li>
    </StatisticList>
  );
};
