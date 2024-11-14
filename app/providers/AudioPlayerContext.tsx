'use client'

import React, { createContext, useContext, useState } from 'react'
import { PodcastEpisodeType } from '../page'

interface AudioPlayerContextType {
  isPlayerVisible: boolean
  setIsPlayerVisible: (visible: boolean) => void
  nowPlayingEpisodeData: PodcastEpisodeType | null
  setNowPlayingEpisodeData: (episodeData: PodcastEpisodeType | null) => void
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined)

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)
  const [nowPlayingEpisodeData, setNowPlayingEpisodeData] = useState<PodcastEpisodeType | null>(null)

  return (
    <AudioPlayerContext.Provider value={{ isPlayerVisible, setIsPlayerVisible, nowPlayingEpisodeData, setNowPlayingEpisodeData }}>
      {children}
    </AudioPlayerContext.Provider>
  )
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext)
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider')
  }
  return context
}