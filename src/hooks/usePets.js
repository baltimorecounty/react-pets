import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = initialEndPoint => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [petsItems, setPetsItems] = useState([]);
  const [petsEndPoint, setPetsEndPoint] = useState(initialEndPoint);

  useEffect(() => {
    GetPets(petsEndPoint)
      .then(({ records }) => {
        setPetsItems([...records]);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [petsEndPoint]);

  return [
    {
      hasError,
      petsItems,
      isLoading
    },
    {
      setPetsEndPoint
    }
  ];
};

export default usePets;
