


'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function DescriptionToggle({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="mt-4">
      <div
        className={`text-sm text-base-content space-y-2 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <button
        className="btn btn-link btn-sm p-0 h-auto mt-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <span className="flex items-center">
            Read Less <ChevronUp className="ml-1" size={16} />
          </span>
        ) : (
          <span className="flex items-center">
            Read More <ChevronDown className="ml-1" size={16} />
          </span>
        )}
      </button>
    </div>
  )
}
