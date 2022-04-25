import axios from "axios";
import React, { useEffect, useState } from "react";
import InitialPartOneEmail from "../../sub_components/InitialPartOneEmail";
import "./InitialPartOne.css";
import InitialPartOneHeader from '../../sub_components/InitialPartOneHeader';

// State types
interface EmailPartOneState {
  backend_Url: string;
  heading: string;
  sub_heading: string;
  email_text: string;
}

const InitialPartOne = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<EmailPartOneState>({
    backend_Url: "",
    heading: "",
    sub_heading: "",
    email_text: "",
  });

  // UseEffect to get data from json file
  useEffect(() => {
    axios
      .get<EmailPartOneState>("./mocking/initial_page/initial_part1.json")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);


  // if isLoading is true return Loading...
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    // else return the content
    return (
      <div className="InitialPartOne InitialPartOne--background_Image">
        
        <div className="BlackEffect Initial--h-w"></div>
        
        <div className="InitialPartOne--container Initial--h-w">
          <div className="InitialHeader"><InitialPartOneHeader/></div>
          <div className="InitialPartOne--content">
            <h1>{data.heading}</h1>
            <h2 className="sub-heading">{data.sub_heading}</h2>
            <h3 className="email-heading">{data.email_text}</h3>
            <div>
              <InitialPartOneEmail/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default InitialPartOne;
