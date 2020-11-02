import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    console.log("Hi");
    try {
      const response = await yelp.post("/CM_DEPARTMENT_Search", {
        params: {
          // limit: 50,
          // term: searchTerm,
          // // location: 'san jose',
          // location: 'NYC'
        },
      });
      setResults(response.data.result.items);
    } catch (error) {
      console.log(error);
      //   setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi("DEP000000000072");
  }, []);
  // console.log('results: ', results);
  return [searchApi, results, errorMessage];
};
