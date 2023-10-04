"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BackgroundShape } from "@components/BackgroundShape";
import { Col, Container, Row } from "react-bootstrap";
import { CDN } from "@utils/constant";

const CaseStudySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    delay: 2000,
  };

  const sliders = [
    // {
    //   title: "Make Your Business Flourish Online",
    //   description:
    //     "In today's digital era, businesses must establish a robust online presence for effective customer engagement. The ubiquitous use of digital devices and online platforms makes it imperative. By taking proactive steps to embrace the digital realm, companies can significantly enhance visibility, broaden their reach, and access diverse markets. Leveraging various digital marketing channels, they proactively promote products and services, establish a distinctive brand identity, and cultivate enduring relationships with valued customers.",
    // },
    {
      title: "Case Study",
      description:
        'Discover one of our latest triumphs - a partnership with the innovative Web3 entity, NUVO. With our strategic input, NUVO experienced remarkable growth, driven by meticulously executed Discord and Twitter campaigns. Our proven track record in implementing agile marketing strategies ensures rapid and substantial results.',
    },
    {
      title: "Check Out Our Testimonials",
      description:
        "Explore the feedback from our esteemed clientele, spanning diverse sectors including Instagram influencers and cutting-edge tech startups. Our track record showcases our prowess in efficiently scaling businesses, all while maintaining a competitive pricing advantage. Discover what all of our satisfied clients have to say about their experiences with our services.",
    },
  ];

  return (
    <section className="case-study small-agency-case-study">
      {/* <BackgroundShape direction={"left"} className={"shape-home-banner"} /> */}
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2">
            <Slider className="case-study-slider" {...settings}>
              {sliders.map(({ title, description }, index) => {
                return (
                  <div className="item" key={index}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="btn-container">
                      <Link href={"/studies"} className="custom-btn btn-big grad-style-ab">
                        SEE THE CASE STUDY
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
          <Col lg={6} className="img-container">
            <Image
              src={CDN + "/images/case-study/case-study-slide-1.svg"}
              alt={"case-study"}
              className="img-fluid"
              width="635"
              height="654"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { CaseStudySection };
