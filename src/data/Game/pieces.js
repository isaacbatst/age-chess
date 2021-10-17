const pieces = {
  horseman: {
    move: 2, icon: 'horse', type: 'cavalry', health: 2
  }, 
  swordman: {
    move: 1, icon: 'sword', type: 'infantry', health: 1
  },
  spearman: {
    move: 1, icon: 'spear', type: 'anti-cavalry', health: 1,
  },
  archer: {
    move: 1, range: 2, type: 'ranged', health: 1
  }
}

export default pieces;