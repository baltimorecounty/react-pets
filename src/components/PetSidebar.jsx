import React from "react";
import {
  SideBarSection,
  SummaryList,
} from "@baltimorecounty/dotgov-components";

const adoptAblePetsSummaryItems = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt",
    heading: "Animal Services",
    content: "<p> 13800 Manor Road <br /> Baldwin, Maryland 21013</p>",
  },

  {
    id: 2,
    icon: "far fa-clock",
    heading: "Office Hours:",
    content: "<p>Monday to Friday<br />8 a.m. to 4 p.m.</p>",
  },
  {
    id: 21,

    heading: "Adoption Hours:",
    content:
    "<p>Tuesday to Sunday<br />Noon to 5 p.m.</p>",
  },
  {
    id: 22,

    heading: "Redemption Hours:",
    content:
    "<p>Daily<br />9 a.m. to 4 p.m.</p>",
  },
  {
    id: 23,

    heading: "Owner Surrender Hours:",
    content:
      "<p>Tuesday to Sunday<br />9 a.m. to Noon</p>",
  },
  {
    id: 24,

    heading: "Stray Intake Hours:",
    content:
      "<p>Daily<br />9 a.m. to 4 p.m.</p>",
  },
  {
    id: 3,
    icon: "far fa-envelope",
    heading: "Email:",
    content: "<p><a href='mailto:animalservices@baltimorecountymd.gov'>animalservices<br>@baltimorecountymd.gov</a></p>",
  },
  
  {
    id: 4,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content: "<a href='tel:410-887-7297'>410-887-PAWS (7297)</a></p>",
  },
  {
    id: 41,
    icon: "fas fa-mobile-alt",
    heading: "Fax:",
    content: "<p>410-817-4257</p>",
  },
  {
    id: 5,
    icon: "fas fa-user",
    heading: "Division Chief:",
    content: "<p>Carrie McCloskey</p>",
  },
];

const followUsSummaryItems = [
  {
    id: 1,
    icon: "dg_icon fab fa-facebook-square",
    heading: "Animal Services",
    content:
      "<p>follow <a href=https://www.facebook.com/BaltCoAnimalServices/</>@BaltCoAnimalServices</p>",
  },
];

const PetSidebar = () => {
  const sideBar = <SummaryList items={adoptAblePetsSummaryItems} />;
  const followUsSideBar = <SummaryList items={followUsSummaryItems} />;

  return (
    <div className="dg_sidebar">
      <SideBarSection title="Contact Us">{sideBar}</SideBarSection>
      <SideBarSection title="Follow Us">{followUsSideBar}</SideBarSection>
    </div>
  );
};

export default PetSidebar;
