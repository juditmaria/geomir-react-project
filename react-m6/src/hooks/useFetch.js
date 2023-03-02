import { useState } from 'React';

function useFetch(initialUrl, initialOptions) {
  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const [refresh, setRefresh] = useState(false);
    setLoading(true);
    setError(undefined);

    async function reRender() {
      console.log(refresh)
      setRefresh(true)
      console.log(refresh)
    }

    async function fetchData() {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
    fetchData();

  }, [url, options]);

  return { data, error, loading, setUrl, setOptions };
}