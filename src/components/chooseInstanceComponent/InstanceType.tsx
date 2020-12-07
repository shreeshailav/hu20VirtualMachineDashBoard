import React from "react";
import InstanceTabs from "./InstanceTabs";
import Tab from "./../tabsComponent/Tab";
import "./InstanceType.css";
import {
  InstanceTypeOption,
  InstanceType,
  VirtualMachineData,
} from "./../../store/virtualMachin/types";
type Props = {
  instanceTypeOption: InstanceTypeOption[];
  instanceType: InstanceType;
  configureMyVirtualMachine: (
    virtualMachineDetails: VirtualMachineData
  ) => void;
  virtualMachineDetails: VirtualMachineData;
};

const InstanceTypeTab = ({
  instanceTypeOption,
  instanceType,
  configureMyVirtualMachine,
  virtualMachineDetails,
}: Props) => {
  return (
    <div>
      <InstanceTabs
        instanceTypeOption={instanceTypeOption}
        instanceType={instanceType}
        configureMyVirtualMachine={configureMyVirtualMachine}
        virtualMachineDetails={virtualMachineDetails}
      >
        {instanceTypeOption.map((item, index) => (
          <Tab key={index} title={item.InstanceTypeOptionName} />
        ))}
      </InstanceTabs>
    </div>
  );
};

export default InstanceTypeTab;
