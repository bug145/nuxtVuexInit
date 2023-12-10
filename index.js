import { chain } from 'lodash';

export default async ({ store }) => {
  const actions = Object.keys(store._actions);
  const clientInitActions = chain(actions)
    .map((val) => {
      if (/\/?nuxtClientInit/.test(val)) {
        return val;
      }
      return null;
    })
    .compact()
    .map((action) => store.dispatch(action))
    .value();

  const serverInitActions = chain(actions)
    .map((val) => {
      if (/\/?nuxtServerInit/.test(val)) {
        return val;
      }
      return null;
    })
    .compact()
    .map((action) => store.dispatch(action))
    .value();

  if (process.client) {
    await Promise.all(clientInitActions);
  } else {
    await Promise.all(serverInitActions);
  }
};
