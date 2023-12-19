import { SourceCodePro } from "@/fonts/fonts";

const Profetion = () => {
  return (
    <div className={`profetion-text-container ${SourceCodePro.className}`}>
      <div 
        className="profetion front-end" 
        word-text="Front-end" 
        translate="no"
      ></div>
      <div 
        className="profetion back-end" 
        word-text="back-end" 
        translate="no"
      ></div>
      <div
        className="profetion software-development"
        word-text="Software Developer" 
        translate="no"
      ></div>
    </div>
  );
};

export default Profetion;
