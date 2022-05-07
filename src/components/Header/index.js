import React from "react";
import style from "./style.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.subheaderTop}>
        <div>
        </div>
        <div className={style.title}>Fancy Posts</div>
        <div>Amet ea ea amet consequat cillum ullamco id.</div>
      </div>
      <div className={style.subheaderBottom}> Amet id occaecat in enim ipsum labore fugiat deserunt.</div>
    </header>
  );
};
