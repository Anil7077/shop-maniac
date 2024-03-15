import { useSnackBarContext } from "@/context/SnackbarContext";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let loadingToastId = null;
function SnackBar() {
  const { type, message } = useSnackBarContext();
  const renderToast = (type) => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        break;
      case "error":
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
        break;
      case "info":
        toast.info(message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
          autoClose: 3000,
         
        });
        break;
      case "loading":
        loadingToastId = toast.loading(message);
        break;
      case "updatesuccess":
        if (loadingToastId) {
          toast.update(loadingToastId, {
            render: message,
            type: "success",
            isLoading: false,
            autoClose: 3000,
            theme: "dark",
          });
        }
        break;
      case "updateerror":
        if (loadingToastId) {
          toast.update(loadingToastId, {
            render: message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            theme: "dark",
          });
        }
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    renderToast(type);
  }, [type]);
  return <ToastContainer />;
}

export default SnackBar;