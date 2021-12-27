import Image from "next/image";
import classes from "./value-box.module.css";

export default function ValueBox({ icon, title, description }) {
  return (
    <div className={classes.container}>
      <Image src={icon} width={50} height={50} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
