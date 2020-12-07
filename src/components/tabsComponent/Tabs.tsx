import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";
import "./tabs.css";
import HostImageComponent from "../../components/hostImageCoponent/HostImageComponent";
import InstanceTypeTab from "../../components/chooseInstanceComponent/InstanceType";
import StorageAndNetwork from "../../components/storageAndNetwork/StorageAndNetwork";
import ConfigureSecurity from "../../components/configureSecurity/ConfigureSecurity";
import ReviewAndLaunch from "../../components/reviewAndLaunch/ReviewAndLaunch";
import { Modal } from "./../modal/ModalComponent";
import { warning,extCapacityWarning,ssdCapacityWarning,ploicyWarning,selectCPUMemory } from "./../../utils/const";

import {
  VitualMachines,
  HostType,
  VirtualMachineData,
  InstanceTypeOption,
  InstanceType,
  StorageCapacity,
  TypeStorage,
  SecurityPolicy,
} from "./../../store/virtualMachin/types";

type Props = {
  children: ReactElement[];
  vitualMachine: VitualMachines[];
  hostType: HostType[];
  configureMyVirtualMachine: (
    virtualMachineDetails: VirtualMachineData
  ) => void;
  virtualMachineDetails: VirtualMachineData;
  instanceTypeOption: InstanceTypeOption[];
  instanceType: InstanceType;
  storageCapacity: StorageCapacity;
  onUpdateStorageCapacity: (storageCapacity: StorageCapacity) => void;
  addStorageCapacity: () => void;
  removeStorageCapacity: () => void;
  typeStorage: TypeStorage[];
  securityPolicy: SecurityPolicy[];
  addNewPolicy: (securityPolicy: SecurityPolicy) => void;
};

