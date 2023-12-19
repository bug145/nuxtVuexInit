import { chain } from "lodash";

export default async ({ store, beforeNuxtRender }) => {
  const handleClientInit = async () => {
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

    await Promise.all(clientInitActions);
  };

  const handleServerInit = async () => {
    const actions = Object.keys(store._actions);

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

    await Promise.all(serverInitActions);
  };

  if (process.client) {
    window.addEventListener("load", handleClientInit, { passive: true });
  } else {
    beforeNuxtRender(async () => {
      await handleServerInit();
    });
  }
};
