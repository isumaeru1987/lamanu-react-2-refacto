import React from 'react'

function Search({query, setQuery}) {
  return (
      <input
        placeholder="Rechercher ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
  )
}

export default Search
