import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

import { DatabaseItems } from '../db'
import { api } from "../services/api"

export interface TransactionContextProps {
    transactions: DatabaseItems[]
    loading: boolean
    updateTransactions: (transaction: DatabaseItems) => void
}

export const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps)

function TransactionProvider({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState<boolean>(true)
    const [transactions, setTransactions] = useState<DatabaseItems[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then((resp: { data: { transactions: DatabaseItems[] } }) => {
                setTransactions(resp.data.transactions)
            })
            .catch(err => console.error(err))
        setLoading(false)
    }, [])

    const updateTransactions = (transaction: DatabaseItems) => {
        api.post('/transactions', transaction)
        setTransactions(prev => [...prev, transaction])
    }

    return (
        <TransactionContext.Provider value={{
            transactions,
            loading,
            updateTransactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionProvider