import * as actions from '../page/index/actions/tabAction'
import * as types from '../page/index/actions/actionTypes'


describe('actions', () => {
  it('should create an action to add a todo', () => {
    const obj = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      obj
    }
    expect(actions.addTodo(obj)).toEqual(expectedAction)
  })
})
