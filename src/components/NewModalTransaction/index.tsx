import Modal from "react-modal"

import { X } from "phosphor-react"
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import { Container, RadioBox, TypeOfTransactionButtonGroup } from "./styles"
import { useState } from "react"

interface NewModalTransactionProps {
    isNewTrasactionModalOpen: boolean
    handleCloseModal: () => void
}

function NewModalTransaction({
    handleCloseModal,
    isNewTrasactionModalOpen,
}: NewModalTransactionProps) {
    const [transactionMethod, setTransactionMethod] = useState<"deposit" | "withdraw">('deposit')

    return (
        <Modal
            isOpen={isNewTrasactionModalOpen}
            onRequestClose={handleCloseModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container>
                <h2>New transaction</h2>

                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="number"
                    placeholder="Value"
                />
                <TypeOfTransactionButtonGroup>
                    <RadioBox
                        type="button"
                        options={{
                            isActive: transactionMethod === 'deposit',
                            type: 'deposit'
                        }}
                        onClick={() => setTransactionMethod('deposit')}
                    >
                        <ArrowCircleUp className="icon iconIn" size={20} color='green' />
                        <span>Deposit</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        options={{
                            isActive: transactionMethod === 'withdraw',
                            type: 'withdraw'
                        }}
                        onClick={() => setTransactionMethod('withdraw')}
                    >
                        <ArrowCircleDown className="icon iconOut" size={20} color='red' />
                        <span>Withdraw</span>
                    </RadioBox>
                </TypeOfTransactionButtonGroup>
                <input
                    type="text"
                    placeholder="Category"
                />
                <button type="submit">Register</button>
                <button type="button" className="btn-inv">
                    <X size={24} className='react-modal-close-btn' onClick={handleCloseModal} />
                </button>
            </Container>
        </Modal>
    )
}

export default NewModalTransaction
