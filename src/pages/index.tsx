import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ApplicationState } from "./../store";
import "./index.css";
import {
  fetchVmMachine,
  configureVM,
  updateStorageCapacity,
  addStorageCapacity,
  removeStorageCapacity,
  addPolicy,
} from "./../store/virtualMachin/actions";
import { windowsSelectionError, warning } from "./../utils/const";
import {
  VirtualMachineData,
  Region,
  VitualMachines,
  HostType,
  InstanceTypeOption,
  InstanceType,
  StorageCapacity,
  TypeStorage,
  SecurityPolicy,
} from "./../store/virtualMachin/types";
import Tabs from "./../components/tabsComponent/Tabs";
import Tab from "./../components/tabsComponent/Tab";
import CardCoponent from "./../components/card/CardComponent";
import { Select } from "./../components/select/select";
import { tabData } from "./../utils/const";
import { Modal } from "./../components/modal/ModalComponent";
interface PropsFromState {
  virtualMachineDetails: VirtualMachineData;
  regions: Region[];
  vitualMachine: VitualMachines[];
  hostType: HostType[];
  isLoading: boolean;
  instanceTypeOption: InstanceTypeOption[];
  instanceType: InstanceType;
  storageCapacity: StorageCapacity;
  typeStorage: TypeStorage[];
  securityPolicy: SecurityPolicy[];
}

interface PropsFromDispatch {
  fetchVmMachine: typeof fetchVmMachine;
  configureVM: typeof configureVM;
  updateStorageCapacity: typeof updateStorageCapacity;
  addStorageCapacity: typeof addStorageCapacity;
  removeStorageCapacity: typeof removeStorageCapacity;
  addPolicy: typeof addPolicy;
}

interface RouteParams {
  id: string;
}

type AllProps = PropsFromState &
  PropsFromDispatch &
  RouteComponentProps<RouteParams>;

const IndexPage = (props: AllProps) => {
  const {
    isLoading,
    fetchVmMachine,
    regions,
    vitualMachine,
    configureVM,
    virtualMachineDetails,
    instanceTypeOption,
    instanceType,
    storageCapacity,
    updateStorageCapacity,
    addStorageCapacity,
    removeStorageCapacity,
    typeStorage,
    securityPolicy,
    addPolicy,
  } = props;

  const [openErrorModal, setOpenErrorModal] = React.useState(false);
  const [regionId, setRegionId] = React.useState(0);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    fetchVmMachine("rg1");
  }, [fetchVmMachine]);

  const onSelectRegion = (regId: string) => {
    if (
      (regId === "rg3" || regId === "rg4") &&
      virtualMachineDetails.vitualMachines?.vmImageId === "vm104"
    ) {
      const index = regions.findIndex((value) => value.key === regId);
      setRegionId(index);
      setOpenErrorModal(true);
      setLoader(true);
    }
    fetchVmMachine(regId);
  };

  const cearAllData = (flag: boolean) => {
    if (flag) {
      setOpenErrorModal(false);
      setLoader(false);
      window.location.reload();
    } else {
      setOpenErrorModal(false);
      const index = regions.findIndex(
        (value) => value.key === virtualMachineDetails.vitualMachines?.regionId
      );
      setRegionId(index);
      setLoader(false);
    }
  };
  const configureMyVirtualMachine = (
    virtualMachineDetails: VirtualMachineData
  ) => {
    configureVM(virtualMachineDetails);
  };

  const onUpdateStorageCapacity = (storageCapacity: StorageCapacity) => {
    updateStorageCapacity(storageCapacity);
  };
  const addNewPolicy = (securityPolicy: SecurityPolicy) => {
    addPolicy(securityPolicy);
  };

  return (
    <div className="div-main">
      <header>{"HVC"}</header>
      {openErrorModal && (
        <Modal
          openModalcomponent={openErrorModal}
          titleTextColor="orange"
          userSelection={cearAllData}
          titleText={warning}
          message={windowsSelectionError}
          messageColor={"black"}
          buttonNo
          buttonNoText={"Cancel"}
          buttonYes
          buttonYesText={"Ok"}
        />
      )}
      {!isLoading && (
        <div className="grid-container">
          <div>
            <div className="grid-header">
              <label>Choose Image</label>
              {!loader && (
                <Select
                  options={regions}
                  onSelectRegion={onSelectRegion}
                  default={regions && regions[regionId ? regionId : 0]}
                />
              )}
            </div>
            <Tabs
              vitualMachine={vitualMachine}
              hostType={props.hostType}
              configureMyVirtualMachine={configureMyVirtualMachine}
              virtualMachineDetails={virtualMachineDetails}
              instanceTypeOption={instanceTypeOption}
              instanceType={instanceType}
              storageCapacity={storageCapacity}
              onUpdateStorageCapacity={onUpdateStorageCapacity}
              addStorageCapacity={addStorageCapacity}
              removeStorageCapacity={removeStorageCapacity}
              typeStorage={typeStorage}
              securityPolicy={securityPolicy}
              addNewPolicy={addNewPolicy}
            >
              {tabData.map((item) => (
                <Tab key={item.key} title={item.value} />
              ))}
            </Tabs>
          </div>
          <div>
            <CardCoponent virtualMachineDetails={virtualMachineDetails} />{" "}
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ virtualMachines }: ApplicationState) => ({
  virtualMachineDetails: virtualMachines.virtualMachineDetails,
  regions: virtualMachines.region,
  vitualMachine: virtualMachines.vitualMachine,
  hostType: virtualMachines.hostType,
  isLoading: virtualMachines.isLoading,
  instanceTypeOption: virtualMachines.instanceTypeOption,
  instanceType: virtualMachines.instanceType,
  storageCapacity: virtualMachines.storageCapacity,
  typeStorage: virtualMachines.typeStorage,
  securityPolicy: virtualMachines.securityPolicy,
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchVmMachine: fetchVmMachine,
  configureVM: configureVM,
  updateStorageCapacity: updateStorageCapacity,
  addStorageCapacity: addStorageCapacity,
  removeStorageCapacity: removeStorageCapacity,
  addPolicy: addPolicy,
};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
