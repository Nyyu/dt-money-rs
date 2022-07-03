import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from "../../Context/Transaction"
import { Container } from './styles'

export const index = () => {
    const { transactions } = useContext(TransactionContext)
    const [income, setIncome] = useState(0)
    const [outcome, setOutome] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        // Hard reset
        setIncome(0)
        setOutome(0)
        setTotal(0)

        transactions.forEach((item, idx) => {
            const { type, price } = item
            console.log(type, price)
            type === 'income' && setIncome(prev => (prev + +price))
            type === 'outcome' && setOutome(prev => (prev + +price))
            setTotal(prev => (prev + +price))
        })

    }, [transactions])


    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <ArrowCircleUp size={32} color="green" />
                </header>
                <strong>{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(income)}</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <ArrowCircleDown size={32} color="red" />
                </header>
                <strong>- {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(outcome)}</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <CurrencyDollar size={32} />
                </header>
                <strong>{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(total)}</strong>
            </div>
        </Container>
    )
}
