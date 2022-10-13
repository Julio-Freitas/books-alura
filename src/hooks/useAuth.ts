import { useCallback, useEffect, useState } from "react";

export const usePersistToken = () => {
  const [token, setToken] = useState<string | null>("");

  const saveToken = useCallback((value: string) => {
    setToken(value);
    sessionStorage.setItem("token", value);
  }, []);

  const userLogout = useCallback(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (sessionToken) sessionStorage?.removeItem("token");
    setToken(null);
  }, []);

  useEffect(() => {
    const sessionToken = sessionStorage?.getItem("token");
    if (sessionToken) {
      setToken(sessionStorage?.token);
    }
  }, [sessionStorage]);

  return {
    saveToken,
    token,
    userLogout,
  };
};

export const useGetToken = () => sessionStorage?.getItem("token");

export const useCleanToken = () => () => sessionStorage?.removeItem("token");
