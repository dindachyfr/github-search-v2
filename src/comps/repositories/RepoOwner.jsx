import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

const RepoOwner = ({ownerData}) => {
  const router = useRouter()

  return (
    <Box width={'100vw'} p={'3rem'} display='flex' alignItems={'center'}>
    <Box width={'100vw'} display={'flex'} alignItems={'center'} borderRadius={'.375rem'} justifyContent={'space-between'} p={3} bg={'#DBE4F5'}>
      <Box display={'flex'} alignItems={'center'}>
        <Image borderRadius={'full'} boxSize={12} me={2} src={ownerData?.avatar_url} alt="" />
        <Text color='#5e6f82' fontWeight={'bold'}>
          {ownerData?.login}'s Repositories
        </Text>
      </Box>
      <Link href="/">
        <Text color='#5e6f82' fontWeight={'normal'}>Back to Search</Text>
      </Link>
    </Box>
  </Box>
)
}

export default RepoOwner