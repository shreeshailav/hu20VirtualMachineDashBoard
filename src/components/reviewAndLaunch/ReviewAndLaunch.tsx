import React from "react";
import ubuntuImage from "../../assets/images/ubuntuhero.jpg";
import ReviewAndLaunchCard from "./ReviewAndLaunchCard";
import { VirtualMachineData } from "./../../store/virtualMachin/types";
import './ReviewAndLaunch.css'
import {Modal} from "./../modal/ModalComponent";
type Props = {
  virtualMachineDetails: VirtualMachineData;
  setSelectedTab: (value: number) => void;
};

const ReviewAndLaunch: React.FC<Props> = ({
  virtualMachineDetails,
  setSelectedTab,
}) => {
  const [openErrorModal, setOpenErrorModal] = React.useState(false);

  const [numberOfInstance, setNumberOfInstance] = React.useState({
    numberOfInstance: "1",
  });
  const rootStorageCapacityOption = virtualMachineDetails.storageCapacity?.storageCapacityOption?.filter(
    (item) => item.storageType === "ROOT"
  )[0];
  const extStorageCapacityOption = virtualMachineDetails.storageCapacity?.storageCapacityOption?.filter(
    (item) => item.storageType === "EXT"
  )[0];
  return (
    <div>
       <Modal
        openModalcomponent={openErrorModal}
        titleTextColor="green"
        userSelection={() => setOpenErrorModal(false)}
        titleText={"Sucecess"}
        message={'VM(s) created with provided configuration successfully'}
        messageColor={"black"}
        buttonYes
        buttonYesText={"Ok"}
      />
      <React.Fragment>
        <div className="body-review-styles">
          <h1 className="card-title">Instance</h1>
          <h1 role="button" className="card-edit-button" onClick={() => setSelectedTab(0)}>
            Edit
          </h1>
          <div className="Img-card-styles">
            <div className="Img-image">
              <img src={ubuntuImage} alt={`VM`} />
            </div>
            <div className="Img-content">
              <h2>{virtualMachineDetails.vitualMachines?.vmName}</h2>
              <h3>{virtualMachineDetails.vitualMachines?.vmDescription}</h3>
            </div>
            <div className="Img-content-host-type">
              <input
                type="radio"
                value={"efef"}
                defaultChecked={true}
                name={"wdwd"}
              />
              {virtualMachineDetails.hostType?.hostName}
            </div>
          </div>
          <h1 className="card-title">Instance</h1>
          <h1 className="card-edit-button" onClick={() => setSelectedTab(1)}>
            Edit
          </h1>
          <div className="card-styles-storage">
            <div className="card-styles-instance">
            <h2>{virtualMachineDetails.instanceType?.instanceTypeName}</h2>
            <div className="Img-content">
              <h2>{virtualMachineDetails.instanceType?.instanceTypeSelectedCpu}</h2>
              <h2>{virtualMachineDetails.instanceType?.instanceTypeSelectedMemeory}</h2>
            </div>
            </div>
          </div>
          <h1 className="card-title">Bandwidth</h1>
          <h1 className="card-edit-button" onClick={() => setSelectedTab(2)}>
            Edit
          </h1>
          <div className="card-styles-storage">
            <div className="Img-content">
              <h1>{`${virtualMachineDetails.storageCapacity?.bandwidth} GB/Month`}</h1>
            </div>
          </div>

          <h1 className="card-title">Storage</h1>
          <h1 className="card-edit-button" onClick={() => setSelectedTab(2)}>
            Edit
          </h1>
          {rootStorageCapacityOption && (
            <React.Fragment
              key={rootStorageCapacityOption.storageCapacityOptionId}
            >
              <ReviewAndLaunchCard
                storageCapacityOption={rootStorageCapacityOption}
              />
            </React.Fragment>
          )}
          {extStorageCapacityOption && (
            <React.Fragment
              key={extStorageCapacityOption.storageCapacityOptionId}
            >
              <ReviewAndLaunchCard
                storageCapacityOption={extStorageCapacityOption}
              />
            </React.Fragment>
          )}
          <h1 className="card-title">Security Group</h1>
          <h1 className="card-edit-button" onClick={() => setSelectedTab(3)}>
            Edit
          </h1>
          <div className="card-styles">
            <div className="Img-content">
              <h2>{"Type"}</h2>
              <h3>
                {virtualMachineDetails.securityPolicy?.securityPolicyType}
              </h3>
            </div>
            <div className="Img-content">
              <h2>{"Protocol"}</h2>
              <h3>
                {virtualMachineDetails.securityPolicy?.securityPolicyProtocol}
              </h3>
            </div>
            <div className="Img-content">
              <h2>{"Port Range"}</h2>
              <h3>
                {virtualMachineDetails.securityPolicy?.securityPolicyPort}
              </h3>
            </div>
            <div className="Img-content">
              <h2>{"Source"}</h2>
              <h3>
                {virtualMachineDetails.securityPolicy?.securityPolicySource}
              </h3>
            </div>
            <div className="Img-content">
              <h2>{"Description"}</h2>
              <h3>
                {
                  virtualMachineDetails.securityPolicy
                    ?.securityPolicyDescription
                }
              </h3>
            </div>
          </div>
          <h1 className="card-title">Number Of Instances</h1>
          <input
            className="instance-input"
            value={numberOfInstance.numberOfInstance}
            onChange={(event) =>
              setNumberOfInstance({
                numberOfInstance: event.target.value.replace(/\D/, ""),
              })
            }
          />
        </div>
        <div className="review-buttons">
          <button
            className="review-back-button"
            onClick={() => setSelectedTab(0)}
          >
            Cancel
          </button>
          <button
            className="review-proceed-button"
            onClick={() => setSelectedTab(3)}
          >
            Back
          </button>
          <button
            className="review-launch-button"
            onClick={() => setOpenErrorModal(true)}
          >
            Launch
          </button>
        </div>
       
      </React.Fragment>
    </div>
  );
};

export default ReviewAndLaunch;
