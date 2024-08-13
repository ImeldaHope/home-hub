import React from "react";
import Hero from "../components/Hero";
import PropertyTypeCard from "../components/PropertyTypeCard";
import PropertyCard from "../components/PropertyCard";

function Home() {
  return (
    <>
      <Hero />
      <PropertyTypeCard />
      <section className="property_section">
        <small className="property_section-title_container">
          <em className="dash">———</em> Popular Properties
          <h2>
            Discover <em>Popular Properties</em>
          </h2>
        </small>
        <PropertyCard />
      </section>
    </>
  );
}

export default Home;
