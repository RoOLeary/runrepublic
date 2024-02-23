import type { FC } from 'react';
import React from 'react';

import ButtonPlayMusicPlayer from '@/components/ButtonPlayMusicPlayer';
import type { PostDataType } from '@/data/types';

export interface MediaAudioProps {
  post: PostDataType;
}

const MediaAudio: FC<MediaAudioProps> = ({ post }) => {
  return (
    <ButtonPlayMusicPlayer
      className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center"
      post={post}
    />
  );
};

export default MediaAudio;
