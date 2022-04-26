import ChildrenProfileBanner from "./ChildrenProfileBanner/ChildrenProfileBanner";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import InitialPartOne from "./InitialPartOne/InitialPartOne";
import "./Initial_page.css";

const Initial_page = () => {
  return (
    <div className="initial-page">
      <InitialPartOne />
      <ChildrenProfileBanner />
      <FrequentlyAskedQuestions/>
    </div>
  );
};

export default Initial_page;
