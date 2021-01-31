import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
    classes,
    onClick,
    text,
    img,
}) => (
    <div
        className={cn(styles.item, classes)}
        onClick={onClick}
    >
        <div className={styles.item__header}>{text}</div>
        <img className={styles.item__img} src={img} alt={text} />
    </div>
)

ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    img: PropTypes.string,
}

const ChooseSide = () => {
    const isTheme = useTheme();

    return (
        <div className={styles.container}>
            <ChooseSideItem
                classes={styles.item__light}
                onClick={() => isTheme.change(THEME_LIGHT)}
                text="Light Side"
                img={imgLightSide}
            />
            <ChooseSideItem
                classes={styles.item__dark}
                onClick={() => isTheme.change(THEME_DARK)}
                text="Dark Side"
                img={imgDarkSide}
            />
            <ChooseSideItem
                classes={styles.item__neitral}
                onClick={() => isTheme.change(THEME_NEITRAL)}
                text="I'm Han Solo"
                img={imgFalcon}
            />
        </div>
    )
}

export default ChooseSide;
