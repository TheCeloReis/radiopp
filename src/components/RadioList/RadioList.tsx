import React from "react";
import { RadioType } from "../../api/radios";

import styles from "./RadioList.module.css";
import RadioItem from "../RadioItem";

type PropsType = {
  radios: RadioType[];
};

const RadioList = (props: PropsType) => {
  return (
    <>
      <h2 className={styles.title}>Radios</h2>
      <ul className={styles.list}>
        {props.radios.map((radio) => (
          <RadioItem key={radio.radio_id} radio={radio} />
        ))}
      </ul>
    </>
  );
};

export default RadioList;
