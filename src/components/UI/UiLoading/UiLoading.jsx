import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import cn from "classnames";

import loaderBlack from "./img/loader-black.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";

import "../index.css";
import styles from "./UiLoading.module.css";

const UiLoading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    const icons = {
      black: loaderBlack,
      white: loaderWhite,
      blue: loaderBlue,
    };
    setLoaderIcon(icons[theme] || loaderBlack);
  }, [theme]);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="Loader"
    />
  );
};

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoading;

// import UiLoading from '@ui/UiLoading';

// const App = () => {
//     return (
//         <UiLoading />
//     )
// }
