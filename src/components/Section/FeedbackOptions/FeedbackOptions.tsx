import React from "react";

interface PropsType {
  onLeaveFeedback: any;
}

const FeedbackOptions: React.FC<PropsType> = ({ onLeaveFeedback }) => {
  return (
    <div className="control">
      <button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
