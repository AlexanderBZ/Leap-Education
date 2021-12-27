import { useState } from "react";
import SearchList from "./search-list";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./search-bar.module.css";

export default function SearchBar() {
  //Set empty array for search results
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (event) => {
    event.preventDefault();
    let formattedSearch = event.target.value + "";
    // replace spaces in search term with "%20"
    formattedSearch.replace(/ /g, "%20");
    const beatlyURL = `https://${process.env.applicationID}-dsn.algolia.net/1/indexes/beatly_index?query=${formattedSearch}&hitsPerPage=7`;

    //Include Algolia app ID and key with search request
    const response = await fetch(beatlyURL, {
      headers: {
        "X-Algolia-API-Key": process.env.algoliaApiKey,
        "X-Algolia-Application-Id": process.env.applicationID,
      },
    });
    const data = await response.json();
    await setSearchResults(data.hits);
  };

  return (
    <div>
      <form
        className={classes.searchBar}
        onChange={handleChange}
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchIcon className={classes.icon} width="25px" />
        <input id="searchTerm" type="text" placeholder="Search..." required />
        <SearchList albums={searchResults} width="25px" />
      </form>
    </div>
  );
}
