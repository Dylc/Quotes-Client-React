import React from "react";
import styles from "./styles.module.css";
import Chip from "@material-ui/core/Chip";

interface IQuoteComponentTags {
  tags: string[];
  onClick?: () => void;
  children?: unknown;
}

function Tags({ tags, onClick, children }: IQuoteComponentTags) {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} />
      ))}
    </div>
  );
}

export { Tags };
