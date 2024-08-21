import React from "react";

import { CheckIcon, ErrorIcon, InfoIcon, CloseIcon } from "./icons.jsx";

const iconsType = {
  info: <InfoIcon />,
  success: <CheckIcon />,
  warning: <InfoIcon />,
  error: <ErrorIcon />,
};

const notifyBgColor = {
  info: "bg-blue-600",
  success: "bg-green-600",
  warning: "bg-yellow-400",
  error: "bg-red-600",
};



const Notification = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div
      className={`${notifyBgColor[type]} text-white p-3 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center gap-2 w-fit border`}
    >
      {iconsType[type]}
      <span>{message}</span>
      <CloseIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
    </div>
  );
};

export default Notification;
