import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = initialEndPoint => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    GetPets()
      .then(({ records }) => {})
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { hasError, isLoading };
};

export default usePets;
