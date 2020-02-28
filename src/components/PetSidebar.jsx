import React from "react";
import {
  SideBarSection,
  SummaryList
} from "@baltimorecounty/dotgov-components";

const adoptAblePetsSummaryItems = [
  {
    id: 1,
    icon: "fas fa-map-marker-alt",
    heading: "Main Office",
    content: "<p> 13800 Manor Road <br /> Baldwin, Maryland 212013</p>"
  },

  {
    id: 2,
    icon: "far fa-clock",
    heading: "Office Hours:",
    content: "<p>Monday through Friday<br />8 a.m. to 4:30 p.m.</p>"
  },
  {
    id: 21,

    heading: "Adoption Hours:",
    content:
      "<p>Monday through Friday<br />Noon to 6 p.m.</p><p>Saturday and Sunday<br/> Noon to 5 p.m.</p>"
  },
  {
    id: 22,

    heading: "Redemption Hours:",
    content:
      "<p>Monday through Friday<br />8 a.m. to 6 p.m.</p><p>Saturday and Sunday<br/> 8 a.m. to 5 p.m.</p>"
  },
  {
    id: 3,
    icon: "far fa-envelope",
    heading: "Email:",
    content: "<p><a href=`#`>rentalregistration@baltimorecountymd.gov</a></p>"
  },
  {
    id: 4,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content: "<p>410-887-PAWS (phone)</p> <p>410-817-4257 (fax)</p>"
  },
  {
    id: 6,
    icon: "fas fa-user",
    heading: "Chief:",
    content: "<p>Kevin Usilton</p>"
  }
];

const followUsSummaryItems = [
  {
    id: 1,
    icon: "dg_icon fab fa-facebook-square",
    heading: "Clean Green Baltimore County"
  },

  {
    id: 2,
    icon: "dg_icon fab fa-twitter",
    heading: "Severe Weather:",
    content:
      "<p>follow <a href=https://www.w3schools.com/>@baltcoemergency</></p>"
  },
  {
    id: 3,
    icon: "dg_icon fab fa-youtube",
    heading: "Youtube"
  }
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
