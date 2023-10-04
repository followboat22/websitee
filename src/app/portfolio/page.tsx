import React from "react";

import { InnerMain } from "@components/InnerMain";
import { FeaturesSection } from "@components/Sections/FeaturesSection";

const PortfolioPage = () => {
  return (
    <React.Fragment key={"portfolio"}>
      <InnerMain style={"body-bg-style-3"}>
        <h1>Portfolio</h1>
        <p>
          We use strategic approaches to provide our clients with high-end.
          <br />
          services that ensure superior customer satisfaction.
        </p>
      </InnerMain>
      {/* <FeaturesSection title="Featured Projects" slice={3} item={true} /> */}
      <FeaturesSection title="D2C Services" slice={3} item={false} />
    </React.Fragment>
  );
};

export default PortfolioPage;
