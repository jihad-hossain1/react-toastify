import React, { useCallback, useState, useEffect } from "react";
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
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  const triggerNotification = useCallback((props) => {
    if (timer) {
      clearTimeout(timer);
    }

    setNotification(props);
    setIsVisible(true);

    const newTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setNotification(null);
      }, 300);
    }, props.duration || 1000);

    setTimer(newTimer);
  }, [timer]);

  const handleClose = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsVisible(false);
    setTimeout(() => {
      setNotification(null);
    }, 300);
  };

  const NotificationComponent = notification ? (
    <div
      className={`${divPosition[position]} transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Notification {...notification} onClose={handleClose} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
