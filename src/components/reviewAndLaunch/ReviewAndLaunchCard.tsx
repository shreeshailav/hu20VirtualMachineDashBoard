import React from "react";
import { StorageCapacityOption } from "./../../store/virtualMachin/types";
import './ReviewAndLaunch.css'

type Props = {
  storageCapacityOption: StorageCapacityOption;
};

const ReviewAndLaunchCard: React.FC<Props> = ({ storageCapacityOption }) => {
  return (
    <div>
      <div>
        <div className="card-review-styles">
          <div className="Img-content">
            <h2>{"Type"}</h2>
            <div className="sub-content">
              <h3>{storageCapacityOption.type.value}</h3>
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
            <h3>{storageCapacityOption.capacity}</h3>
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Encryption"}</h2>
            <div className="sub-content">
            {storageCapacityOption.encryption ? <button className="button-review-check"/>:<button className="button-review-no-check"/>}
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
            {storageCapacityOption.backupRequired ? <button className="button-review-check"/>:<button className="button-review-no-check"/>}
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Remark"}</h2>
            <div className="sub-content">
              <h3>{storageCapacityOption.remark}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndLaunchCard;
