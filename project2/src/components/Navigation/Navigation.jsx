// import React from "react";
// import styles from './Navigation.module.css'

// const Navigation = () => {
//   console.log(styles);
//   return (
//     <nav className={`${styles.navigation} container`}>
//       <div className="logo">
//         <img src="/images/Header.png" alt="do some codeing logo" />
//       </div>

//         <ul >
//           <li >Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//     </nav>
//   );
// };

// export default Navigation;
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/Header.png" alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;