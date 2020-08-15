import React from "react";

import ChakraInput from "./ChakraInput";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import Textarea from "./Textarea";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "chakraInput":
      return <ChakraInput {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "input":
      return <Input {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
