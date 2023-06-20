import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { Nullable } from "shared/api/rest";
import { useSnackbar } from "notistack";

interface APIResponse<T> {
  data: Nullable<T>;
  error: Nullable<AxiosError<T>>;
  isLoading: boolean;
  executeRequest: () => void;
}

export default function useAPI<T>(url: string, method: Method = "GET", config?: AxiosRequestConfig, isManual = false): APIResponse<T> {
  const { enqueueSnackbar } = useSnackbar();
  const [response, setResponse] = useState<APIResponse<T>>({
    data: null,
    error: null,
    isLoading: true,
    executeRequest: () => {
      void fetchData();
    },
  });

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      const result: AxiosResponse<T> = await axios.request<T>({ url, method, ...config });
      setResponse((prevResponse: APIResponse<T>) => ({
        ...prevResponse,
        data: result.data,
        error: null,
        isLoading: false,
      }));
    } catch (error: unknown) {
      setResponse((prevResponse: APIResponse<T>) => ({
        ...prevResponse,
        data: null,
        error: error as AxiosError<T>,
        isLoading: false,
      }));
      enqueueSnackbar(`Error getting data from ${url}`, { variant: "error" });
    }
  }, [config, enqueueSnackbar, method, url]);

  const executeRequest = useCallback((): void => {
    void fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!isManual) {
      void fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, config, isManual]);

  return {
    ...response,
    executeRequest,
  };
}
