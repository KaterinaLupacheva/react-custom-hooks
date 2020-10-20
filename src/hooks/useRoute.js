import { useState, useEffect } from "react";

const useRoute = (initialRoute) => {
  const [route, setRoute] = useState(initialRoute);

  useEffect(() => {
    window.history.pushState(null, "", route);
  }, [route]);

  return [route, setRoute];
};

export default useRoute;
