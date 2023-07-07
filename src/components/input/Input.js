import React from "react";

const Input = props => {
  const { value, onChange, placeholder = ''} = props;
  return (
    <div>
      <input value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
};

export default Input;