const Tabs: React.FC<Props> = ({
  children,
  vitualMachine,
  hostType,
  configureMyVirtualMachine,
  virtualMachineDetails,
  instanceType,
  instanceTypeOption,
  storageCapacity,
  onUpdateStorageCapacity,
  addStorageCapacity,
  removeStorageCapacity,
  typeStorage,
  securityPolicy,
  addNewPolicy,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loader, setLoader] = useState(false);
  const [openErrorModal, setOpenErrorModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const setDataLoader = () => {
    setLoader(true);
    let intervalId = setInterval(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 100);
  };

  const onRemoveStorageCapacity = () => {
    setDataLoader();
    removeStorageCapacity();
  };
  const onAddStorageCapacity = () => {
    setDataLoader();
    addStorageCapacity();
  };
  const loadUpdateStorageCapacity = (
    storageCapacity: StorageCapacity,
    load: boolean
  ) => {
    load && setDataLoader();
    onUpdateStorageCapacity(storageCapacity);
  };
  const configureSecurityPolicy = (securityPolicy: SecurityPolicy) => {
    let newConfigVirtualMachineDetails = virtualMachineDetails;
    newConfigVirtualMachineDetails = {
      ...virtualMachineDetails,
      securityPolicy,
    };
    configureMyVirtualMachine(newConfigVirtualMachineDetails);
  };

  const onProceed = (selectedTab: number) => {
    switch (selectedTab) {
      case 1:
        if (
          virtualMachineDetails.instanceType &&
          virtualMachineDetails.instanceType.instanceTypeSelectedCpu &&
          virtualMachineDetails.instanceType.instanceTypeSelectedMemeory
        ) {
          setSelectedTab(selectedTab + 1);
        } else {
          setErrorMessage(selectCPUMemory);
          setOpenErrorModal(true);
        }
        break;
      case 2:
        const rootStorage = storageCapacity.storageCapacityOption?.filter(
          (item) => item.storageType === "ROOT"
        )[0];
        const extStorage = storageCapacity.storageCapacityOption?.filter(
          (item) => item.storageType === "EXT" 
        )[0];
        if (rootStorage && rootStorage.type.value === "SSD" && (rootStorage.capacity < 20 || rootStorage.capacity > 512)) {
          setErrorMessage(ssdCapacityWarning);
          setOpenErrorModal(true);
        } else if (
          rootStorage &&
          rootStorage.type.value === "Magnetic Disk" &&
          (rootStorage.capacity < 40 || rootStorage.capacity > 20000)
        ) {
          setErrorMessage(extCapacityWarning);
          setOpenErrorModal(true);
        }else if (extStorage && extStorage.type.value === "SSD" && (extStorage.capacity < 20 || extStorage.capacity > 512)) {
          setErrorMessage(ssdCapacityWarning);
          setOpenErrorModal(true);
        } else if (
          extStorage &&
          extStorage.type.value === "Magnetic Disk" &&
          (extStorage.capacity < 40 || extStorage.capacity > 20000)
        ) {
          setErrorMessage(extCapacityWarning);
          setOpenErrorModal(true);
        } else if(rootStorage || extStorage){
          let newConfigVirtualMachineDetails = virtualMachineDetails;
          newConfigVirtualMachineDetails = {
            ...virtualMachineDetails,
            storageCapacity,
          };
          configureMyVirtualMachine(newConfigVirtualMachineDetails);
          setSelectedTab(selectedTab + 1);
        }else{
          setErrorMessage("Please Select Storage");
          setOpenErrorModal(true);
        }
        break;
     case 3:
          if (
            virtualMachineDetails.securityPolicy &&
            virtualMachineDetails.securityPolicy.securityPolicyName
          ) {
            setSelectedTab(selectedTab + 1);
          } else {
            setErrorMessage(ploicyWarning);
            setOpenErrorModal(true);
          }
          break;
      default:
        setSelectedTab(selectedTab + 1);
        break;
    }
  };

  const renderTabBody = (indexSelected: number) => {
    switch (indexSelected) {
      case 0:
        return (
          <HostImageComponent
            key={indexSelected}
            vitualMachine={vitualMachine}
            hostType={hostType}
            onSelectionProceed={onSelectionProceed}
          />
        );
      case 1:
        return (
          <InstanceTypeTab
            instanceTypeOption={instanceTypeOption}
            instanceType={instanceType}
            configureMyVirtualMachine={configureMyVirtualMachine}
            virtualMachineDetails={virtualMachineDetails}
          />
        );
      case 2:
        return (
          <StorageAndNetwork
            storageCapacity={storageCapacity}
            onUpdateStorageCapacity={loadUpdateStorageCapacity}
            addStorageCapacity={onAddStorageCapacity}
            removeStorageCapacity={onRemoveStorageCapacity}
            typeStorage={typeStorage}
            virtualMachineDetails={virtualMachineDetails}
          />
        );
      case 3:
        return (
          <ConfigureSecurity
            securityPolicy={securityPolicy}
            addNewPolicy={addNewPolicy}
            configureSecurityPolicy={configureSecurityPolicy}
          />
        );
      case 4:
        return (
          <ReviewAndLaunch
            virtualMachineDetails={virtualMachineDetails}
            setSelectedTab={setSelectedTab}
          />
        );
      default:
        break;
    }
  };

  const onSelectionProceed = (
    vitualMachines: VitualMachines,
    selectedHost: HostType
  ) => {
    setSelectedTab(1);
    let newConfigVirtualMachineDetails = virtualMachineDetails;
    newConfigVirtualMachineDetails = {
      vitualMachines,
      hostType: selectedHost,
      totalPrice: virtualMachineDetails.totalPrice
        ? virtualMachineDetails.totalPrice +
          vitualMachines.basicPrice +
          selectedHost.priceOnHostType
        : vitualMachines.basicPrice + selectedHost.priceOnHostType,
    };
    configureMyVirtualMachine(newConfigVirtualMachineDetails);
  };

  return (
    <div className="Tab-title-div">
      <Modal
        openModalcomponent={openErrorModal}
        titleTextColor="orange"
        userSelection={() => setOpenErrorModal(false)}
        titleText={warning}
        message={errorMessage}
        messageColor={"black"}
        buttonYes
        buttonYesText={"Ok"}
      />
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {!loader && renderTabBody(selectedTab)}
      {selectedTab > 0 && selectedTab < 4 && (
        <div className="footer-buttons">
          <button
            className="back-button"
            onClick={() => setSelectedTab(selectedTab - 1)}
          >
            Back
          </button>
          <button
            className="proceed-button"
            onClick={() => onProceed(selectedTab)}
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default Tabs;
