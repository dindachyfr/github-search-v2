import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { repoList } from '../../redux/actions/repoSlice'
import { Box, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import ModalDetail from '../mod/modal'
import DetailRepo from './DetailRepo'
import Pagination from '../mod/pagination'


const Repolist = ({ username }) => {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0)
    const [repoName, setRepoName] = useState("")
    const [detail, setDetail] = useState(false)
    const [limitPage, setLimitPage] = useState(5)
    const repos = useSelector(state => state?.repo?.data)
    const pagesVisited = pageNumber * limitPage

    //modal's tool lays here

    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        dispatch(repoList({
            username,
            limit: 100,
            page: 1
        }))
    }, [limitPage])

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <Box width={'100vw'} px={'3rem'} pb={'3rem'}>
            <Box width={'full'} p={3} minH={'45vh'} bg={'#DBE4F5'} borderRadius={'.375rem'} >
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Text color={'#010101'} fontWeight={'medium'}>
                        Repositories
                    </Text>
                    <Box display={'flex'} alignItems={'center'}>
                        <Text color={'#010101'} fontWeight={'light'}>Show</Text>
                        <Select bg={'transparent'} borderRadius={'.375rem'} onChange={(e) => setLimitPage(e.target.value)} variant={'filled'}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </Select>
                        <Text color={'#010101'} fontWeight={'light'}>Data</Text>
                    </Box>
                </Box>
                <TableContainer py={'.5rem'}>
                    <Table variant='striped' colorScheme={'telegram'}>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Repository Name</Th>
                                <Th>Language</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {repos.length > 0 && repos?.slice(pagesVisited, pagesVisited + limitPage).map((item, key) => (
                                <Tr key={key} cursor={'pointer'}
                                    onClick={() => {
                                        onOpen()
                                        setRepoName(item?.name)
                                    }}>
                                    <Td p={'.375rem .5rem'}> {item?.id}</Td>
                                    <Td className="px-4 py-3">{item?.name}</Td>
                                    <Td className="px-4 py-3">{item?.language}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Pagination
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    limit={limitPage}
                    length={repos?.length}
                    onPageChange={handlePageChange}
                />
                <ModalDetail
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    modalHeader="Repository Detail"
                >
                    <DetailRepo username={username} repoName={repoName} />
                </ModalDetail>
            </Box>
        </Box>
    )
}

export default Repolist