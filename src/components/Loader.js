import React from "react";
import { Spinner } from "native-base";

const Loader = (props) => {
  return (
    <Spinner size={props.size ? props.size : "large"} color={props.color} />
  );
};

export default Loader;
