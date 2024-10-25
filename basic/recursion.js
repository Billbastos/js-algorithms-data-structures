function processDoll(toy) {
  // 1) base case
  if (toy.chocolate) {
    return `Recursive: Yum yum ${toy.size}`
  }

  if (!toy.doll) {
    return 'no chocolate here :('
  }

  // 2) recursive call
  return processDoll(toy.doll)
}

function iterativeProcessDoll(toy) {
  // 1) loop nested objects until find chocolate or do not find doll.
  // 2) current dool needs to be undefined.
  let currentDoll = toy.doll

  while (true) {
    if (!currentDoll) return 'no chocolate here :('
    if (currentDoll.chocolate) return `Iterative: Yum yum ${currentDoll.size}`
    // 3) Set next current doll.
    currentDoll = currentDoll.doll
  }
}

const toy = {
  doll: {
    size: 'big1',
    chocolate: false,
    doll: {
      size: 'big2',
      chocolate: true, // Found chocolate here first
      doll: {
        size: 'medium1',
        chocolate: false,
        doll: {
          size: 'small',
          chocolate: false,
          doll: {
            size: 'small1',
            chocolate: true, // Found chocolate here... but too late
            doll: undefined,
          },
        },
      },
    },
  },
}

console.log(processDoll(toy))
console.log(iterativeProcessDoll(toy))
