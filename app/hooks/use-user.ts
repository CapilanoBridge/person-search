'use client'

import { useState, useEffect } from 'react'
import { User } from '@/app/actions/schemas'

export function useUser(userId: string | null) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    let canceled = false

    if (userId) {
      // Dynamic import to avoid bundling server code
      import('@/app/actions/actions').then(({ getUserById }) => {
        return getUserById(userId)
      }).then(fetchedUser => {
        if (canceled) return
        setUser(fetchedUser ?? null)
      })
      return () => {
        canceled = true
      }
    }

    const timer = setTimeout(() => {
      if (!canceled) setUser(null)
    }, 0)

    return () => clearTimeout(timer)
  }, [userId])

  const mutate = () => {
    if (userId) {
      import('@/app/actions/actions').then(({ getUserById }) => {
        return getUserById(userId)
      }).then(fetchedUser => {
        if (fetchedUser) {
          setUser(fetchedUser)
        } else {
          setUser(null)
        }
      })
    }
  }

  return { user, mutate }
}

