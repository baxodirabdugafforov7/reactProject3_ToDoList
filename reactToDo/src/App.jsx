import React, { useState, useEffect } from 'react'
import FruitHeader from './components/FruitHeader'
import FruitList from './components/FruitList'
import EditFruitModal from './components/EditFruitModal'

const App = () => {
  const getSavedFruits = () => {
    const saved = localStorage.getItem('fruits')
    return saved ? JSON.parse(saved) : []
  }

  const [fruitList, setFruitList] = useState(getSavedFruits())
  const [showEditModal, setShowEditModal] = useState(false)
  const [fruitToEdit, setFruitToEdit] = useState(null)

  const formatPrice = (num) => new Intl.NumberFormat().format(num)


  const addFruit = (name, weight, pricePerKg) => {
    const newFruit = {
      id: Date.now(),
      name,
      weight,
      pricePerKg,
      totalPrice: parseFloat(weight) * parseFloat(pricePerKg),
      isChecked: false,
    }
    setFruitList([newFruit, ...fruitList])
  }


  const removeFruit = (id) => {
    setFruitList(fruitList.filter(fruit => fruit.id !== id))
  }


  const removeAllFruits = () => {
    setFruitList([])
  }


  const toggleFruitChecked = (id) => {
    setFruitList(fruitList.map(fruit =>
      fruit.id === id ? { ...fruit, isChecked: !fruit.isChecked } : fruit
    ))
  }


  const editFruit = (fruit) => {
    setShowEditModal(true)
    setFruitToEdit(fruit)
  }


  const saveFruitEdit = (updatedFruit) => {
    updatedFruit.totalPrice = parseFloat(updatedFruit.weight) * parseFloat(updatedFruit.pricePerKg)

    setFruitList(fruitList.map(fruit =>
      fruit.id === updatedFruit.id ? updatedFruit : fruit
    ))
    setShowEditModal(false)
  }

  useEffect(() => {
    localStorage.setItem('fruits', JSON.stringify(fruitList))
  }, [fruitList])

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="bg-green-200 py-6 shadow">
          <FruitHeader onAddFruit={addFruit} onDeleteAll={removeAllFruits} />
        </header>

        <main className="mt-6">
          <FruitList
            fruits={fruitList}
            onToggleChecked={toggleFruitChecked}
            onEdit={editFruit}
            onDelete={removeFruit}
            formatPrice={formatPrice}
          />
        </main>
      </div>

      {showEditModal && fruitToEdit && (
        <EditFruitModal
          fruit={fruitToEdit}
          onSave={saveFruitEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  )
}

export default App
