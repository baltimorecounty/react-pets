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
    content:
      "<p> 111 West Chesapeake Avenue<br /> Suite 307<br /> Towson, Maryland 21204</p>"
  },

  {
    id: 2,
    icon: "far fa-clock",
    heading: "Hours:",
    content: "<p>Monday through Friday<br />8 a.m. to 4:30 p.m.</p>"
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
    content:
      "<p><a href=`tel:410-887-6789`>410-887-6789</a></p><p><h3>Emergency Dispatch:</h3></p><p><a href=`tel:410-887-6789`>410-887-6789</a></p>"
  },
  {
    id: 6,
    icon: "fas fa-user",
    heading: "Director:",
    content: "<p>Steve Walsh, P.E.</p>"
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
      "<p>follow <a href=https://www.w3schools.com/>@baltcoemergency</a></p>"
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
