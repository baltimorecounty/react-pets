import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = endPoint => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [petsItems, setPetsItems] = useState([]);
  useEffect(() => {
    GetPets(endPoint)
      .then(({ records }) => {
        setPetsItems([...records]);
      })
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
      petsItems,
      isLoading
    }
  ];
};

export default usePets;
