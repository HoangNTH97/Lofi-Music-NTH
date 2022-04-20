import BackgroundVideo from './BackgroundList/BackgroundList';
import './background.scss';
import MusicPlay from '../musicplay/MusicPlay';
import { videoList } from '../../data/video';

function Background() {
  return (
    <div>
      <BackgroundVideo videoList={videoList} />
      <MusicPlay />
    </div>
  );
}
export default Background;
