import React from "react";
import {
  AlternateList,
  AlternateListItem,
  CountySeal,
  IconLink,
  BrandText,
  Section
} from "@baltimorecounty/dotgov-components";

import {
  FindInformationItems,
  PoliciesItems,
  TranslateItems
} from "../files/FooterData";

const LogoSection = () => (
  <div>
    <div className="dg_footer-section dg_seal-container">
      <CountySeal />
    </div>
    <div className="dg_footer-section">
      <BrandText header="Baltimore County" description="Government" />
    </div>
    <div className="dg_footer-section">
      <a
        className="dg_inline-icon-link"
        href="https://www.google.com/maps?q=400+Washington+Avenue,+Towson+Maryland+21204&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=0ahUKEwiOn7vd5qLgAhWpnOAKHWVfBqIQ_AUIDigB"
      >
        <i className="fa fa-map-marker-alt dg_lg_gray" aria-hidden="true"></i>
        400 Washington Avenue, Towson Maryland 21204
      </a>
    </div>
  </div>
);

const BaltcoGoSection = () => (
  <div>
    <div className="dg_footer-section">
      <img
        className="img-fluid"
        src="//staging.baltimorecountymd.gov/sebin/t/o/homepage-baltcogo-logo-dark.png"
        alt="BaltCoGo Logo"
      />
    </div>
    <div className="dg_footer-section">
      <p className="dg_download-blurb">Download now on:</p>
      <ul className="dg_alt-list inline">
        <li>
          <a href="https://itunes.apple.com/us/app/baltcogo/id1200046300">
            <i className="fab fa-apple dg_lg_gray" aria-hidden="true"></i> App
            Store
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.citysourced.baltimorecountymd&hl=en">
            <i className="fab fa-google-play dg_lg_gray" aria-hidden="true"></i>
            Google Play
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const SiteFooter = props => {
  return (
    <footer className="dg_county-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Section className="dg_primary-footer">
              <div className="dg_brand-footer">
                <LogoSection />
                <BaltcoGoSection />
              </div>
              <div className="dg_footer-list-column">
                <div>
                  <h3>Find Information</h3>
                  <AlternateList>
                    {FindInformationItems.map(item => (
                      <AlternateListItem
                        key={item.title}
                        link={item.link}
                        linkText={item.linkText}
                      />
                    ))}
                  </AlternateList>
                </div>
                <div>
                  <h3>Policies</h3>
                  <AlternateList>
                    {PoliciesItems.map(item => (
                      <AlternateListItem
                        key={item.title}
                        link={item.link}
                        linkText={item.linkText}
                      />
                    ))}
                  </AlternateList>
                </div>
              </div>
              <div className="dg_footer-list-column">
                <div>
                  <h3>Connect With Us</h3>
                  <div className="dg_social-icon_container">
                    <IconLink
                      size="small"
                      href="#linkbutton-default"
                      id="linkbutton-default"
                      type="circle"
                      icon="fab fa-facebook-square"
                      description="Visit the Baltimore County Facebook Page"
                    />
                    <IconLink
                      size="small"
                      href="#linkbutton-default"
                      id="linkbutton-default"
                      type="circle"
                      icon="fab fa-twitter"
                      description="Visit the Baltimore County Twitter Page"
                    />
                    <IconLink
                      size="small"
                      href="#linkbutton-default"
                      id="linkbutton-default"
                      type="circle"
                      icon="fab fa-youtube"
                      description="Visit the Baltimore County YouTube Page"
                    />
                  </div>
                </div>
                <div>
                  <h3>Translate</h3>
                  <AlternateList>
                    {TranslateItems.map(item => (
                      <AlternateListItem
                        key={item.title}
                        link={item.link}
                        linkText={item.linkText}
                      />
                    ))}
                  </AlternateList>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
      <div className="dg_secondary-footer">
        <div className="container">
          <div className="row">
            <div className="dg_copyright col">
              © Copyright 2019 Baltimore County Government
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
