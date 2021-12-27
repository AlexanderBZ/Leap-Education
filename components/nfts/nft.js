import Image from "next/image";
import classes from "./nft.module.css";

export default function NFT({ image, tier, numberLeft }) {
  return (
    <div className={classes.container}>
      <Image src={image} width={280} height={390} />
      <div className={classes.text}>
        <h5>{tier}</h5>
        <p>{`${numberLeft} left`}</p>
      </div>
    </div>
  );
}
