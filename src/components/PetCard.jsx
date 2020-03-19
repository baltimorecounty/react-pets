import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import PetAttributeRows from "./PetAttributeRows";
import { Link } from "react-router-dom";
import PetThumbnail from "./PetThumbnail";
import React from "react";

const PetCard = props => {
  const {
    id,
    imageUrl,
    imageUrlAltText,
    animalName,
    animalId,
    attributes,
     url
  } = props;

  //console.log("props:" + JSON.stringify(props));
  //http://localhost:54727/api/hub/pets?id=" + animalId + `&status=adoptable`;
 // let url =
  //  "`https://petsdev.bcg.ad.bcgov.us/api/pets?" +
  //  animalId +
   // `&status=adoptable`;
 // console.log("url:" + url);
  return (
    <Card className="text-left">
      <h2>{animalName}</h2>
      <CardContent>
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <PetThumbnail
              thumbnail={imageUrl}
              thumbnailAltText={imageUrlAltText}
            />
          </div>
          <div className="col-md-8 col-xs-12">
            <PetAttributeRows attributes={attributes} animalId={animalId} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
         <Link to={`/petDetails/${animalId}`}> 

        <Button as="a" text="Details" href={url} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
