//FETCH DATA

import { useQuery } from "react-query";
import { IPhotosResponse, RequestParams } from "./types";

const fetchPhotos = async (requestParams: RequestParams) => {
  const { page, per_page } = requestParams;
  const URL = `https://api.unsplash.com/photos/?page=${page}&per_page=${per_page}`;

  const APIKEY = import.meta.env.VITE_UNSPLASH_KEY;
  const config: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${APIKEY}`,
    },
  };

  const response = await fetch(URL, config);

  return response.json();
};

//HOOK
export const useGetPhotos = (requestParams: RequestParams) => {
  return useQuery<IPhotosResponse[], Error>(["fetchPhotos", []], () =>
    fetchPhotos(requestParams)
  );
};
