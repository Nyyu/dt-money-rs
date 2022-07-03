import React, { useEffect, useContext } from 'react'
import { Container, Content } from './styles'

import { DatabaseItems } from '../../db'

import { TransactionContext, TransactionContextProps } from "../../Context/Transaction"


export default function index() {
    const { loading, transactions } = useContext<TransactionContextProps>(TransactionContext)

    return (
        <Container>
            <Content>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>

                {!loading && transactions.length > 0 ? transactions.map((item: DatabaseItems) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td about={item.type}>{item.type === ('outcome') && '- '}
                            {Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(item.price)}
                        </td>
                        <td>{item.category}</td>
                        <td>
                            {
                                Intl.DateTimeFormat('en-US').format(
                                    new Date(item.date)
                                )
                            }
                        </td>
                    </tr>
                )) : <div style={{
                    marginLeft: 15
                }}>
                    {(loading ? 'Loading...' : 'No items found')}
                </div>}
            </Content>
        </Container>
    )
}
