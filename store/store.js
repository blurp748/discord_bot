const redux = require('redux')

function voloCountFct(state = { value: true }, action) {
  switch (action.type) {
    case 'setTrue':
      return { value: true }
    case 'setFalse':
      return { value: false }
    default:
      return state
  }
}

let voloCount = redux.createStore(voloCountFct);

module.exports = { voloCount };