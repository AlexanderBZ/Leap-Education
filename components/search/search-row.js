import Link from "next/link";
import classes from "./search-row.module.css";

export default function SearchRow({ album }) {
  return (
    <Link href={"/album/?slug=${album.slug}"} as={`/album/${album.slug}`}>
      <a>
        <div className={classes.fullRow}>
          <div className={classes.albumRow}>
            <img
              src={album.album_cover}
              alt={`${album.album_name}: ${album.artist}`}
              className={classes.albumCover}
            />
            <div className={classes.text}>
              <h2>{album.album_name}</h2>
              <h3>{album.artist}</h3>
            </div>
          </div>
          <hr />
        </div>
      </a>
    </Link>
  );
}
