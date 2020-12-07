import React from "react";
type Props = {
  onClickOnButton: (onClickOnButton?: any) => void;
  buttonBg: any;
  buttonWidth: any;
  buttonHeight: any;
  buttonText: string;
  buttonTextColor: any;
  fontSize: any;
  fontWeight: any;
  disable?: boolean;
};

const CustomButton: React.FC<Props> = ({
  buttonBg,
  buttonText,
  buttonWidth,
  buttonHeight,
  fontSize,
  fontWeight,
  onClickOnButton,
  buttonTextColor,
  disable,
}) => {
  return (
    <div>
      <React.Fragment>
        <button
          disabled={disable ? disable : false}
          className="button-style"
          onClick={onClickOnButton}
          style={{
            width: buttonWidth,
            height: buttonHeight,
            background: buttonBg,
            fontSize: fontSize,
            justifyContent: "center",
            alignItems: "center",
            fontWeight: fontWeight,
            color: buttonTextColor,
            borderRadius: "8px",
            border: "none",
            boxShadow: "0px 8px 16px rgba(160, 164, 168, 0.35)"
          }}
        >
          {buttonText}
        </button>
        {/* <style jsx>{`
        .button-style {
          // width: ${buttonWidth};
          // height: ${buttonHeight};
          // background: ${buttonBg};
          // justify-content: center;
          // align-items: center;
          // font-size: ${fontSize};
          //font-weight: ${fontWeight};
          // color: ${buttonTextColor};
          //box-shadow: 0px 8px 16px rgba(160, 164, 168, 0.35);
          //border-radius: 8px;
          //border: none;
        }
      `}</style> */}
      </React.Fragment>
    </div>
  );
};

export default CustomButton;
