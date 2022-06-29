import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import React from 'react'
import { Container } from './styles'

export const index = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <ArrowCircleUp size={32} color="green" />
                </header>
                <strong>$0.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <ArrowCircleDown size={32} color="red" />
                </header>
                <strong>- $0.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <CurrencyDollar size={32} />
                </header>
                <strong>$0.000,00</strong>
            </div>
        </Container>
    )
}
