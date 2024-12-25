/**
 * Customized toast messages
 */

import { toast } from "sonner";

interface ToastProps {
  message: string;
}

const SuccessToast = ({ message }: ToastProps) => {
  return toast.success(message, {
    classNames: {
      title: "text-base",
      description: "text-lg",
      icon: "text-xl",
    },
  });
};

export { SuccessToast };
