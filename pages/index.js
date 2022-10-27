import { Box, Button, Container, FormControl, Heading, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { searchUser } from '../src/redux/actions/userSlice'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const users = useSelector(state => state?.user)
  const [text, setText] = useState("")
  const [hide, setHide] = useState(false)

  const handleChange = (string) => {
    setText(string)
    if (string) {
      setHide(false)
      dispatch(searchUser({ q: text, limit: 5, page: 1 }))
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/repositories/${text}`)
  }

  const autoComplete = (username) => {
    setText(username)
    setHide(true)
  }

  // console.log(users);

  return (
    <Container display='flex' justifyContent='center'maxW='full'height={'100vh'}bg={'#5e6f82'}centerContent>
      <Box display='flex' flexDirection={'column'} alignItems='center' bg={"#DBE4F5"} borderRadius={'0.25rem'} w={'30vw'} h={'65vh'} p='1rem'>
        <Heading>Github Search</Heading>
        <Image src="https://img.icons8.com/plasticine/200/000000/github.png" alt="" />
        <form onSubmit={handleSearch}>
          <InputGroup>
            <InputLeftElement pointerEvents='none'children={<Image src="https://img.icons8.com/android/48/000000/search.png" boxSize={'20px'} alt="" />} />
            <Input type='text' value={text} placeholder='Find a user' variant={'outlined'} onChange={(e) => handleChange(e.target.value)} />
          </InputGroup>
          {!hide && (
            <Container position={'absolute'} bgColor={'white'} display={'flex'} flexDirection={'column'} justifyContent={'center'} zIndex={3} left={'32vw'} fontSize={'10px'}>
              {users?.data?.items && users?.data?.items?.map((item, index) =>
                <Box p={2} display='flex' w={'full'} cursor={'pointer'} key={index} onClick={() => autoComplete(item?.login)}>
                  <Image boxSize={'20px'} borderRadius={'full'} src={item?.avatar_url} alt="" />
                  <Text ms={2}>{item?.login}</Text>
                </Box>
              )}
            </Container>
          )}

          <Container maxW='full' centerContent>
            <Button type='submit' bgColor={'#5e6f82'} borderRadius={'.5rem'} mt='1rem' w={'50%'} p='.5rem 1rem' color='#DBE4F5'>Go</Button>
          </Container>
        </form>
      </Box>
    </Container>
  )
}

export default Home