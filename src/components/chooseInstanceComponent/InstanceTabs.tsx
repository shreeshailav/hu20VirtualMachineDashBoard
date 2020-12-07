import React, { ReactElement, useState } from "react";
import TabTitle from "./../tabsComponent/TabTitle";
import InstanceTabBody from "./InstanceTabBody";
import "./../tabsComponent/tabs.css";
import {
  InstanceTypeOption,
  InstanceType,
  VirtualMachineData,
} from "./../../store/virtualMachin/types";
type Props = {
  children: ReactElement[];
  instanceTypeOption: InstanceTypeOption[];
  instanceType: InstanceType;
  configureMyVirtualMachine: (
    virtualMachineDetails: VirtualMachineData
  ) => void;
  virtualMachineDetails: VirtualMachineData;
};

const InstanceTabs: React.FC<Props> = ({
  children,
  instanceType,
  instanceTypeOption,
  configureMyVirtualMachine,
  virtualMachineDetails,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loader, setLoader] = useState(false);
  const onSetSelectedTab = (value: number) => {
    setLoader(true);
    setSelectedTab(value);
    let intervalId = setInterval(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 100);
  };
  return (
    <div className="instance-div">
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={onSetSelectedTab}
            tabType={"button"}
          />
        ))}
      </ul>
      {!loader && (
        <InstanceTabBody
          instanceTypeOption={instanceTypeOption}
          instanceType={instanceType}
          selectedTab={selectedTab}
          instanceOptions={instanceTypeOption[selectedTab]}
          configureMyVirtualMachine={configureMyVirtualMachine}
          virtualMachineDetails={virtualMachineDetails}
        />
      )}
    </div>
  );
};

export default InstanceTabs;
