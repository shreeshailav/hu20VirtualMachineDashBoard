import React from "react";
import { Select } from "./../select/select";
import { SecurityPolicy } from "./../../store/virtualMachin/types";
import ConfigureNewSecurity from "./ConfigureNewSecurity";
import { Modal } from "./../modal/ModalComponent";
import './ConfigureSecurity.css'
type Props = {
  securityPolicy: SecurityPolicy[];
  addNewPolicy: (securityPolicy: SecurityPolicy) => void;
  configureSecurityPolicy: (securityPolicy: SecurityPolicy) => void;
};

const selectionOption = [
  { key: 0, value: "create a new security policy" },
  { key: 1, value: "select an existing policy group" },
];

const ConfigureSecurity: React.FC<Props> = ({
  securityPolicy,
  addNewPolicy,
  configureSecurityPolicy
}) => {
  const [selectedKey, setSelectedKey] = React.useState(1);
  const [openErrorModal, setOpenErrorModal] = React.useState(false);

  const onAddNewPolicy = (newSecurityPolicy: SecurityPolicy) => {
    const updatedSecurityPolicy = securityPolicy.filter(
      (item) => item.securityPolicyName === newSecurityPolicy.securityPolicyName
    );
    if (updatedSecurityPolicy && updatedSecurityPolicy.length > 0) {
      setOpenErrorModal(true);
    } else {
      addNewPolicy(newSecurityPolicy);
      setSelectedKey(1);
    }
  };

  const userSelection = (flag: boolean) => {
    setOpenErrorModal(false);
  };

  const onPolicySelection = (key: string) => {
    const selectedSecurityPolicy = securityPolicy.filter(
      (item) => item.key === key
    )[0];
    configureSecurityPolicy(selectedSecurityPolicy)
  };
  return (
    <div className="root-view">
      <React.Fragment>
        <Modal
          openModalcomponent={openErrorModal}
          titleTextColor="orange"
          userSelection={userSelection}
          titleText={"Warning"}
          message={"Duplicate Group Name Not Allowed"}
          messageColor={"black"}
          buttonYes
          buttonYesText={"Ok"}
        />
        {selectionOption.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              data-testid={item.value}
              value={"create a new security policy"}
              defaultChecked={selectedKey === index}
              name={"securitypolice"}
              onChange={() => setSelectedKey(item.key)}
            />
            {item.value}
          </div>
        ))}
        {selectedKey === 1 && (
          <div className="select-group">
            <h2>Select Security Group</h2>
            <Select
              options={securityPolicy}
              onSelectRegion={onPolicySelection}
              defaultValue={"Select Group"}
            />
          </div>
        )}
        {selectedKey === 0 && (
          <div className="select-group">
            <ConfigureNewSecurity addNewPolicy={onAddNewPolicy} />
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default ConfigureSecurity;
