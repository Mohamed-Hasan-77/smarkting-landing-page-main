import "./fact.scss";

// MUI Icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";


// Import Image
import factsImage from "../../../public/Images/facts-img.png"





function Fact() {
  return (
    <div className="fact-section-container">
      <h1>FACT</h1>
      <div className="text-section">
        <h2>
          Only 44% of Local Businesses Have Claimed A{" "}
          <span>Google Business Profile</span>
        </h2>
        <p className="subtitle">(Formerly Known As Google My Business)</p>
        <p className="description">
          Even with all the advancements of technology, we still find it
          incredible that{" "}
          <span>
            over half of local businesses have yet to claim their Google
            Business Profile.
          </span>{" "}
          By leaving their listing unclaimed, they&apos;re missing out on a TON
          of traffic and potential sales for their business.
        </p>
      </div>
      <div className="fact-box">
        <ul>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              Finding customers can be difficult without being a household name
            </p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>Increasing brand awareness has been challenging</p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              Most don&apos;t have a social media presence or they&apos;re not
              using it consistently to connect with their audience
            </p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              56% have neglected their GBP which means they&apos;re giving away
              free sales to their competitors (by the way, this is always a way
              to get your foot in the door)
            </p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              They don&apos;t know how to maintain an email list or database and
              send promotions that will increase sales
            </p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              They don&apos;t respond to negative reviews which only hurts their
              future business
            </p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              They have poor unresponsive web design and/or no mobile design.
              This means that since half of traffic is on mobile, they&apos;re
              missing out on sales.
            </p>
          </li>
          <li>
            <TaskAltIcon className="fact-check-icon" />
            <p>
              They don&apos;t spend money on ads, or they&apos;re using outdated
              advertising like Yellowpages.
            </p>
          </li>
        </ul>
        <div className="image-section">
          {/* <img src="" alt="Not Found" loading="lazy" /> */}
          <img
            src={factsImage}
            alt="Not Found"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Fact;
