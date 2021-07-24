import React from "react";
import styles from "./styles.module.css";
import Chip from "@material-ui/core/Chip";

interface IQuoteComponentTags {
  tags: string[];
  onClick: any;
  children?: unknown;
}

function Tags({ tags, onClick, children }: IQuoteComponentTags) {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} onClick={() => onClick(tag)} />
      ))}
    </div>
  );
}

export { Tags };
