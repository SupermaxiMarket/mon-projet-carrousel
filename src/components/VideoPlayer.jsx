import React from 'react';

export default function VideoPlayer() {
  return (
    <div style={{ width: '100%', maxWidth: '1080px', margin: 'auto' }}>
      <video
        controls
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto' }}
        src="/video.mp4"
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
}