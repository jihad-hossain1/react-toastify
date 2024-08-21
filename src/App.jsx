

import React from "react";
import { useNotificationContext } from "../context/NotificationProvider";

const App = () => {
  const { triggerNotification } = useNotificationContext();
  const [loading , setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')


  const hanleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      triggerNotification({
        type: "error",
        message: "Success notification! , Message sent successfully , Thank you! , Happy coding!",
        duration: 1500,
        position: "top-right", // Position dynamically set here
      });
    }, 1000);
  }
  return (
    <div>
      <h4 className="text-center font-bold text-2xl">
        React Notification (Tostify){" "}
      </h4>


     <div className="flex flex-col gap-3">
     <input type="text" placeholder="Enter message" className="border border-gray-400 p-2 max-w-[300px]" onChange={(e) => setMessage(e.target.value)} value={message} />
      <button
         onClick={hanleSubmit}
        className="bg-blue-500 text-white w-fit p-2 rounded"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
     </div>
    </div>
  );
};

export default App;
