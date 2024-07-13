import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import banner from '../../assets/banner.png';

const Banner = ({ card, categoryLookup }) => {

    if (!card || !card.category || !categoryLookup || !categoryLookup[card.category]) {
        return null;
    }

    const { title, link, description } = card;
    const { name, primaryColor } = categoryLookup[card.category];

    const titleStyle = {
        backgroundColor: primaryColor,

    };

    return (
        <main id="banner" className={styles.layer} style={{ backgroundImage: `url(${banner})`, '--primary-color': primaryColor }}>
            <div className={styles.gradient}></div>
            <section className={styles.content}>
                <h1 className={styles.name} style={titleStyle}>{name}</h1>
                <div className={styles.description}>
                    <h2 className={styles.title2}>{title}</h2>
                    <p className={styles.subtitle2}>{description}</p>
                </div>
            </section>
            <section className={styles.containerBanner}>
                <iframe
                    src={link}
                    title={title}
                    className={styles.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </main>
    );
}

Banner.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    categoryLookup: PropTypes.object.isRequired,
};

export default Banner;
