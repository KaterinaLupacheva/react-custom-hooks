import { useState, useEffect } from "react";
import useRoute from "./useRoute";

const useDocTitle = (title) => {
  const [docTitle, setDocTitle] = useState(title);
  const [, setRoute] = useRoute();

  useEffect(() => {
    document.title = docTitle;
    setRoute(docTitle);
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;
