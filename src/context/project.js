import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectContext = React.createContext({
  data: [],
});

export const ProjectContextProvider = (props) => {
  const [allProjData, setAllprojData] = useState([]);
  useEffect(() => {
    async function Call() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/allpost`
        );

        setAllprojData(data.newData);
      } catch (err) {
        alert(err);
      }
    }
    Call();
    return () => {};
  }, []);

  return (
    <ProjectContext.Provider value={{ data: [...allProjData] }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectContext;
