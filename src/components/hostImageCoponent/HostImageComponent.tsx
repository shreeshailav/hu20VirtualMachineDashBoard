import React, { useState } from "react";
import { VitualMachines, HostType } from "./../../store/virtualMachin/types";
import ubuntuImage from "../../assets/images/ubuntuhero.jpg";
import "./HostImageComponent.css";
import { Modal } from "./../modal/ModalComponent";
import { warningMessage } from "./../../utils/stringconst";
import { getHostIndex } from "./../../utils/utility";

type Props = {
  vitualMachine: VitualMachines[];
  hostType: HostType[];
  onSelectionProceed: (
    vitualMachines: VitualMachines,
    selectedHostId: HostType
  ) => void;
};

const HostImageComponent = ({
  vitualMachine,
  hostType,
  onSelectionProceed,
}: Props) => {
  const [selectedHostId, setSelectedHostId] = useState(hostType && hostType[0]);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const userSelection = (flag: boolean) => {
    setOpenErrorModal(false);
    console.log(flag);
  };

  return (
    <div>
      {vitualMachine &&
        vitualMachine.map((vitualMachines: VitualMachines) => (
          <React.Fragment key={vitualMachines.vmImageId}>
            {/* {renderModal} */}
            <Modal
              openModalcomponent={openErrorModal}
              titleTextColor="orange"
              userSelection={userSelection}
              titleText={"Warning"}
              message={warningMessage}
            />
            <div className="Img-card-styles">
              <div className="Img-image">
                <img src={ubuntuImage} alt={`VM`} />
              </div>
              <div className="Img-content">
                <h2>{vitualMachines.vmName}</h2>
                <h3>{vitualMachines.vmDescription}</h3>
              </div>
              <div className="Img-content-host-type">
                {vitualMachines.hostType &&
                  vitualMachines.hostType.map((item, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        value={item.hostName}
                        defaultChecked={index === getHostIndex(vitualMachines)}
                        name={vitualMachines.vmImageId}
                        onChange={() => setSelectedHostId(item)}
                      />
                      {item.hostName}
                    </div>
                  ))}
                <button
                  onClick={() =>
                    onSelectionProceed(vitualMachines, selectedHostId)
                  }
                >
                  Select
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      <style>{`
              .Img-content h2 {
                font-size: 1em;
                align-content: left;
                text-align: left;
                margin:0;
                font-size:18px;
                font-weight: bold;
                justify-content: flex-start;
              }
              .Img-content h3 {
                font-size: 1em;
                align-content: left;
                text-align: left;
                margin-top:5px;
                font-size:14px;
                font-weight: normal;
                justify-content: flex-start;
              }
              .dropdown-space {
                margin-right: 2em;
              }
            `}</style>
    </div>
  );
};

export default HostImageComponent;
