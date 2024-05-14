import React from "react";

const alertStyles: { [key: string]: string } = {
  info: "bg-blue-100 border-blue-500 text-blue-700",
  success: "bg-green-100 border-green-500 text-green-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  error: "bg-red-100 border-red-500 text-red-700",
};

interface AlertProps {
  type: string;
  children: React.ReactNode;
}

function Alert({ type, ...props }: AlertProps) {
  const style: string = alertStyles[type] || alertStyles.info;
  return (
    <div className={`border-l-4 p-4 m-4 rounded ${style}`}>
      {props.children}
    </div>
  );
}

export default Alert;
