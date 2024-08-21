import React from "react";
import useNotification from "../hooks/use-notification";

const App = () => {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-center");
  return (
    <div>
      <h4 className="text-center font-bold text-2xl">
        React Notification (Tostify){" "}
      </h4>

      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            message: "New notification info",
            duration: 3000,
          })
        }
      >
        Open Notification
      </button>

      {NotificationComponent}

    </div>
  );
};

export default App;
