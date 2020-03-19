import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = endPoint => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [petItems, setPetItems] = useState([]);
  useEffect(() => {
    GetPets(endPoint)
      .then(response => {
        const { records } = response;
        records ? setPetItems([...records]) : setPetItems(response);
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
      petItems,
      isLoading
    }
  ];
};

export default usePets;
