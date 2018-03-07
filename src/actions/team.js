export function addTeam(name) {
  return {
    type: 'ADD_TEAM',
    payload: {
      name
    }
  }
}