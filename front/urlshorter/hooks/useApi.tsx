import { useState } from "react";
import { handleError } from "./api/handle-error";

export function useApi<T extends any[], R>(callback: (...args: T) => Promise<R>) {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState<R | null>(null);

   const execute = async (...args: T) => {
      setLoading(true);

      try {
         const result = await callback(...args);
         setData(result);
      } catch (err) {
         handleError(err);
      } finally {
         setLoading(false);
      }
   };

   return { loading, data, execute };
}
