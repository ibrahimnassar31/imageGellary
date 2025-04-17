"use client";

import CopyButton from "@/components/copy-button";
import { useApi } from "@/hooks/useApi";
import { axiosInstance } from "@/services/axios";
import { useState } from "react";

export default function UrlForm() {
   const [url, setUrl] = useState("");

   const {
      loading: isLoading,
      data: shortUrl,
      execute: createURL,
   } = useApi(async (url: string) => {
      const { data } = await axiosInstance.post("/urls", { originalUrl: url });
      return data.shortUrl;
   });

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await createURL(url);
   };

   return (
      <div className="shorten">
         <div className="container">
            <form onSubmit={handleSubmit} className="shorten__form">
               <div className="shorten__input-group">
                  <input
                     type="url"
                     placeholder="Shorten a link here..."
                     className={`shorten__input`}
                     value={url}
                     onChange={(e) => setUrl(e.target.value)}
                     required
                  />
               </div>
               <button type="submit" className="shorten__submit" disabled={isLoading}>
                  {isLoading ? "Please wait..." : "Shorten It!"}
               </button>
            </form>

            {shortUrl && (
               <div className="shorten__result">
                  <p className="shorten__original">{url}</p>
                  <div className="shorten__shortened">
                     <span className="shorten__short-url">{shortUrl}</span>
                     <CopyButton value={shortUrl} />
                  </div>
               </div>
            )}
         </div>

         <style jsx>{`
            .shorten {
               transform: translateY(-50%);
               margin-bottom: -64px;
            }

            .shorten__form {
               background-color: var(--color-dark-violet);
               background-image: url("/bg-shorten-mobile.svg");
               background-position: top right;
               background-repeat: no-repeat;
               background-size: cover;
               padding: 24px;
               border-radius: 10px;
               display: flex;
               flex-direction: column;
               gap: 16px;
            }

            .shorten__input-group {
               flex: 1;
            }

            .shorten__input {
               width: 100%;
               padding: 12px 16px;
               border: 3px solid transparent;
               border-radius: 5px;
               font-size: 16px;
               font-family: inherit;
            }

            .shorten__input::placeholder {
               color: var(--color-grayish-violet);
               opacity: 0.5;
            }

            .shorten__input--error {
               border-color: var(--color-red);
            }

            .shorten__error {
               color: var(--color-red);
               font-size: 14px;
               font-style: italic;
               margin-top: 8px;
            }

            .shorten__submit {
               background-color: var(--color-cyan);
               color: white;
               font-weight: var(--font-weight-bold);
               padding: 12px;
               border-radius: 5px;
               font-size: 18px;
               transition: background-color 0.3s;
            }

            .shorten__submit:hover:not(:disabled) {
               background-color: hsl(180, 66%, 60%);
            }

            .shorten__submit:disabled {
               opacity: 0.5;
               cursor: not-allowed;
            }

            .shorten__result {
               margin-top: 24px;
               background: white;
               border-radius: 5px;
               overflow: hidden;
            }

            .shorten__original {
               padding: 16px;
               border-bottom: 1px solid rgba(0, 0, 0, 0.1);
               color: var(--color-very-dark-violet);
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
            }

            .shorten__shortened {
               padding: 16px;
               display: flex;
               flex-direction: column;
               gap: 12px;
            }

            .shorten__short-url {
               color: var(--color-cyan);
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
            }

            .shorten__copy {
               background-color: var(--color-cyan);
               color: white;
               font-weight: var(--font-weight-bold);
               padding: 8px;
               border-radius: 5px;
               font-size: 16px;
               transition: background-color 0.3s;
            }

            .shorten__copy--copied {
               background-color: var(--color-dark-violet);
            }

            @media (min-width: 768px) {
               .shorten__form {
                  flex-direction: row;
                  align-items: flex-start;
                  padding: 48px 64px;
                  gap: 24px;
               }

               .shorten__input {
                  font-size: 20px;
                  padding: 16px;
               }

               .shorten__submit {
                  min-width: 188px;
                  padding: 16px 32px;
               }

               .shorten__shortened {
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
               }

               .shorten__short-url {
                  font-size: 20px;
               }

               .shorten__copy {
                  min-width: 103px;
                  padding: 8px 24px;
               }
            }
         `}</style>
      </div>
   );
}
