import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import PetAttributesSection from "./PetAttributesSection";
import { Link } from "react-router-dom";
import PetThumbnail from "./PetThumbnail";
import React from "react";

const PetCard = props => {
  const { imageUrl, imageUrlAltText, animalName, animalId, attributes } = props;

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
            <PetAttributesSection attributes={attributes} animalId={animalId} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
        <Link to={`/petDetails/${animalId}`}>
          <Button as="a" text="Details" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
