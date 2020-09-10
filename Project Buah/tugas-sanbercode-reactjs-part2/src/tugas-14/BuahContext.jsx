import React, { useState, createContext  } from 'react';

export const BuahContext = createContext()

export const BuahProvider = (props) => {
  const [daftarBuah, setDaftarBuah] = useState(null)

  return (
    <BuahContext.Provider value={[daftarBuah, setDaftarBuah]}>
      {props.children}
    </BuahContext.Provider>
  )
}