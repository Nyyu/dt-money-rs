
import { Bank } from 'phosphor-react'
import { Container, Content } from './styles'

interface HeaderProps {
    openModal: () => void
}

export const index = ({ openModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <Bank size={32} weight='bold' />
                <button type='button' onClick={openModal}>New transaction</button>
            </Content>
        </Container>
    )
}
