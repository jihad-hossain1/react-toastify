import React from "react";
import Notification from "../components/notification";


const divPosition = {
    "top-left": "top-2 fixed z-50",
    "bottom-left": "fixed z-50 left-2 bottom-2",
    "top-right": "right-2 fixed z-50 top-2",
    "bottom-right": "right-2 fixed z-50 bottom-2",
    "top-center": "top-2 fixed z-50 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-2 fixed z-50 left-1/2 -translate-x-1/2",
};

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = React.useState(null);


  let timer ;
  const triggerNotification = (porps) => {
    clearTimeout(timer);
    setNotification(porps);
    setTimeout(() => {
      setNotification(null);
    }, porps.duration || 1000);
  };

  const NotificationComponent = notification ? (
    <div className={`${divPosition[position]}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return {NotificationComponent, triggerNotification};
};

export default useNotification;
