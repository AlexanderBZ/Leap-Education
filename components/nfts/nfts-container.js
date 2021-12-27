import NFT from "./nft";
import classes from "./nfts-container.module.css";

export default function NFTsContainer() {
  return (
    <div className={classes.container}>
      <section className={classes.nfts}>
        <NFT
          image={"/images/nfts/Aristotle.png"}
          tier={"Basic"}
          numberLeft={1}
        />
        <NFT image={"/images/nfts/Plato.png"} tier={"Pro"} numberLeft={2} />
        <NFT
          image={"/images/nfts/Einstein.png"}
          tier={"Master"}
          numberLeft={0}
        />
      </section>
      <section className={classes.text}>
        <h3>Buy an NFT to help support free education</h3>
        <button>View Crowdfund</button>
      </section>
      <hr className={classes.divider} />
    </div>
  );
}
