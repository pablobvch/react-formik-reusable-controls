import React from "react";

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return null;
    case "date":
      return null;
    case "chakraInput":
      return null;
    default:
      return null;
  }
}

export default FormikControl;
