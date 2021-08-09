//--------------------------------------------------
// useTheme
//--------------------------------------------------
import { useTheme } from '@context/ThemeProvider';
const isTheme = useTheme();
console.log(isTheme.theme);


//--------------------------------------------------
// styles
//--------------------------------------------------
import cn from 'classnames';
import styles from './styles.css';

const theme = 'dark';
className={cn(styles.wrapper, styles[theme])}


//--------------------------------------------------
// css
//--------------------------------------------------
.wrapper.dark {
    border: 2px solid orange;
}
.wrapper.light {
    border: 2px solid yellowgreen;
}
