import React from "react";

export const Input = ({
  value,
  onChange,
  placeholder,
  type,
  defaultValue,
  className,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className={`my-1 rounded-sm border-2 text-gray-800 outline-white -1 p-1 ${className}`}
      placeholder={placeholder ?? ""}
      type={type ?? "text"}
      defaultValue={defaultValue ?? null}
    />
  );
};
