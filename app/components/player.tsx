'use client'

import { useState, useRef, useEffect, RefObject } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, X } from 'lucide-react'
import { useAudioPlayer } from '../providers/AudioPlayerContext'

export function CustomAudioPlayer() {
  const { isPlayerVisible, setIsPlayerVisible, nowPlayingEpisodeData, setNowPlayingEpisodeData } = useAudioPlayer()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  let audioRef: RefObject<HTMLAudioElement> | null = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef?.current) {
        setCurrentTime(audioRef.current.currentTime);
        if(!duration){setDuration(audioRef.current.duration)}
      }
    }, 1000);

    return () => {
      clearInterval(intervalId)
      audioRef = null
    };
  }, [isPlayerVisible]);

  useEffect(() => {
    if(audioRef?.current?.readyState === 4) {
      setIsPlaying(true)
      audioRef?.current?.play()
    }
  }, [audioRef?.current?.readyState])
  

  const togglePlayPause = () => {
    const audio = audioRef?.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleClose = () => {
    setNowPlayingEpisodeData(null)
    if(audioRef?.current){
      audioRef.current.pause()
      setDuration(0)
      setCurrentTime(0)
      setIsPlaying(false)
      audioRef = null
    }
    setIsPlayerVisible(false)
  }

  const skipBackward = () => {
    if (audioRef?.current) {
      audioRef.current.currentTime -= 15
    }
  }

  const skipForward = () => {
    if (audioRef?.current) {
      audioRef.current.currentTime += 15
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!isPlayerVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-200 p-4 shadow-lg">
      <audio ref={audioRef} src={nowPlayingEpisodeData?.enclosureUrl} autoPlay/>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <button className="btn btn-circle btn-sm" onClick={skipBackward}>
            <SkipBack size={16}>
              -15s
            </SkipBack>
          </button>
          <button className="btn btn-circle btn-primary" onClick={togglePlayPause}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="btn btn-circle btn-sm" onClick={skipForward}>
            <SkipForward size={16}>
              +15s
            </SkipForward>
          </button>
        </div>
        <button className="btn btn-circle btn-sm" onClick={toggleClose}>
          <X size={16} />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration ?? 0}
          value={currentTime ?? 0}
          onChange={(e) => {
            const audio = audioRef?.current
            if (audio) {
              audio.currentTime = Number(e.target.value)
              setCurrentTime(audio.currentTime)
            }
          }}
          className="range range-xs grow"
        />
        <span className="text-sm">{formatTime(duration)}</span>
      </div>
      <div className="flex items-center mt-2">
        <Volume2 size={16} className="mr-2" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          defaultValue={1}
          onChange={(e) => {
            const audio = audioRef?.current
            if (audio) {
              audio.volume = Number(e.target.value)
            }
          }}
          className="range range-xs grow"
        />
      </div>
    </div>
  )
}