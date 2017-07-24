import { select, put } from 'redux-saga/effects';
import { selectContentList, startup } from '../../App/Sagas/StartupSagas';
import RediggActions from '../../App/Redux/RediggRedux';

const stepper = (fn) => (mock) => fn.next(mock).value

test('watches for the right action', () => {
  const step = stepper(startup())
  Redigg.userRequest()
  expect(step()).toEqual(select(selectContentList))
  expect(step()).toEqual(put(RediggActions.userRequest()))
})
