function addItem(value) {
  return {
    value,
    left: null,
    right: null,
  }
}

function deleteItem(item) {
  item.left.right = item.right
  item.right.left = item.left
  item.left = null
  item.right = null
}

// list
const item1 = addItem('a')
const item2 = addItem('b')
const item3 = addItem('c')
const item4 = addItem('d')
const item5 = addItem('e')
const item6 = addItem('f')

item1.right = item2
item2.left = item1
item2.right = item3
item3.left = item2
item3.right = item4
item4.left = item3
item4.right = item5
item5.left = item4
item5.right = item6
item6.left = item5

deleteItem(item4)

console.log(`item 1`)
console.log(item1)
console.log(`item 2`)
console.log(item2)
console.log(`item 3`)
console.log(item3)
console.log(`item 4`)
console.log(item4)
console.log(`item 5`)
console.log(item5)
console.log(`item 6`)
console.log(item6)
