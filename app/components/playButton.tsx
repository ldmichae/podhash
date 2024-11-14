'use client'

import { Play } from 'lucide-react'
import { useAudioPlayer } from '../providers/AudioPlayerContext'
import { PodcastEpisodeType } from '../page'

interface PlayPauseButtonProps {
  currentEpisode: PodcastEpisodeType
}

export function PlayPauseButton({ currentEpisode }: PlayPauseButtonProps) {

  const { setIsPlayerVisible, setNowPlayingEpisodeData, nowPlayingEpisodeData } = useAudioPlayer()
  const handlePlay = () => {
    setNowPlayingEpisodeData(currentEpisode)
    setIsPlayerVisible(true)
  }

  return (
    <div>
      {(nowPlayingEpisodeData?.enclosureUrl !== currentEpisode.enclosureUrl) ? (
        <button className="btn btn-primary flex items-center space-x-2" onClick={handlePlay}>
        {
          <Play size={20} />
        }
        <span>
          {
            'Play Episode'
          }
        </span>
      </button>
      ) :(
        <div> playing </div>
      )}
    </div>
  )
}