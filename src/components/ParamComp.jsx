import React from "react";
import { useParams } from "react-router-dom";

const ParamComp = () => {
  const param = useParams();
  console.log(param);
  // const { id } = useParams();   --> can write like this also, i.e..destructure

  return <div>ParamComp:{param.id} </div>;
};

export default ParamComp;
