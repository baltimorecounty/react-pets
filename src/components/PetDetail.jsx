import PetAttributeRows from "./PetAttributeRows";
import PetThumbnail from "./PetThumbnail";
import { FormatDate } from "../utilities/DateFunctions";
import { SocialMediaButton } from "@baltimorecounty/dotgov-components";
import React from "react";

const PetDetail = (props) => {
  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes,
    animalName,
    animalId,
    gender,
    dateAdoptedRedeemed,
    petType,
    showShareList = false,
  } = props;

  const shareURL = window.location.href.replace("#", "%23");
  const shareTwitterText = `https://twitter.com/intent/tweet?text=Please%20consider%20adopting%20${animalName}&url=${shareURL}`;
  const shareFaceBookText = `https://www.facebook.com/sharer/sharer.php?u=${shareURL}`;

  console.log(shareURL);
  return (
    <div className="container">
      <h2>{animalName}</h2>
      <div className="row">
        <div className="col-md-8 col-xs-12">
          <p>{aboutMe}</p>
        </div>
        <div className="col-md-4 col-xs-12">
          <PetThumbnail
            thumbnail={imageUrl}
            thumbnailAltText={imageUrlAltText}
            animalName={animalName}
            gender={gender}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PetAttributeRows
            attributes={attributes}
            animalId={animalId}
            gender={gender}
            dateAdoptedRedeemed={FormatDate(dateAdoptedRedeemed)}
            petType={petType}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {showShareList ? (
            <div className="dg_actions-list">
              <ul>
                <li>
                  <SocialMediaButton
                    id="twitterButtonPets"
                    className="dg_Button"
                    title="Share on Twitter"
                    href={shareTwitterText}
                    icon="twitter"
                    content="Twitter"
                  />
                </li>
                <li>
                  <SocialMediaButton
                    id="facebookButtonPets"
                    href={shareFaceBookText}
                    target="_blank"
                    title="Share on Facebook"
                    icon="facebook"
                    className="dg_button"
                    content="Facebook"
                  />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
