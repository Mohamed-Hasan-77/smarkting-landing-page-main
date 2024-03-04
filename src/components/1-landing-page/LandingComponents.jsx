import { Container } from "@mui/material";
import {
  DownloadBox,
  StepsFirstSection,
  FeaturesList,
  BadForThemGreatForYou,
  FirstProblem,
  SecondDownloadBox,
  SuccessStories,
  StepsSecondSection,
  BusinessCanBenefit,
  WhyGoingToLove,
  LeadsGoingToPay,
  WhyScrape,
  Faq,
  DataScraper,
  Header,
  MainSection,
  Pricing,
} from "../index";
import CostCalculator from "../small-components/CostCalculator";

// Import Images
import programImage from "../../../public/Images/smarketing_program_image.png"

function LandingComponents() {
  return (
    <div>
      <div className="header-and-main">
        <Header />
        <Container maxWidth="lg">
          <MainSection />
        </Container>
      </div>
      <div className="sections">
        <DownloadBox />
        <Container maxWidth="lg">
          <StepsFirstSection />
        </Container>
        <FeaturesList />
        <Container maxWidth="lg">
          <BadForThemGreatForYou />
        </Container>
        <FirstProblem />

        <Container maxWidth="lg">
          <SecondDownloadBox
            src={
              programImage
            }
          />
        </Container>
        <SuccessStories />
      </div>
      <div className="sections">
        <StepsSecondSection />
      </div>
      <div className="sections">
        <BusinessCanBenefit />
        <Container maxWidth="lg" style={{paddingTop: "80px"}}>
          <SecondDownloadBox
            src={
              programImage
            }
          />
        </Container>
        <WhyGoingToLove />
        <Container maxWidth="lg">
          <LeadsGoingToPay />
        </Container>
        <CostCalculator />

        <Container maxWidth="lg">
          <WhyScrape />
        </Container>

        <DataScraper />

        

        <Pricing />
        <Container maxWidth="lg">
          <Faq />
        </Container>
      </div>
    </div>
  );
}

export default LandingComponents;
