import React from "react";
import { toast } from "react-toastify";

export default function notify(props) {
  const config = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (props.type === "info") {
    toast.info(props.message, config);
  } else if (props.type === "error") {
    toast.error(props.message, config);
  } else if (props.type === "warn") {
    toast.warn(props.message, config);
  } else if (props.type === "success") {
    toast.success(props.message, config);
  }
}
