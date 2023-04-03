import React from "react";
import { v4 as uuidv4 } from "uuid";

interface ILabelInput {
  labelName: string;
  inputType?: string;
  placeHolder?: string;
  inputName?: any;
}

const LabelInput = ({
  labelName,
  inputType = "text",
  placeHolder = "text",
  inputName = uuidv4(),
}: ILabelInput) => {
  return (
    <div className="InputLabel">
      <label htmlFor={inputName} className="InputName">
        {[labelName]}
      </label>
      <input
        type={inputType}
        name={inputName}
        placeholder={placeHolder}
        className="InputInfo"
      ></input>
    </div>
  );
};
export default LabelInput;
