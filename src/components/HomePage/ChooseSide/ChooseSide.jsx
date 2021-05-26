import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
    classes,
    theme,
    text,
    img,
}) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: "Light Side",
            img: imgLightSide,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarkSide,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEITRAL,
            text: "I'm Han Solo",
            img: imgFalcon,
            classes: styles.item__neitral,
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map(({ theme, text, img, classes }, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;
