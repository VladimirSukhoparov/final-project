import React from "react";
import style from "./style.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.subheaderTop}>
        <div>
          <img src="https://img.icons8.com/ios-filled/150/000000/old-vmware-logo.png" />
        </div>
        <div className={style.title}>Fancy Posts</div>
        <div>Authorization</div>
      </div>
      <div className={style.subheaderBottom}> Поиск</div>
    </header>
  );
};
