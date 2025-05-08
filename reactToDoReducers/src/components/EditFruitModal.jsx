import React, { useState } from 'react'

const EditFruitModal = ({ fruit, saveEdit, closeModal }) => {
  const [name, setName] = useState(fruit.name)
  const [weight, setWeight] = useState(fruit.weight)
  const [pricePerKg, setPricePerKg] = useState(fruit.pricePerKg)

  const handleSave = () => {
    saveEdit({ ...fruit, name, weight, pricePerKg, totalPrice: weight * pricePerKg })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Fruit</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price per Kg (UZS)</label>
          <input
            type="number"
            value={pricePerKg}
            onChange={(e) => setPricePerKg(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={closeModal}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 text-white"
          >
            Cancel <i className="fa-solid fa-ban mx-1 text-1.4xl"></i>
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save <i className="fa-solid fa-floppy-disk mx-1 text-1.4xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditFruitModal
