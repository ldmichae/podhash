import Image from "next/image";
import PodcastEpisode from "./components/podcastEpisode";
import { CustomAudioPlayer } from "./components/player";
import { AudioPlayerProvider } from "./providers/AudioPlayerContext";

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
}

// Mock data based on the provided schema
const podcastData1: PodcastEpisodeType = {
  id: 30107975808,
  title: "Why Contemplation Matters: A Conversation With John Mark Comer and Ger Jones About God Has a Name (Part 2)",
  link: "https://redcircle.com/shows/8348d458-b87c-4c2e-af25-08feaf0c3ebf/episodes/275980d0-6cec-4b55-91ac-ee79ac19e891",
  description: "<p>Why is there such a disconnect between who we want to be and what we actually do? In this second of two conversations with Ger Jones of Vintage Church LA, John Mark and Ger discuss the practice of contemplation. John Mark argues that we overestimate the ability of willpower and insight to change us. Instead, he offers us three doorways into the practice of contemplation and practical suggestions for integrating this practice in our lives.</p><p>You can read more in the expanded hardcover edition of John Mark's book God Has a Name, now available wherever books are sold.</p>",
  datePublishedPretty: "November 08, 2024 4:00am",
  enclosureUrl: "https://audio3.redcircle.com/episodes/275980d0-6cec-4b55-91ac-ee79ac19e891/stream.mp3",
  duration: 2427,
  feedImage: "https://media.redcircle.com/images/2024/2/14/16/16d4643a-67b7-497c-b681-84617beac9c6_26be_ba421e21-5d41-41bf-8538-cb1e9db05158_blob.jpg"
}
const podcastData2: PodcastEpisodeType = {
  id: 30107975808,
  title: "Why Contemplation Matters: A Conversation With John Mark Comer and Ger Jones About God Has a Name (Part 2)",
  link: "https://redcircle.com/shows/8348d458-b87c-4c2e-af25-08feaf0c3ebf/episodes/275980d0-6cec-4b55-91ac-ee79ac19e891",
  description: "<p>Why is there such a disconnect between who we want to be and what we actually do? In this second of two conversations with Ger Jones of Vintage Church LA, John Mark and Ger discuss the practice of contemplation. John Mark argues that we overestimate the ability of willpower and insight to change us. Instead, he offers us three doorways into the practice of contemplation and practical suggestions for integrating this practice in our lives.</p><p>You can read more in the expanded hardcover edition of John Mark's book God Has a Name, now available wherever books are sold.</p>",
  datePublishedPretty: "November 08, 2024 4:00am",
  enclosureUrl: "https://audio3.redcircle.com/episodes/275980d0-6ce4b55-91ac-ee79ac19e891/stream.mp3",
  duration: 2427,
  feedImage: "https://media.redcircle.com/images/2024/2/14/16/16d4643a-67b7-497c-b681-84617beac9c6_26be_ba421e21-5d41-41bf-8538-cb1e9db05158_blob.jpg"
}
const podcastData = [
  podcastData1,
  podcastData2
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <AudioPlayerProvider>
          {podcastData.map((episode) => (
            <PodcastEpisode key={episode.enclosureUrl} podcastData={episode} />
          ))}
          <CustomAudioPlayer />
        </AudioPlayerProvider>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
