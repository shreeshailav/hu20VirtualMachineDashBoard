import React from "react";
import "./tabs.css";

type Props = {
  title: string;
  index: number;
  selectedTab: number;
  setSelectedTab: (index: number) => void;
  tabType?: string;
};

const TabTitle: React.FC<Props> = ({ title, index, selectedTab, tabType,setSelectedTab }) => {
  const getStyle = () => {
    if (selectedTab === index) {
      return "active-tab";
    } else if (index < selectedTab) {
      return "in-active-tab";
    } else if (index > selectedTab) {
      return "completed-tab";
    }
  };
  const getButtonStyle = () =>{
    if (selectedTab === index) {
      return "active-button-tab";
    } else {
      return "in-active-tab";
    } 
  }
  

  return (
    <li>
      {tabType === "button" ? (
        <button className={getButtonStyle()} onClick={()=>setSelectedTab(index)}>{title}</button>
      ) : (
        <label className={getStyle()}>{title}</label>
      )}
    </li>
  );
};

export default TabTitle;
