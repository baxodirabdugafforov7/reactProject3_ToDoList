import React, { useState } from 'react'

const FruitHeader = ({ addFruit, deleteAllFruits }) => {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [pricePerKg, setPricePerKg] = useState('')

  const handleAdd = () => {
    if (name && weight && pricePerKg) {
      addFruit(name, weight, pricePerKg)
      setName('')
      setWeight('')
      setPricePerKg('')
    }
  }

  return (
    <div className="flex justify-between items-center bg-green-200 p-1 rounded-t-lg mx-14">
      <div className="flex flex-grow justify-around items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          placeholder="Price per Kg (UZS)"
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex flex-col gap-2 mx-4">
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-40"
        >
          Add      <i className="fa-solid fa-square-plus mx-1 text-1.4xl"></i>
        </button>
        <button
          onClick={deleteAllFruits}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete All    <i className="fa-solid fa-trash mx-1 text-1.4xl"></i>
        </button>
      </div>
    </div>
  )
}

export default FruitHeader
