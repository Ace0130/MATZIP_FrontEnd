import { v4 as uuidv4 } from "uuid";
import "./css/labelInput.css";

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
    <div className="labelInput">
      <label htmlFor={inputName}>{[labelName]}</label>
      <input
        type={inputType}
        name={inputName}
        placeholder={placeHolder}
      ></input>
    </div>
  );
};

export default LabelInput;
