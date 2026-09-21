import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export function useFetch(path) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetch(`${API_URL}${path}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar ${path} (HTTP
${response.status})`);
                }
                return response.json();
            })
            .then((result) => {
                if (!ignore) setData(result);
            })
            .catch((err) => {
                if (!ignore) setError(err);
            })
            .finally(() => {
                if (!ignore) setLoading(false);
            });
        return () => {
            ignore = true;
        };
    }, [path]);
    return { data, loading, error };
}
