import React, { useState, useEffect } from "react";

const useDocTitle = (title) => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;