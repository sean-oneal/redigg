import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/RediggRedux';

test('request', () => {
  // const username = 'taco'
  const state = reducer(INITIAL_STATE, Actions.userRequest())

  expect(state.fetching).toBe(true)
  // expect(state.username).toBe()
  expect(state.contentList).toBeNull()
})

test('success', () => {

  const state = reducer(INITIAL_STATE, Actions.userSuccess())

  expect(state.fetching).toBe(false)
  expect(state.contentList).toBe()
  expect(state.error).toBeNull()
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.userFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.contentList).toBeNull()
})
