import React from "react";
import { Select } from "./../select/select";
import { primary, grey } from "./../../utils/colors";
import CustomButton from "./../button/Button";
import {SecurityPolicy} from './../../store/virtualMachin/types'
const securityType = [
  { key: "st1", value: "HTTPS" },
  { key: "st2", value: "SSH" },
  { key: "st3", value: "SMTP" },
];
import './ConfigureNewSecurity.css'
type Props = {
  addNewPolicy: (newSecurityPolicy:SecurityPolicy)=>void
};

const ConfigureNewSecurity: React.FC<Props> = ({addNewPolicy}) => {
  const [enableAdd, setEnableAdd] = React.useState(false);
  const [remark, setRmark] = React.useState("");
  const [groupName, setGroupName] = React.useState("");
  const [selectionKey, setSelectionKey] = React.useState("");
  const onPolicyTypeSelection = (key: string) => {
    setSelectionKey(key);
    if (groupName.length > 0 && key.length > 0) setEnableAdd(true);
    else setEnableAdd(false);
  };
  const onPolicyGroupNameSelection = (name: string) => {
    setGroupName(name);
    if (name.length > 0 && selectionKey.length > 0) setEnableAdd(true);
    else setEnableAdd(false);
  };
  const onAddRule = () =>{

    console.log('kjbjkcbejkcbkjwbejkbjkerb')
    const policyId = Math.floor(Math.random() * 120) + 20
    const newSecurityPolicy = {
      securityPolicyId: 'policy'+policyId,
      securityPolicyName: groupName,
      securityPolicyType: securityType.filter((item)=>item.key === selectionKey )[0].value,
      securityPolicyProtocol: 'TCP',
      securityPolicyPort: 334,
      securityPolicySource: '192.168.0.1',
      securityPolicyDescription: remark,
      key: 'policy'+policyId,
      value: groupName,
    }
    addNewPolicy(newSecurityPolicy)
  }
  return (
    <div>
      <React.Fragment>
        <div className="input-text-style">
          <h1>New Security Group</h1>
          <input
            className="group-name-input"
            value={groupName}
            placeholder={"New Security Group Name"}
            onChange={(event) => onPolicyGroupNameSelection(event.target.value)}
          />
          <h1>Add Rule</h1>
        </div>

        <div className="card-styles">
          <div className="Img-content">
            <h2>{"Type"}</h2>
            <div className="sub-content">
              <Select
                options={securityType}
                onSelectRegion={onPolicyTypeSelection}
                defaultValue={"Type"}
              />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Protocol"}</h2>
            <div className="sub-content">
              <input disabled value={"TCP"} />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Port Range"}</h2>
            <div className="sub-content">
              <input disabled value={"443"} />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Source"}</h2>
            <div className="sub-content">
              <input disabled value={"192.268.0.1"} />
            </div>
          </div>
          <div className="Img-content">
            <h2>{"Description"}</h2>
            <div className="sub-content">
              <input
                value={remark}
                onChange={(event) => setRmark(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="button-add">
          <CustomButton
            buttonBg={enableAdd ? primary : grey}
            buttonText={"Add Rule"}
            buttonWidth={"155px"}
            buttonHeight={"48px"}
            fontSize={"14px"}
            fontWeight={"normal"}
            onClickOnButton={() => onAddRule()}
            buttonTextColor={"white"}
            // disable={!enableAdd}
          />
        </div>
      </React.Fragment>
    </div>
  );
};

export default ConfigureNewSecurity;
