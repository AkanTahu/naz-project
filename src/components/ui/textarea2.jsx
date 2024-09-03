import React, { useState } from "react";
import { Terminal } from "lucide-react"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const Textarea2 = React.forwardRef(({ className, output }, ref) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setShowAlert(true);
    // setTimeout(() => {
    //   setShowAlert(false);
    // }, 5000); // Hide the alert after 3 seconds
  };
  return (
    <>
      <textarea
        className={cn(
          "flex min-h-[200px] w-1/2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        type="text"
        placeholder={output}
      />
      <button
        className="absolute group inline-flex h-12 items-center right-28 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-4 mt-2 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
        onClick={handleCopy}
      >
        Copy
      </button>
      {showAlert && (
        <Alert className="absolute bottom-4">
          <Terminal />
          <AlertTitle>Alert!</AlertTitle>
          <AlertDescription>
            Text copied to clipboard successfully!
          </AlertDescription>
        </Alert>
      )}
    </>
  );
});
Textarea2.displayName = "Textarea2";

export { Textarea2 };
