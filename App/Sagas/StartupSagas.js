import { put, select } from 'redux-saga/effects';
import RediggActions from '../Redux/RediggRedux';
import { is } from 'ramda';

// exported to make available for tests
export const selectContentList = (state) => state.redigg.contentList

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.');

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectContentList
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectContentList
      }
    })
  }
  const content = yield select(selectContentList);
  // only get if we don't have it yet
  if (!is(Object, content)) {
    yield put(RediggActions.userRequest(selectContentList));
  }
}
