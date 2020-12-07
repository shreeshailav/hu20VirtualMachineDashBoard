import React from "react";
import {
  StorageCapacityOption,
  TypeStorage,
} from "./../../store/virtualMachin/types";
import { Select } from "./../select/select";
import close from "./../../assets/images/close.png";
import { primary, grey } from "./../../utils/colors";
import './StorageAndNetwork.css'
type Props = {
  storageCapacityOption: StorageCapacityOption;
  typeStorage: TypeStorage[];
  onStorageDiskSelection: (
    storageCapacityOption: StorageCapacityOption,
    load: boolean
  ) => void;
  removeStorageCapacity: () => void;
};

const StorageAndNetwork: React.FC<Props> = ({
  storageCapacityOption,
  typeStorage,
  onStorageDiskSelection,
  removeStorageCapacity,
}) => {
  const [capacity, setCapacity] = React.useState({
    capacity: "" + storageCapacityOption.capacity,
  });
  const [remark, setRmark] = React.useState(storageCapacityOption.remark);

  const onSelectionStorage = (key: string) => {
    let updateStorageCapacity = storageCapacityOption;
    updateStorageCapacity.type = typeStorage.filter(
      (item) => item.key === key
    )[0];
    if(updateStorageCapacity.storageType === 'EXT' && key ==='typestr1' && (updateStorageCapacity.capacity < 20 ||  updateStorageCapacity.capacity > 512) ){
      updateStorageCapacity.capacity = 20
    }else if(updateStorageCapacity.storageType === 'EXT' && key ==='typestr2' && (updateStorageCapacity.capacity < 40 ||  updateStorageCapacity.capacity > 2000)){
      updateStorageCapacity.capacity = 40
    }
    if(updateStorageCapacity.storageType === 'EXT' && key ==='typestr1'){
      updateStorageCapacity.price = 40
    }else if(updateStorageCapacity.storageType === 'EXT' && key ==='typestr2'){
      updateStorageCapacity.price = 20
    }
    onStorageDiskSelection(updateStorageCapacity, true);
  };
  const onEncrptionSelection = (key: boolean) => {
    let updateStorageCapacity = storageCapacityOption;
    updateStorageCapacity.encryption = key;
    onStorageDiskSelection(updateStorageCapacity, true);
  };
  const onBackupSelection = (key: boolean) => {
    let updateStorageCapacity = storageCapacityOption;
    updateStorageCapacity.backupRequired = key;
    onStorageDiskSelection(updateStorageCapacity, true);
  };
  const onRmarkChange = (value: string) => {
    let updateStorageCapacity = storageCapacityOption;
    updateStorageCapacity.remark = value;
    setRmark(value);
    onStorageDiskSelection(updateStorageCapacity, false);
  };
  const onCapacityChange = (value: string) => {
    if (!isNaN(Number(value))) {
      setCapacity({
        capacity: value,
      });
      let updateStorageCapacity = storageCapacityOption;
      updateStorageCapacity.capacity = parseInt(value);
      if (parseInt(value) < 100) {
        updateStorageCapacity.iops = 100;
      } else if (parseInt(value) >= 100 && parseInt(value) <= 500) {
        updateStorageCapacity.iops = 1000;
      } else if (parseInt(value) > 500) {
        updateStorageCapacity.iops = 600;
      }
      onStorageDiskSelection(updateStorageCapacity, false);
    }
  };

  return (
    <div>
      <div className="body-storage-styles">
        <div className="card-storage">
          <div className="Img-content">
            <h2>{"Type"}</h2>
            <div className="sub-content">
              <Select
                options={typeStorage}
                onSelectRegion={onSelectionStorage}
                defaultValue={storageCapacityOption.type.value || "Select"}
              />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Valume"}</h2>
            <div className="sub-content">
              <h3>{storageCapacityOption.valume}</h3>
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Capacity (GB)"}</h2>
            <div className="sub-content">
              <input
                value={capacity.capacity}
                onChange={(event) => onCapacityChange(event.target.value)}
              />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Encryption"}</h2>
            <div className="sub-content">
              <button
                onClick={() =>
                  onEncrptionSelection(!storageCapacityOption.encryption)
                }
                style={{background:storageCapacityOption.encryption ? primary : grey,width:'18px',height:'18px'}}
              />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"IOPS"}</h2>
            <div className="sub-content">
              <h3>{storageCapacityOption.iops}</h3>
            </div>
          </div>
          <div className="Img-content">
              <h2>{"Backup Required"}</h2>
            <div className="sub-content">
              <button
                onClick={() =>
                  onBackupSelection(!storageCapacityOption.backupRequired)
                }
                style={{background:storageCapacityOption.backupRequired ? primary : grey,width:'18px',height:'18px'}}
              />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Remark"}</h2>
            <div className="sub-content">
              <input
                value={remark}
                onChange={(event) => onRmarkChange(event.target.value)}
                placeholder={'remark'}
              />
            </div>
          </div>
        </div>
        <div className="close-style-storage">
          {storageCapacityOption.storageType === "EXT" && (
            <img
              src={close}
              alt={`close`}
              onClick={() => removeStorageCapacity()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StorageAndNetwork;
