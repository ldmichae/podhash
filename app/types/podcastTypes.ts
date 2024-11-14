// Define the type for our podcast episode
export type PodcastEpisodeType = {
  id: number
  title: string
  link: string
  description: string
  datePublishedPretty: string
  enclosureUrl: string
  duration: number
  feedImage: string
  author: string
  ownerName: string
  episodeCount: number
}

export type PodcastFeedItemType = {
  id: number
  // The internal PodcastIndex.org Feed ID.

podcastGuid: string
// The GUID from the podcast:guid tag in the feed. This value is a unique, global identifier for the podcast.

// See the namespace spec for guid for details.

title: string
// Name of the feed

url: URL
// Current feed URL

originalUrl: URL
// The URL of the feed, before it changed to the current url value.

link: URL
// The channel-level link in the feed

description: string
// The channel-level description

// Uses the longer of the possible fields in the feed: <description>, <itunes:summary> and <content:encoded>

author: string
// The channel-level author element.

// Usually iTunes specific, but could be from another namespace if not present.

ownerName: string
// The channel-level owner:name element.

// Usually iTunes specific, but could be from another namespace if not present.

image: URL
// The channel-level image element.

artwork: URL
// The seemingly best artwork we can find for the feed.

// Might be the same as image in most instances.

lastUpdateTime: number
// The channel-level pubDate for the feed, if it’s sane.

// If not, this is a heuristic value, arrived at by analyzing other parts of the feed, like item-level pubDates.

lastCrawlTime: number
// The last time we attempted to pull this feed from its url.

lastParseTime: number
// The last time we tried to parse the downloaded feed content.

lastGoodHttpStatusTime: number
// Timestamp of the last time we got a "good", meaning non-4xx/non-5xx, status code when pulling this feed from its url.

lastHttpStatus: number
// The last http status code we got when pulling this feed from its url.

// You will see some made up status codes sometimes. These are what we use to track state within the feed puller. These all start with 9xx.

contentType: string
// The Content-Type header from the last time we pulled this feed from its url.

itunesId: number | null
// The iTunes ID of this feed if there is one, and we know what it is.

generator: string
// The channel-level generator element if there is one.

language: string
// The channel-level language specification of the feed.

// Languages accord with the RSS Language Spec.

explicit: boolean
// Is feed marked as explicit

type: number
//  Type of source feed where:

medium: string
// The value of the podcast:medium attribute for the feed.

// See the medium description in the Podcast Namespace for more information.

dead: number
// At some point, we give up trying to process a feed and mark it as dead. This is usually after 1000 errors without a successful pull/parse cycle. Once the feed is marked dead, we only check it once per month.

episodeCount: number
// Number of episodes for this feed known to the index.

crawlErrors: number
// The number of errors we’ve encountered trying to pull a copy of the feed. Errors are things like a 500 or 404 response, a server timeout, bad encoding, etc.

parseErrors: number
// The number of errors we’ve encountered trying to parse the feed content. Errors here are things like not well-formed xml, bad character encoding, etc.

imageUrlHash: number
// A CRC32 hash of the image URL with the protocol (http://, https://) removed.

newestItemPubdate: number
}