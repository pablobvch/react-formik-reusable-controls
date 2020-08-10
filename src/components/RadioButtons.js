import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons({ label, name, options, ...rest }) {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          console.log("Field props", field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
