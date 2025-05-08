import React from 'react'

const FruitItem = ({ fruit, onToggleChecked, onEdit, onDelete, formatPrice }) => {
  return (
    <div className="flex justify-around items-center bg-white shadow p-4 rounded text-lg mb-4">
      <input
        type="checkbox"
        checked={fruit.isChecked}
        onChange={() => onToggleChecked(fruit.id)}
        className="w-5 h-5"
      />
      <span className={`${fruit.isChecked ? 'line-through text-gray-500' : ''} w-1/4`}>
        {fruit.name}
      </span>
      <span className="w-1/6">{formatPrice(fruit.weight)} kg</span>
      <span className="w-1/6">UZS {formatPrice(fruit.pricePerKg)}</span>
      <span className="w-1/6 font-semibold">UZS {formatPrice(fruit.totalPrice.toFixed(2))}</span>
      {!fruit.isChecked && (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(fruit)}
            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          >
            Edit <i className="fa-solid fa-pen-to-square mx-1 text-1.4xl"></i>
          </button>
          <button
            onClick={() => onDelete(fruit.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete <i className="fa-solid fa-xmark mx-1 text-1.4xl"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default FruitItem
