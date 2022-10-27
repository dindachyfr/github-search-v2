import React, { useEffect, useState } from 'react'
import { repoList } from '../../src/redux/actions/repoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Box, Container, Image, Text } from '@chakra-ui/react'
import RepoOwner from '../../src/comps/repositories/RepoOwner'
import Repolist from '../../src/comps/repositories/Repolist'

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
    <Container overflowX={'hidden'} display='flex' flexDirection={'column'} maxW='full' minH={'100vh'} bg={'#5e6f82'} centerContent>
        <RepoOwner ownerData={ownerData} />
        <Repolist username={username} />
    </Container>
  )
}

export default Repositories