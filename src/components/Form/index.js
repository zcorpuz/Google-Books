import React from "react";

export const Input = props => {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export const TextArea = props => {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export const FormBtn = props => {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}