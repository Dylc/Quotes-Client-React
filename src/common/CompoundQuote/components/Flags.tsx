import React from 'react'
import styles from "./styles.module.css";

interface IQuoteComponentFlags {
    flags: any[]
    onClick: any
}

function Flags({flags, onClick} : IQuoteComponentFlags) {
    return (
      <div className={styles.flagsContainer}>
        {flags.map((flag) => (
          <img key={flag.name} width={24} height={24} src={flag.src} onClick={()=>onClick(flag.name)}/>
        ))}
      </div>
    );
}

export { Flags }
