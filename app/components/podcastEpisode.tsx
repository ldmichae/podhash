import { getRandomSafeColor } from '../styles/twEnums'
import { PodcastEpisodeType } from '../types/podcastTypes'
import { PlayPauseButton } from './playButton'
import { DescriptionToggle } from './toggleDescription'

interface PodcastEpisodeProps {
  podcastData: PodcastEpisodeType
}

export default function PodcastEpisode({podcastData}: PodcastEpisodeProps) {
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`
  }

  const randomSafeColor1 = getRandomSafeColor()
  const randomSafeColor2 = getRandomSafeColor()

  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
      <figure className={`bg-gradient-to-r from-${randomSafeColor1}-950 to-${randomSafeColor2}-900`}>
        <div className="flex items-center space-x-4 p-4">
          <div>
            <h1 className="card-title text-xl line-clamp-5">{podcastData.title}</h1>
            <p className="text-sm text-base-content/60">{podcastData.datePublishedPretty}</p>
          </div>
        </div>
      </figure>
      <div className="card-body">
        
        <div className="flex items-center justify-between mt-4">
          <PlayPauseButton currentEpisode={podcastData}/>
          <span className="text-sm text-base-content/60">{formatDuration(podcastData.duration)}</span>
        </div>
        
        <DescriptionToggle description={podcastData.description} />
        
        <div className="card-actions justify-end mt-4">
          <a
            href={podcastData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            View Episode Details
          </a>
        </div>
      </div>
    </div>
  )
}


export function SkeletonPodcastEpisode() {
  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto animate-pulse">
      <figure className="bg-gradient-to-r from-gray-300 to-gray-400 h-48"></figure>
      <div className="card-body">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-full mt-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mt-2"></div>
        <div className="card-actions justify-end mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  )
}