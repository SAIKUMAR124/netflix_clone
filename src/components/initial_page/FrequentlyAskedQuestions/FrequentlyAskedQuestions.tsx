import axios from "axios";
import React, { useEffect, useState } from "react";
import { string } from "yup";
import Accordian from "../../../common/Accordian/Accordian";
import "./FrequentlyAskedQuestions.css";

interface FrequentlyAQProps {
  id: number;
  question: string;
  answer: string;
}

type FrequentlyAQArrayProps = FrequentlyAQProps[];

const FrequentlyAskedQuestions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<FrequentlyAQArrayProps>([
    {
      id: 0,
      question: "",
      answer: "",
    },
  ]);

  useEffect(() => {
    axios
      .get<FrequentlyAQArrayProps>(
        "./mocking/initial_page/frequently_asked_questions.json"
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="FrequentlyAskedQuestions">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="text-center frequentlyAQ">Frequently Asked Questions</h1>
          <div>
            {data.map((details) => (
              <Accordian key={details.id} {...details} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestions;
