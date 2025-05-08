import React, { useState } from 'react'

const FruitHeader = ({ onAddFruit, onDeleteAll }) => {
  const [fruitName, setFruitName] = useState('')
  const [weight, setWeight] = useState('')
  const [pricePerKg, setPricePerKg] = useState('')

  const handleAddFruit = () => {
    if (fruitName && weight && pricePerKg) {
      onAddFruit(fruitName, weight, pricePerKg)
      setFruitName('')
      setWeight('')
      setPricePerKg('')
    }
  }

  return (
    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-t-lg">

      <div className="flex flex-grow justify-around items-center">
        <input
          type="text"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
          placeholder="Fruit Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight (kg)"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={pricePerKg}
          onChange={(e) => setPricePerKg(e.target.value)}
          placeholder="Price per kg (UZS)"
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={handleAddFruit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-40"
        >
          Add <i className="fa-solid fa-square-plus mx-1 text-1.4xl"></i>
        </button>
        <button
          onClick={onDeleteAll}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete All <i className="fa-solid fa-trash mx-1 text-1.4xl"></i>
        </button>
      </div>
    </div>
  )
}

export default FruitHeader
