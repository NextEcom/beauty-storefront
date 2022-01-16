import { CloseOutlined, SearchOutlined } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
} from "@mui/material";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  display: "flex",
  alignItems: "center",
  boxShadow: theme.shadows[1],
  maxWidth: 640,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const IconWrapper = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  fontStyle: "italic",
  paddingBottom: 0,
  maxHeight: "320px",
  overflow: "auto",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  zIndex: theme.zIndex.modal,
  top: "100%",
  width: "100%",
  boxShadow: `0px 4px 4px 0px rgba(0,0,0,0.30)`,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));

type Props = {
  suggestionsQueryFn?: (query: string) => Promise<{ hits: string[] }>;
};

async function defaultQueryFunction(
  searchTerm: string
): Promise<{ hits: string[] }> {
  return {
    hits: ["milk", "sugar"],
  };
}

export function SearchAutoComplete({
  suggestionsQueryFn = defaultQueryFunction,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState<string[]>([]);
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const [debouncedSearchTerm] = useDebounce(searchTerm, 350);

  const handleClear = () => {
    setSearchTerm("");
    setResults([]);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      if (!isSearching)
        suggestionsQueryFn(debouncedSearchTerm).then((result) => {
          setIsSearching(false);
          setResults(result.hits);
        });
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <Search
      elevation={results.length ? 3 : 0}
      sx={{
        borderBottomLeftRadius: results.length ? 0 : 8,
        borderBottomRightRadius: results.length ? 0 : 8,
      }}
    >
      <StyledInputBase
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        aria-label="search"
      />
      <IconWrapper>
        {searchTerm ? (
          <IconButton aria-label="clear input" onClick={handleClear}>
            <CloseOutlined />
          </IconButton>
        ) : (
          <IconButton disabled>
            <SearchOutlined />
          </IconButton>
        )}
      </IconWrapper>
      {results.length ? (
        <StyledPaper elevation={0}>
          <StyledList aria-label="search suggestions">
            {results.map((result, index) => {
              const matches = match(result, searchTerm);
              const parts = parse(result, matches);

              return (
                <>
                  {index === 0 && <Divider />}
                  <ListItem button key={result}>
                    <ListItemText>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: part.highlight ? 700 : 400,
                            fontStyle: part.highlight ? "normal" : "italic",
                          }}
                        >
                          {part.text}
                        </span>
                      ))}
                    </ListItemText>
                  </ListItem>
                  {results.length - 1 !== index ? <Divider /> : null}
                </>
              );
            })}
          </StyledList>
        </StyledPaper>
      ) : null}
    </Search>
  );
}
