import axios from "axios";
import { useEffect, useState } from "react";
import SwapContent from "../../../common/SwapContent/SwapContent";
import "./ChildrenProfileBanner.css";

interface ChildrenProfileBannerProps {
  heading: string;
  description: string;
}

const ChildrenProfileBanner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ChildrenProfileBannerProps>({
    heading: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get<ChildrenProfileBannerProps>(
        "./mocking/initial_page/initial_part_children_profile.json"
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="children-profile-banner">
    <SwapContent>
      <div className="content-center flex-di">
        <h1>{data.heading}</h1>
        <p>{data.description}</p>
      </div>
      <div className="content-center flex-di">
        <img
          className="child-profile-img"
          src="./images/ChildrenProfile.png"
          alt=""
        />
      </div>
    </SwapContent>
    </div>
  );
};

export default ChildrenProfileBanner;
