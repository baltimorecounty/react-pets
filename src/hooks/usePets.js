import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [petItems, setPetItems] = useState([]);

  useEffect(() => {
    GetPets()
      .then(({ records }) => {
        setPetItems(records);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { hasError, isLoading, petItems };
};

export default usePets;
