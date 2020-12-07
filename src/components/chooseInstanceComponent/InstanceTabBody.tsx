import React from "react";
import { Select } from "./../select/select";
import "./InstanceType.css";
import {
  InstanceTypeOption,
  InstanceType,
  VirtualMachineData,
} from "./../../store/virtualMachin/types";
type Props = {
  instanceTypeOption: InstanceTypeOption[];
  instanceType: InstanceType;
  selectedTab: number;
  instanceOptions: InstanceTypeOption;
  configureMyVirtualMachine: (
    virtualMachineDetails: VirtualMachineData
  ) => void;
  virtualMachineDetails: VirtualMachineData;
};

const InstanceTabBody: React.FC<Props> = ({
  instanceOptions,
  configureMyVirtualMachine,
  virtualMachineDetails,
  instanceType,
}) => {
  const [memorySelectedKey, setMemorySelectedKey] = React.useState("");
  const [cpuSelectedKey, setCpuSelectedKey] = React.useState("");
  React.useEffect(() => {
    onConfigureMyVirtualMachine();
  }, [memorySelectedKey, cpuSelectedKey]);

  const onConfigureMyVirtualMachine = () => {
    const slectedMemory = instanceOptions.memoryAvailable.filter(
      (item) => item.key === memorySelectedKey
    )[0];
    const slectedCpu = instanceOptions.cpuCoreAvailable.filter(
      (item) => item.key === cpuSelectedKey
    )[0];
    const instanceTypeSelected: InstanceType = {
      instanceTypeId: instanceOptions.InstanceTypeOptionId,
      instanceTypeName: instanceOptions.InstanceTypeOptionName,
      instanceTypeSelectedCpu:
        slectedCpu && slectedCpu.value
          ? slectedCpu.value
          : instanceType.instanceTypeSelectedMemeory,
      instanceTypeSelectedMemeory:
        slectedMemory && slectedMemory.value
          ? slectedMemory.value
          : instanceType.instanceTypeSelectedMemeory,
      memoryPrice:
        slectedMemory && slectedMemory.memoryPrice
          ? slectedMemory.memoryPrice
          : instanceType.memoryPrice,
      cpuPrice:
        slectedCpu && slectedCpu.cpuPrice
          ? slectedCpu.cpuPrice
          : instanceType.cpuPrice,
    };

    let newConfigVirtualMachineDetails = virtualMachineDetails;
    const totalPrice = virtualMachineDetails.totalPrice
      ? virtualMachineDetails.totalPrice
      : 0;
    newConfigVirtualMachineDetails = {
      ...virtualMachineDetails,
      instanceType: instanceTypeSelected,
      totalPrice:
        totalPrice +
        instanceTypeSelected.cpuPrice +
        instanceTypeSelected.memoryPrice,
    };
    configureMyVirtualMachine(newConfigVirtualMachineDetails);
  };

  const onMemorySlection = (key: string) => {
    setMemorySelectedKey(key);
  };
  const onCpuSlection = (key: string) => {
    setCpuSelectedKey(key);
  };
  return (
    <div>
      <div className="root-view">
        
        <h2>Create Configuration</h2>
        <div className="dropdown">
          {instanceOptions.cpuCoreAvailable && (
            <Select
              options={instanceOptions.cpuCoreAvailable}
              onSelectRegion={onCpuSlection}
              defaultValue={"CPU Cores"}
            />
          )}
          <div className="dropdown-space" />
          <Select
            options={instanceOptions ? instanceOptions.memoryAvailable : []}
            onSelectRegion={onMemorySlection}
            defaultValue={"Memory"}
          />
        </div>
      </div>
      
    </div>
  );
};

export default InstanceTabBody;
