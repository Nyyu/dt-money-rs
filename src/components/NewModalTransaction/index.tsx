import Modal from "react-modal"

import { X } from "phosphor-react"
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import { Container, RadioBox, TypeOfTransactionButtonGroup } from "./styles"
import { ChangeEvent, FormEvent, FormEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes, ReactEventHandler, useState } from "react"
import { api } from "../../services/api"

interface NewModalTransactionProps {
    isNewTrasactionModalOpen: boolean
    handleCloseModal: () => void
}

interface IFormData {
    value: number
    name: string,
    category: string
}

type TFormType = "deposit" | "withdraw"

function NewModalTransaction({
    handleCloseModal,
    isNewTrasactionModalOpen,
}: NewModalTransactionProps) {
    const [transactionMethod, setTransactionMethod] = useState<TFormType>('deposit')
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        value: 0,
        category: ''
    })

    const { name, value, category } = formData

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault()

        const data = { ...formData, type: transactionMethod }
        api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isNewTrasactionModalOpen}
            onRequestClose={handleCloseModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container onSubmit={handleFormSubmit}>
                <h2>New transaction</h2>

                <input
                    type="text"
                    placeholder="Name"
                    id='name'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Value"
                    id='value'
                    value={value}
                    onChange={handleInputChange}
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
                    id='category'
                    value={category}
                    onChange={handleInputChange}
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
