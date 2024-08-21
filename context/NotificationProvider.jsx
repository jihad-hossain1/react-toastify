

import React, { createContext, useContext } from "react";
import useNotification from "../hooks/use-notification";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const { NotificationComponent, triggerNotification } =
    useNotification();

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      {NotificationComponent}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);

