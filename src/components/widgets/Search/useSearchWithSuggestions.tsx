import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export function useSearchWithSuggestions<ResultType = string>(
  qFunc?: (query: string) => Promise<{ hits: ResultType[] }>
) {
  const [query, setQuery] = useState("");

  const [hits, setHits] = useState<ResultType[]>([]);
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const [debouncedSearchTerm] = useDebounce(query, qFunc ? 300 : 0);

  const clearQuery = () => {
    setQuery("");
    setHits([]);
  };

  useEffect(() => {
    if (qFunc && debouncedSearchTerm) {
      setIsSearching(true);
      if (!isSearching)
        qFunc(debouncedSearchTerm).then((result) => {
          setIsSearching(false);
          setHits(result.hits);
        });
    } else {
      setHits([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return {
    query,
    setQuery,
    clearQuery,
    hits,
    isSearching,
  };
}
