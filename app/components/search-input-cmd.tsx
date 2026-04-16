'use client'

import * as React from "react"
import { SearchCommand } from "@/components/search-command"
import { searchUsers } from '@/app/actions/actions'
import { User } from "../actions/schemas"



export default function SearchInput() {
  const handleSearch = React.useCallback(async (value: string) => {
    return searchUsers(value)
  }, [])

  const handleSelect = React.useCallback((user: User) => {
    // Update URL
    const url = new URL(window.location.href)
    url.searchParams.set('userId', user.id)
    window.history.pushState({}, '', url.toString())
    window.location.reload()
  }, [])

  return (
    <div className="w-full">
      <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-slate-100 mb-4">🔍 Search People</h3>
        <SearchCommand<User>
          onSearch={handleSearch}
          onItemSelect={handleSelect}
          getItemId={(user) => user.id}
          getItemLabel={(user) => user.name}
          placeholder="Type a name to search..."
          noResultsText="No users found."
        />
      </div>
    </div>
  )
}

