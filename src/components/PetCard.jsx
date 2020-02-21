import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import PetInfoSection from "./PetInfoSection";
import PetThumbnail from "./PetThumbnail";
import React from "react";

const PetCard = props => {
  const {
    aboutMe,
    imageUrl,
    imageUrlAltText,
    animalName,
    animalId,
    url,
    attributes
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
          <div className="col-md-8 col-xs-12 dg_pet_info">
            <PetInfoSection attributes={attributes} animalId={animalId} />
          </div>
          <div>
            <p>About Me:</p>
            <p>{aboutMe}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
        <Button as="a" text="Details" href={url} />
      </CardFooter>
    </Card>
  );
};

export default PetCard;
