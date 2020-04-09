import {
  Button,
  Card,
  CardContent,
  CardFooter,
} from "@baltimorecounty/dotgov-components";

import { Link } from "react-router-dom";
import PetAttributeRows from "./PetAttributeRows";
import PetThumbnail from "./PetThumbnail";
import React from "react";

const PetCard = (props) => {
  const {
    imageUrl,
    imageUrlAltText,
    animalName,
    animalId,
    attributes,
    url,
  } = props;

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
        <Link className="dg_button" to={`/pets/${animalId}`}>
          Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
