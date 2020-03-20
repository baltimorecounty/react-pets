import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = endPoint => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    GetPets(endPoint)
      .then(response => setResponse(response))
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [endPoint]);

  return [
    {
      hasError,
      response,
      isLoading
    }
  ];
};

export default usePets;
