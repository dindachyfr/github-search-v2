import React, { useEffect, useState } from 'react'
import { repoList } from '../../src/redux/actions/repoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Box, Container, Image } from '@chakra-ui/react'

const Repositories = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { username } = router.query
  const repos = useSelector(state => state?.repo)
  const ownerData = repos?.data[0]?.owner
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(repoList({
      username,
      limit: 100,
      page
    }))
  }, [router.query.username, page])

  return (
    <Container
      display='flex'
      justifyContent='center'
      maxW='full'
      height={'100vh'}
      bg={'#5e6f82'}
      centerContent>
        <Box display={'flex'} >

        </Box>
    </Container>
  )
}

export default Repositories