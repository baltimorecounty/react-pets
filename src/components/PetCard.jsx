import {
  Card,
  CardContent,
  CardFooter,
} from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";
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
    gender,
    dateAdoptedRedeemed,
    petType,
  } = props;

  return (
    <Card className="text-left">
      <h2>{ReactHtmlParser(animalName)}</h2>
      <CardContent>
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <PetThumbnail
              thumbnail={imageUrl}
              thumbnailAltText={imageUrlAltText}
              animalName={animalName}
              gender={gender}
            />
          </div>
          <div className="col-md-8 col-xs-12">
            <PetAttributeRows
              attributes={attributes}
              animalId={animalId}
              gender={gender}
              dateAdoptedRedeemed={dateAdoptedRedeemed}
              petType={petType}
            />
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
