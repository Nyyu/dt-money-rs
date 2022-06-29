import React, { useEffect, useState } from 'react'
import { Container, Content } from './styles'

import { DatabaseItems } from '../../db'
import { api } from '../../services/api'

export default function index() {
    const [transactions, setTransactions] = useState<DatabaseItems[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        api('http://localhost:3000/api/transactions')
            .then(resp => {
                setTransactions(resp.data)
                setLoading(false)
            })
    }, [])

    const formatDate = (date: string) => {
        const currentDate: Date = new Date(date)
        return `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
    }


    return (
        <Container>
            <Content>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>

                {!loading && transactions ? transactions.map((item: DatabaseItems) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td about={item.type}>{item.type === 'outcome' && '-'} ${item.price}</td>
                        <td>{item.category}</td>
                        <td>{formatDate(item.date.toLocaleString('en-us'))}</td>
                    </tr>
                )) : 'Loading...'}
            </Content>
        </Container>
    )
}
