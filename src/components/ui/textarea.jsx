import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, onHandle, ...props }, ref) => {
  function isLang() {
    if (props.changeLang == "1") {
      return (
        <textarea
          className={cn(
            "flex min-h-[200px] w-1/2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className
          )}
          ref={ref}
          type="text"
          onChange={onHandle}
          placeholder="Isi kata-kata sesukamu😁"
          // value={value}
        />
      );
    } else {
      return (
        <textarea
          className={cn(
            "flex min-h-[200px] w-1/2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className
          )}
          ref={ref}
          type="text"
          onChange={onHandle}
          placeholder="Write any word you want😁"
          // value={value}
        />
      );
    }
  }

  return isLang();
});
Textarea.displayName = "Textarea";

export { Textarea };
