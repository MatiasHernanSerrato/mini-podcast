import React from "react";

const Input = props => {
  const { value, onChange } = props;
  return (
    <div>
      <input value={value} onChange={onChange}/>
    </div>
  )
};

export default Input;
