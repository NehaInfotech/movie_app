

import React, { useState, useEffect } from 'react';

function Movies() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayVideo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <img src="https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=eO9u-mXeGpMQ7kNvgHJPSfM&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=AiwCGCFJ9j8_hfntdWXC8bW&oh=01_Q5AaIAzrDTFRUX3pn7aNipaoX6qqBt6DgEYI3VGbp9syLwiD&oe=673FF465" alt="advertise" />
      {playVideo && (
        <video autoPlay>
          <source src="https://www.youtube.com/embed/4czY1zbnY98o0" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default Movies
