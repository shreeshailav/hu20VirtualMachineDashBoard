import React from "react";
import Dialog from "@material-ui/core/Dialog";
import {white} from './../../utils/colors'
import './ModalComponent.css'
type Props = {
  openModalcomponent: boolean;
  titleTextColor: string;
  userSelection: (flag: boolean) => void;
  titleText: string;
  message: string;
  messageColor?: string;
  buttonNo?:boolean;
  buttonYes?:boolean;
  buttonYesText?: string;
  buttonNoText?: string;
  buttonNoTextColor?: string;
  buttonYesTextColor?: string;
};

export const Modal = ({
  openModalcomponent,
  titleTextColor,
  userSelection,
  titleText,
  message,
  messageColor,
  buttonYes,
  buttonNo,
  buttonYesText,
  buttonNoText,
  buttonNoTextColor,
  buttonYesTextColor,
}: Props) => {

  return (
    <Dialog
      open={openModalcomponent}
      onClose={() => userSelection(false)}
      aria-labelledby="responsive-dialog-title"
      fullWidth
    >
      <div className="root-view-modal">
        <h2 style={{color:titleTextColor}}>{titleText}</h2>
        <h4 style={{color:messageColor}}>{message}</h4>
        {userSelection && (
          <div className="proceed-buttons">
            {buttonNo && <button className="no-button" onClick={() => userSelection(false)} style={{color:buttonYesTextColor || white }}>
              {buttonNoText || "No"}
            </button>}
            {buttonYes &&<button className="yes-button" onClick={() => userSelection(true)} style={{color:buttonNoTextColor || white }}>
              {buttonYesText || "OK"}
            </button>}
          </div>
        )}
      </div>
    </Dialog>
  );
};
