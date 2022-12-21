/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import BlankCard from "./layout/BlankCard";

const AboutUs = () => {
  return (
    <section
      className="hero is-medium is-bold"
      style={{ height: "100%" }}
      id="about"
    >
      <div className="hero-body columns" style={{ paddingBottom: "2rem" }}>
        <div className="coulmn is-6">
          <BlankCard>
            <a
              href="https://scodein.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.legalzoom.com/sites/lz.com/files/inline-images/articles/how_to_spot_business_opportunities_in_a_down_economy_1.jpg.pagespeed.ce.EwpkpM9_RV.jpg"
                alt="student mantra"
                width="100%"
                style={{ borderRadius: "14px" }}
              />{" "}
            </a>
          </BlankCard>
        </div>
        <div className="column is-6" style={{ marginTop: '140px' }}>
          <BlankCard className="container">
            <h1 className="title">
              Wonder what/why we are?
            </h1>
            <h2 className="subtitle has-text-weight-semibold">

              <p>
                {" "}
                - We aim to provide information of some of the popular Campus
                Ambassador programs, Scholarships and Job
                Opportunities.
              </p>
              <p>
                {" "}
                - The pivot of our concern is in making every developer and
                enthusiastic learner, leader and achiever to contribute and interact
                to amazing people in and around
                industry.
              </p>
            </h2>
          </BlankCard>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
