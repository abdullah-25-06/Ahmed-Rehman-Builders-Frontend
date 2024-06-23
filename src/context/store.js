import axios from "axios";
import React, { useEffect, useState } from "react";

const DataContext = React.createContext({
  data: [],
  updateContext() {},
});

export const DataContextProvider = (props) => {
  const [projData, setProjData] = useState([]);
  useEffect(() => {
    async function Call() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/viewpost`,
          {
            headers: {
              auth_token: localStorage.getItem("token"),
            },
          }
        );
        setProjData(data.data);
      } catch (err) {
        // alert(err);
      }
    }
    localStorage.getItem("token") && Call();
    return () => {};
  }, []);
  const updateContext = (updatedObj) => {
    setProjData((prevObj) => {
      return prevObj.map((obj) => {
        if (obj._id === updatedObj._id) {
          return updatedObj;
        } else {
          return obj;
        }
      });
    });
  };
  const updateContext2 = (id) => {
    const newData = projData.map((obj) => {
      if (obj._id !== id) return obj;
      else return null
    });
    setProjData([...newData]);
  };
  return (
    <DataContext.Provider
      value={{
        data: [...projData],
        updateContext: updateContext,
        updateContext2: updateContext2,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
