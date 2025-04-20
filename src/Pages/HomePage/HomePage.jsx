import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './HomePage.css'
import { Pagination, Stack } from '@mui/material'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'

const HomePage = () => {
  const [arrayCaracteres, setArrayCaracteres] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 12

  const fetchCharacters = (page) => {
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.items)
        setArrayCaracteres(data.items)
        setCurrentPage(data.meta.currentPage)
        setTotalPages(data.meta.totalPages)
      })
      .catch(error => console.error('Error:', error))
  }

  useEffect(() => {
    fetchCharacters(currentPage)
  }, [])

  const handlePageChange = (event, page) => {
    fetchCharacters(page)
  }

  return (
    <>
      <main>
        {arrayCaracteres.map((items) => (
          <Link to={`/details/${items.id}`} key={items.id}>
            <CardCharacter key={items.id} items={items} />
          </Link>
        )
        )}
      </main>
      <div id='paginacion'>
        <Stack spacing={5}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            className="pagination"
          />
        </Stack>
      </div>
    </>
  )
}

export default HomePage