import { useEffect, useState } from "react";

import { GetPet } from "../services/ApiService";

const usePet = (animalId, status) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [animal, setAnimal] = useState();

  useEffect(() => {
    GetPet(animalId, status)
      .then((animal) => {
        setAnimal(animal);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [animalId, status]);

  return [
    {
      animal,
      hasError,
      isLoading,
    },
  ];
};

export default usePet;
