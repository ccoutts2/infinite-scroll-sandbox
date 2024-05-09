"use client";

import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const scrollInfo = useRef();

  useEffect(() => {
    let percentage = 0;

    const lenis = new Lenis({
      duration: 1.2,
      infinite: true,
      smoothWheel: true,
    });

    lenis.on("scroll", ({ scroll, limit }) => {
      percentage = (scroll / limit) * 100;
      if (scrollInfo.current) {
        scrollInfo.current.textContent = `${percentage.toFixed(0)}%`;
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section>
      <nav className="nav">
        <div className="navWrapper">
          <div className="navLogo">
            <span>ewm bespoke interiors</span>
          </div>
          <div className="navExtra">
            <span>case study</span>
          </div>
        </div>
      </nav>
      <section className="app">
        <div className="section">
          <div className="sectionWrapper">
            <div className="sectionCol">
              <div className="sectionColContainer">
                <img className="sectionColImage" src="/assets/images/ewm1.jpg" />
                <img className="sectionColImage" src="/assets/images/ewm2.jpg" />
                <img className="sectionColImage" src="/assets/images/ewm3.jpg" />
                <img className="sectionColImage" src="/assets/images/ewm4.jpg" />
                <img className="sectionColImage" src="/assets/images/ewm5.jpg" />
                <img className="sectionColImage" src="/assets/images/ewm6.jpg" />
              </div>
              <div className="sectionColContainer --clone">
                <img className="sectionColImage" src="/assets/images/ewm1.jpg" />
              </div>
            </div>

            <div className="sectionCol">
              <div className="sectionColContainer">
                <div className="sectionColHeading">
                  <h1>New Street Project</h1>
                </div>
                <div className="sectionColDescription">
                  <div className="sectionColInfo">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi ipsum cupiditate voluptatibus vitae modi, corrupti
                      ipsa provident esse omnis nemo repellat repellendus corporis
                      odit sint temporibus beatae id? Voluptates, dignissimos.
                    </span>
                  </div>
                  <ul className="sectionColRole">
                    <li>joinery</li>
                    <li>interior design</li>
                  </ul>
                  <ul className="sectionColAwards">
                    <li>transformation of the year</li>
                  </ul>
                </div>
                <div className="sectionColLink">
                  <h2>View Project</h2>
                </div>
                <div className="sectionColScroll">
                  <span ref={scrollInfo}>0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
