import { Field, ErrorMessage } from "formik"

function MyFeild(props) {
  return <div className="mb-3">
    <label htmlFor={props.name} className="form-label">{props.label}</label>
    <Field name={props.name} type={props.type} id={props.name} placeholder={props.placeholder || props.label} className="form-control" />
    <ErrorMessage name={props.name} component={"p"} style={{ color: "red" }} />
  </div>
}

export default MyFeild