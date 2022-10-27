import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { repoDetail } from '../../redux/actions/repoSlice'

const DetailRepo = ({ username, repoName }) => {
    const dispatch = useDispatch()
    const repDetail = useSelector(state => state?.repo?.detail)

    useEffect(() => {
        dispatch(repoDetail({ name: repoName, username }))
    }, [repoName])

    const DATE_OPTIONS = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }

    return (
        <TableContainer py={'.5rem'}>
            <Table variant='striped' colorScheme={'telegram'}>
                <Tbody overflowY={'hidden'}>
                    <Tr>
                        <Td>ID</Td>
                        <Td>:</Td>
                        <Td>{repDetail?.data?.id}</Td>
                    </Tr>
                    <Tr>
                        <Td>Repository Name</Td>
                        <Td>:</Td>
                        <Td>{repDetail?.data?.name}</Td>
                    </Tr>
                    <Tr>
                        <Td>Language</Td>
                        <Td>:</Td>
                        <Td maxWidth={'180px'}>{repDetail?.data?.language || "-"}</Td>
                    </Tr>
                    <Tr>
                        <Td>Description</Td>
                        <Td>:</Td>
                        <Td>{repDetail?.data?.description}</Td>
                    </Tr>
                    <Tr>
                        <Td>Created at</Td>
                        <Td>:</Td>
                        <Td>{new Date(repDetail?.data?.created_at).toLocaleDateString("en-GB", DATE_OPTIONS)}</Td>
                    </Tr>
                    <Tr>
                        <Td>Updated at</Td>
                        <Td>:</Td>
                        <Td>{new Date(repDetail?.data?.updated_at).toLocaleDateString("en-GB", DATE_OPTIONS)}</Td>
                    </Tr>

                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default DetailRepo