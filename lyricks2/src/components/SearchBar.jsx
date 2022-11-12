import React from 'react'
import { useStateProvider } from '../utils/StateProvider'

const SearchBar = () => {
  const [{userInfo}] = useStateProvider()

  return (
    <div>{userInfo?.userName}</div>
  )
}

export default SearchBar