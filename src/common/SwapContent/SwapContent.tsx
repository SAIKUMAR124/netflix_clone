import "./SwapContent.css";

const SwapContent = ({ children }: any) => {
  return (
    <div className="swap-content">
      <div className="swap-div">{children}</div>
    </div>
  );
};

export default SwapContent;
