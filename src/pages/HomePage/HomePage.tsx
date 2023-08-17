import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className="header__text">Home Page</h1>
            <p className={styles.text}>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
            <p className={styles.text}>The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is one of the highest-grossing media franchises of all time.</p>
        </div>
    );
}

export default HomePage;
