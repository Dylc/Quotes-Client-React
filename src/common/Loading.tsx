import React from "react";
import { CircleToBlockLoading } from "react-loadingg";

export const DEFAULT_SIZE = "large";
export const DEFAULT_COLOR = "rgb(45, 76, 131)";

const Loading = (props) => (
  <CircleToBlockLoading size={DEFAULT_SIZE} color={DEFAULT_COLOR} {...props} />
);

export default Loading;
