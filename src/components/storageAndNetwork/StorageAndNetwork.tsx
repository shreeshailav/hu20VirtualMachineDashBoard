import React from "react";
import {
  StorageCapacity,
  TypeStorage,
  StorageCapacityOption,
  VirtualMachineData,
} from "./../../store/virtualMachin/types";
import CustomButton from "./../button/Button";
import StorageAndNetworkCard from "./StorageAndNetworkCard";
import { primary, grey } from "./../../utils/colors";
import './StorageAndNetwork.css'
type Props = {
  storageCapacity: StorageCapacity;
  onUpdateStorageCapacity: (
    storageCapacity: StorageCapacity,
    load: boolean
  ) => void;
  addStorageCapacity: () => void;
  removeStorageCapacity: () => void;
  typeStorage: TypeStorage[];
  virtualMachineDetails: VirtualMachineData;
};

const StorageAndNetwork: React.FC<Props> = ({
  storageCapacity,
  onUpdateStorageCapacity,
  removeStorageCapacity,
  addStorageCapacity,
  typeStorage,
  virtualMachineDetails,
}) => {
  const onAddStorageCapacity = () => {
    addStorageCapacity();
  };
  const [bandWidth, setBandWidth] = React.useState("512");
  const handleChange = (bandWidth: string) => {
    let updateStorageCapacity = storageCapacity;
    updateStorageCapacity.bandwidth = parseInt(bandWidth);
    if (parseInt(bandWidth) > 512 && parseInt(bandWidth) < 1000)
      updateStorageCapacity.bandwidthPrice = 10;
    else if (parseInt(bandWidth) > 1000 && parseInt(bandWidth) < 1500)
      updateStorageCapacity.bandwidthPrice = 11;
    else if (parseInt(bandWidth) > 1500)
      updateStorageCapacity.bandwidthPrice = 15;
    if (updateStorageCapacity) {
      onUpdateStorageCapacity(updateStorageCapacity, false);
    }
    setBandWidth(bandWidth);
  };

  const maxBandwidth =
    virtualMachineDetails.instanceType?.instanceTypeName === "Network Optimized"
      ? 2000
      : 1000;

  const onStorageDiskSelection = (
    storageCapacityOption: StorageCapacityOption,
    load: boolean
  ) => {
    const updatedStorageCapacityOption = storageCapacity.storageCapacityOption?.filter(
      (item) => item.storageType !== storageCapacityOption.storageType
    );
    let updatedStorageCapacity = storageCapacity;
    updatedStorageCapacity.storageCapacityOption = updatedStorageCapacityOption;
    updatedStorageCapacity.storageCapacityOption?.push(storageCapacityOption);

    if (updatedStorageCapacity) {
      onUpdateStorageCapacity(updatedStorageCapacity, load);
    }
  };

  // const storageCapacityOption =
  //   storageCapacity && storageCapacity.storageCapacityOption;
  const rootStorageCapacityOption =
    storageCapacity.storageCapacityOption &&
    storageCapacity.storageCapacityOption.filter(
      (item) => item.storageType === "ROOT"
    )[0];
  const extStorageCapacityOption =
    storageCapacity.storageCapacityOption &&
    storageCapacity.storageCapacityOption.filter(
      (item) => item.storageType === "EXT"
    )[0];
  // const [type, setType] = useState(storageCapacityOption.);
  return (
    <div>
      <React.Fragment>
        {/* {storageCapacityOption &&
          storageCapacityOption.map((item, index) => ( */}
        {rootStorageCapacityOption && (
          <React.Fragment>
            <StorageAndNetworkCard
              storageCapacityOption={rootStorageCapacityOption}
              typeStorage={typeStorage}
              onStorageDiskSelection={onStorageDiskSelection}
              removeStorageCapacity={removeStorageCapacity}
            />
          </React.Fragment>
        )}
        <div className="div-separator" />
        {extStorageCapacityOption && (
          <React.Fragment>
            <StorageAndNetworkCard
              storageCapacityOption={extStorageCapacityOption}
              typeStorage={typeStorage}
              onStorageDiskSelection={onStorageDiskSelection}
              removeStorageCapacity={removeStorageCapacity}
            />
          </React.Fragment>
        )}
        {/* ))} */}
        <div className="add-storage-button">
          <CustomButton
            buttonBg={extStorageCapacityOption ? grey : primary}
            buttonText={"Add Valume"}
            buttonWidth={"155px"}
            buttonHeight={"48px"}
            fontSize={"14px"}
            fontWeight={"normal"}
            onClickOnButton={() => onAddStorageCapacity()}
            buttonTextColor={"black"}
            disable={extStorageCapacityOption ? true : false}
          />
        </div>
        <div className="band-width">
          <input
            type="range"
            min={512}
            max={maxBandwidth}
            value={bandWidth}
            onChange={(event) => handleChange(event.target.value)}
            data-show-value={true}
          />
          <p>
            {parseInt(bandWidth) < 1000
              ? bandWidth + " GB"
              : parseInt(bandWidth) / 1000 + " TB"}
          </p>
        </div>
      </React.Fragment>
    </div>
  );
};

export default StorageAndNetwork;
