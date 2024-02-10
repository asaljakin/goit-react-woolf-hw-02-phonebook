import { BtnWrapper } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => (
        <button key={option} name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </BtnWrapper>
  );
};
