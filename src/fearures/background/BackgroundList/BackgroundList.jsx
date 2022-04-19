import React, { useState } from 'react';
import Button from '../../../components/PopoverAction/PopoverAction';
import PopoverBtn from '../../../components/PopoverBtn/PopoverBtn';
import './BackgroundList.scss';

BackgroundVideo.propTypes = {};

function BackgroundVideo({ videoList }) {
  const [day, setDay] = useState(true);
  const [rain, setRain] = useState(false);
  const [inOut, setInOut] = useState(false);

  const handleVideo = () => {
    setDay(!day);
  };
  const handleRain = () => {
    setRain(!rain);
  };
  const handleInOut = () => {
    setInOut(!inOut);
  };
  console.log(`day:${day}, rain:${rain}, inOut:${inOut}`);

  return (
    <div className="background">
      <div className="city-rain">
        <Button handlePopover={handleRain} isOn={!rain} btnName="swapDay" />
      </div>
      <div className="city-ra">
        <Button handlePopover={handleVideo} isOn={day} btnName="swapRain" />
      </div>
      <div className="enter">
        <PopoverBtn
          handleInOut={handleVideo}
          handlePopover={handleInOut}
          isOn={inOut}
          btnName="Enter"
        />
      </div>

      <div className="background-video">
        <video
          className="day"
          autoPlay
          muted
          loop
          style={
            day === true && rain === false && inOut === false ? { opacity: 1 } : { opacity: 0 }
          }
        >
          <source className="day-sunny" type="video/mp4" src={videoList[0].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={day === true && rain === true && inOut === false ? { opacity: 1 } : { opacity: 0 }}
        >
          <source className="day-rainy" type="video/mp4" src={videoList[2].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={
            day === false && rain === false && inOut === false ? { opacity: 1 } : { opacity: 0 }
          }
        >
          <source className="day-sunny" type="video/mp4" src={videoList[1].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={
            rain === true && day === false && inOut === false ? { opacity: 1 } : { opacity: 0 }
          }
        >
          <source className="day-sunny" type="video/mp4" src={videoList[3].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={
            day === false && inOut === true && rain === false ? { opacity: 1 } : { opacity: 0 }
          }
        >
          <source className="day-sunny" type="video/mp4" src={videoList[4].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={day === false && inOut === true && rain === true ? { opacity: 1 } : { opacity: 0 }}
        >
          <source className="day-sunny" type="video/mp4" src={videoList[6].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={day === true && inOut === true && rain === false ? { opacity: 1 } : { opacity: 0 }}
        >
          <source className="day-sunny" type="video/mp4" src={videoList[5].url} />
        </video>

        <video
          className="day"
          autoPlay
          muted
          loop
          style={day === true && inOut === true && rain === true ? { opacity: 1 } : { opacity: 0 }}
        >
          <source className="day-sunny" type="video/mp4" src={videoList[7].url} />
        </video>
      </div>
    </div>
  );
}

export default BackgroundVideo;
