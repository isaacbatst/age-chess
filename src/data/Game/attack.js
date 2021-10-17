export const attackTypes = {
  'infantry': (attacker, defender) => {
    defender.health.actual -= 1;

    return {
      attacker,
      defender
    }
  },
  'anti-cavalry': (attacker, defender) => {
    if(defender.type === 'cavalry'){
      defender.health.actual -= 2;
    } else {
      defender.health.actual -= 1;
    }
    

    return {
      attacker,
      defender
    }
  }
}

