import "./Accordian.css";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

interface AccordianProps {
  question: string;
  answer: string;
}

const Accordian = ({ question, answer }: AccordianProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordian-con">
      <div
        className="space-between accordian cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="accordian-title">{question}</h2>
        <button className="center accordian-btn-bg">
          {open ? (
            <AiOutlineClose className="accordian-icon" />
          ) : (
            <AiOutlinePlus className="accordian-icon" />
          )}
        </button>
      </div>
      {open && <p className="accordian-description accordian">{answer}</p>}
    </div>
  );
};

export default Accordian;
