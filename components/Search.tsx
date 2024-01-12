'use client'

import { useState } from "react"

export const Search = () => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }

  return (
    <div>
      검색
      <input onChange={handleSearch} />
    </div>
  )
}