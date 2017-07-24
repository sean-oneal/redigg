import FixtureAPI from '../../App/Services/FixtureApi';
import { put, call } from 'redux-saga/effects';
import { getRedditContent } from '../../App/Sagas/RediggSagas';
import RediggActions from '../../App/Redux/ReddiggRedux';
import { path } from 'ramda';

const stepper = (fn) => (mock) => fn.next(mock).value;

test('first calls API', () => {
  const step = stepper(getRedditContent(FixtureAPI));
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getRoot));
});

test('success path', () => {
  const response = FixtureAPI.getRoot();
  const step = stepper(getRedditContent(FixtureAPI));
  // first step API
  step();
  // Second step successful return
  const stepResponse = step(response);
  // Get the avatar Url from the response
  // const firstUser = path(['data', 'items'], response)[0];
  // const avatar = firstUser.avatar_url;
  // expect(stepResponse).toEqual(put(GithubActions.userSuccess(avatar)));
  expect(stepResponse).toEqual(put(RediggActions.userSuccess()));
});

test('failure path', () => {
  const response = {ok: false};
  const step = stepper(getRedditContent(FixtureAPI));
  // first step API
  step();
  // Second step failed response
  expect(step(response)).toEqual(put(RediggActions.userFailure()));
});
