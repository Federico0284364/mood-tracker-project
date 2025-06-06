import { useState } from "react";

export default function Input({className, userName, ...props}){
  

  

  return (
    <input {...props} value={userName} className={className + ' rounded'}></input>
  )
}