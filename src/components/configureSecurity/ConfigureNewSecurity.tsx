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

        <style jsx>{`
          .card-styles {
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            -moz-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            -o-flex-wrap: wrap;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex: 0.95;
            // width: 90%;
            background-color: white;
            flex-direction: row;
            margin-left: 10px;
            -webkit-box-shadow: 3px 3px 5px 6px #ccc;
            -moz-box-shadow: 3px 3px 5px 6px #ccc;
            box-shadow: 3px 3px 5px 6px #ccc;
            padding: 5px;
            font-size: 1em;
            align-content: flex-start;
            text-align: flex-start;
            justify-content: flex-start;
            margin-left: 0.5em;
            margin-top: 2em;
          }
          .Img-content ul {
            display: flex;
            flex-direction: column;
          }
          .sub-content {
            margin-top: 1em;
          }
          .Img-content h2 {
            font-size: 1em;
            align-content: left;
            text-align: left;
            margin: 0;
            font-size: 14px;
            font-weight: bold;
            justify-content: flex-start;
          }
          .button-add {
            margin-top: 10em;
            margin-left: 0.5em;
          }
          .group-name-input {
            width: 20em;
            height: 2em;
            align-content: center;
            justify-content: center;
          }
          .input-text-style {
            margin-left: 0.5em;
          }
          .input-text-style h1 {
            margin-top: 1em;
            margin-botton: 0px;
          }
          .input-text-style input {
            margin-top: 0px;
          }
        `}</style>
      </React.Fragment>
    </div>
  );
};

export default ConfigureNewSecurity;
