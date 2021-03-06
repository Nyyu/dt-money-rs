import { useState } from 'react'

import { index as Header } from './components/header'
import { index as Dashboard } from './components/dashboard'
import Transactions from './components/transactions'

import TransactionProvider from "./Context/Transaction"

import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import NewModalTransaction from './components/NewModalTransaction'

Modal.setAppElement("#root")

function App() {

  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  const handleOpenModal = (): void => setIsNewTrasactionModalOpen(true)
  const handleCloseModal = (): void => setIsNewTrasactionModalOpen(false)

  return (
    <TransactionProvider>
      <Header openModal={handleOpenModal} />
      <Dashboard />
      <Transactions />

      <NewModalTransaction handleCloseModal={handleCloseModal} isNewTrasactionModalOpen={isNewTrasactionModalOpen} />

      <GlobalStyle />
    </TransactionProvider>
  )
}

export default App
