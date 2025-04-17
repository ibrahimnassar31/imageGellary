'use client';
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { toast } from "sonner";

const CopyButton = ({ value }: { value: string }) => {
   const [isCopied, setIsCopied] = useState(false);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(value);
         setIsCopied(true);
         toast.success("copied to clipboard!");
         setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
         toast.error("Failed to copy URL");
         console.error("Failed to copy URL:", err);
      }
   };

   return (
      <button
         onClick={handleCopy}
         className="size-10 flex items-center justify-center rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-all [&_svg]:size-6"
      >
         {isCopied ? <FaCheck /> : <IoCopy />}
      </button>
   );
};

export default CopyButton;
