import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-lg bg-green-600 text-white max-w-md"
      : "fixed top-4 right-4 z-50 p-4 rounded-lg bg-red-600 text-white max-w-md";

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-sm font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;