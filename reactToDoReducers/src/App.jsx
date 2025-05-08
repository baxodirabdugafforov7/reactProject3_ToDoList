import React, { useReducer, useEffect } from 'react'
import FruitHeader from './components/FruitHeader'
import FruitList from './components/FruitList'
import EditFruitModal from './components/EditFruitModal'

const fruitReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FRUIT':
      return [{ ...action.payload, id: Date.now() }, ...state]
    case 'DELETE_FRUIT':
      return state.filter(fruit => fruit.id !== action.payload)
    case 'DELETE_ALL_FRUITS':
      return []
    case 'TOGGLE_CHECKED':
      return state.map(fruit =>
        fruit.id === action.payload ? { ...fruit, isChecked: !fruit.isChecked } : fruit
      )
    case 'EDIT_FRUIT':
      return state.map(fruit =>
        fruit.id === action.payload.id ? { ...action.payload } : fruit
      )
    default:
      return state
  }
}

const App = () => {
  const [fruitList, dispatch] = useReducer(fruitReducer, [], () => {
    const saved = localStorage.getItem('fruits')
    return saved ? JSON.parse(saved) : []
  })
  const [showEditModal, setShowEditModal] = React.useState(false)
  const [fruitToEdit, setFruitToEdit] = React.useState(null)

  const formatPrice = (num) => new Intl.NumberFormat().format(num)

  const addFruit = (name, weight, pricePerKg) => {
    dispatch({
      type: 'ADD_FRUIT',
      payload: { name, weight, pricePerKg, totalPrice: weight * pricePerKg, isChecked: false }
    })
  }

  const deleteFruit = (id) => {
    dispatch({ type: 'DELETE_FRUIT', payload: id })
  }

  const deleteAllFruits = () => {
    dispatch({ type: 'DELETE_ALL_FRUITS' })
  }

  const toggleChecked = (id) => {
    dispatch({ type: 'TOGGLE_CHECKED', payload: id })
  }

  const editFruit = (fruit) => {
    setShowEditModal(true)
    setFruitToEdit(fruit)
  }

  const saveFruitEdit = (updatedFruit) => {
    dispatch({ type: 'EDIT_FRUIT', payload: updatedFruit })
    setShowEditModal(false)
  }

  useEffect(() => {
    localStorage.setItem('fruits', JSON.stringify(fruitList))
  }, [fruitList])

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="bg-green-200 py-6 shadow">
          <FruitHeader addFruit={addFruit} deleteAllFruits={deleteAllFruits} />
        </header>

        <main className="mt-6">
          <FruitList
            fruits={fruitList}
            toggleChecked={toggleChecked}
            editFruit={editFruit}
            deleteFruit={deleteFruit}
            formatPrice={formatPrice}
          />
        </main>
      </div>

      {showEditModal && fruitToEdit && (
        <EditFruitModal
          fruit={fruitToEdit}
          saveEdit={saveFruitEdit}
          closeModal={() => setShowEditModal(false)}
        />
      )}
    </div>
  )
}

export default App
