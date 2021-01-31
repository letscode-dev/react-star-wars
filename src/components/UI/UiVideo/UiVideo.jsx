import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

import '../index.css';
import styles from './UiVideo.module.css';

const UiVideo = ({
    src,
    playbackRate=1.0,
    classes
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);

    return (
        <video
            loop
            autoPlay
            muted
            ref={videoRef}
            className={cn(styles.video, classes)}
        >
            <source src={src} />
        </video>
    )
}

UiVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string,
}

export default UiVideo;


// import UiVideo from '@ui/UiVideo';
// import video from './background-star.mp4';

// const App = () => {
//     return (
//         <UiVideo
//             src={video}
//             playbackRate={0.5}
//         />
//     )
// }
