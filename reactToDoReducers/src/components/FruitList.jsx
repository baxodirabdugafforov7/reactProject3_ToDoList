import React from 'react'
import FruitItem from './FruitItem'

const FruitList = ({ fruits, toggleChecked, editFruit, deleteFruit, formatPrice }) => {
  return (
    <div>
      {fruits.map(fruit => (
        <FruitItem
          key={fruit.id}
          fruit={fruit}
          toggleChecked={toggleChecked}
          editFruit={editFruit}
          deleteFruit={deleteFruit}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  )
}

export default FruitList
