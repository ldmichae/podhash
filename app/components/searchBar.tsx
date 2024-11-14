'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  searchAction: (searchTerm: string) => Promise<void>
}

export function SearchBar({ searchAction }: SearchBarProps) {
  const [isSearching, setIsSearching] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSearching(true)
    await searchAction(formData.get('query') as string)
    setIsSearching(false)
  }

  return (
    <form action={handleSubmit} className="w-1/3 min-w-96">
      <div className="relative">
        <input
          type="text"
          name="query"
          placeholder="Search for podcasts..."
          className="w-full px-4 py-2 text-lg rounded-full border border-base-content/20 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary"
          disabled={isSearching}
        >
          <Search size={24} />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  )
}