import { useEffect, useState } from "react";
import { GetPets } from "../services/ApiService";

const usePets = (initialEndPoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMoreEndPoint, setLoadMoreEndPoint] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [petsItems, setPetsItems] = useState([]);
  const [petsEndPoint, setPetsEndPoint] = useState(initialEndPoint);
  const [executeLoadMore, setExecuteLoadMore] = useState(false)
  const [petsFilters, setPetsFilters] = useState([]);
  console.log('*********************');
  console.log(initialEndPoint);
  console.log('*********************');
  useEffect(() => {
    GetPets(petsEndPoint)
      .then(({  metaData, records }) => {
      
        console.log('executeLoadMore:'+ executeLoadMore);
        setPetsItems(items =>
          executeLoadMore ? [...items, ...records] : [...records]
      );
      setLoadMoreEndPoint(metaData.links.next);
      //setNewsRoomTotalRecords(metaData.totalRecords);
        })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [petsEndPoint,petsFilters,executeLoadMore]);
  console.log('hasError:' + hasError);
  return [
    {
      hasError,
      petsItems,
      isLoading,
     // loadMoreEndPoint,
     // newsRoomTotalRecords,
      //executeLoadMore,
  
    },
    {
      setPetsEndPoint,
      setPetsFilters,
      setExecuteLoadMore
    }
  ];
};

export default usePets;
