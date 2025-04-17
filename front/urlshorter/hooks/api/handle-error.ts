import { toast } from "sonner";

export function handleError(err: any) {
   // this is the error comes from the backend
   toast.error(err.response?.data?.message || "Please enter a valid URL");
   // this is the error comes from the frontend request
   console.error(err.message);
}
