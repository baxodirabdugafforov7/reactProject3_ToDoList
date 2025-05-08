import React from 'react'
import FruitItem from './FruitItem'

const FruitList = ({ fruits, onToggleChecked, onEdit, onDelete, formatPrice }) => {
  return (
    <div>
      {fruits.map((fruit) => (
        <FruitItem
          key={fruit.id}
          fruit={fruit}
          onToggleChecked={onToggleChecked}
          onEdit={onEdit}
          onDelete={onDelete}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  )
}

export default FruitList
