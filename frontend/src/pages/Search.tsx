import { useSearchContext } from "../contexts/SearchContext";

const Search = () => {
  const search = useSearchContext();
  console.log(search)

  return <>Search Page</>
}

export default Search;