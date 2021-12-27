import SearchRow from "./search-row";
import classes from "./search-list.module.css";

export default function SearchList({ albums }) {
  // make sure albums is an array and then map it to search row
  if (Array.isArray(albums)) {
    return (
      <div className={classes.list}>
        {albums.map((album) => (
          <SearchRow album={album} key={album.objectID} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
