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
    heading: "Hours:",
    content: "<p>Monday through Friday<br />8 a.m. to 4:30 p.m.</p>",
  },
  {
    id: 21,

    heading: "Adoption Hours:",
    content:
      "<p>Monday through Friday<br />Noon to 6 p.m.</p><p>Saturday and Sunday<br/> Noon to 5 p.m.</p>",
  },
  {
    id: 22,

    heading: "Redemption And Surrender Hours:",
    content:
      "<p> By Appointment Only</p><p>Monday through Friday<br />8 a.m. to 6 p.m.</p><p>Saturday and Sunday<br/> 8 a.m. to 5 p.m.</p>",
  },
  {
    id: 3,
    icon: "far fa-envelope",
    heading: "Email:",
    content: "<p><a href=mailto:animalservices@baltimorecountymd.gov>animalservices@baltimorecountymd.gov</a></p>",
  },
  {
    id: 4,
    icon: "fas fa-mobile-alt",
    heading: "Phone:",
    content: "<p>410-887-PAWS (phone)</p> <p>410-817-4257 (fax)</p>",
  },
  {
    id: 5,
    icon: "fas fa-exclamation-circle",
    heading: "Baltcogo311:",
    content:
      "<p><a href='https://www.baltimorecountymd.gov/report-problem/'/>Report a problem</a></p>",
  },
  {
    id: 6,
    icon: "fas fa-user",
    heading: "Chief:",
    content: "<p>Dr. Sandra Andrulis.</p>",
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
