import { getFeedDetails } from "./data/apiLayer"

interface FeedPageProps {
  feedId: string
}

export async function FeedPage({ feedId }: FeedPageProps) {
  let feedDetails = await getFeedDetails(feedId)
}