'use client'

import { useState } from "react";
import { searchFeedsByTerm } from "../data/apiLayer";
import { SearchBar } from "./searchBar";
import { PodcastFeedItemType } from "../types/podcastTypes";

export default function SearchableHome() {
  const [podcastData, setPodcastData] = useState<PodcastFeedItemType[]>([])
  const getFeeds = async (term: string) => {
    const searchResultObj = await searchFeedsByTerm(term)
    const feeds = searchResultObj.feeds.filter((feed: any) => ['en', 'en-us'].includes(feed?.language?.toLowerCase()))
    setPodcastData(feeds)
  }
  return (
    <div className="container flex flex-col gap-24 h-full mx-auto items-center">
      {/* <h1 className="text-4xl font-bold mb-4">Podcast Search</h1> */}
      {podcastData.length > 0 && (
        <div>
          {podcastData.map((podcast) => (
            <div key={podcast.id} className="flex items-center gap-4">
              <div>
                <h2 className="text-xl font-bold">{podcast.title}</h2>
                <h3 className="text-lg">{podcast?.author ?? podcast?.ownerName} -- {podcast.episodeCount} episodes</h3>
                <p>{podcast.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <SearchBar searchAction={getFeeds}/>
    </div>
  )
}