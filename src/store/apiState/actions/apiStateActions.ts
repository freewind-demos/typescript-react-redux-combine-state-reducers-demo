export type DeleteFruitAction = {
  type: 'DELETE_FRUIT',
  fruitName: string,
}

export function deleteFruitAction(name: string): DeleteFruitAction {
  return {
    type: 'DELETE_FRUIT',
    fruitName: name
  }
}

