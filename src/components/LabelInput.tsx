import { v4 as uuidv4 } from "uuid";
import "./css/labelInput.css";

interface LabelInputProps {
  labelName: string;
  inputType?: string;
  placeHolder?: string;
  inputName?: any;
  pattern?: string;
  required?: boolean;
}

const LabelInput = ({
  labelName,
  inputType = "text",
  placeHolder = "text",
  inputName = uuidv4(),
  pattern,
  required = true,
}: LabelInputProps) => {
  return (
    <div className="labelInput">
      <label htmlFor={inputName}>{[labelName]}</label>
      <input
        type={inputType}
        name={inputName}
        placeholder={placeHolder}
        pattern={pattern}
        required={required}
      ></input>
    </div>
  );
};

export default LabelInput;
