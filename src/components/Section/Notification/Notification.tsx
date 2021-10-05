import React from "react";

const Notification: React.FC<{ message: string }> = ({ message }) => {
  return <span>{message}</span>;
};

export default Notification;
