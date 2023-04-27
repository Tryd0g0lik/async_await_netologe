import { default as read } from './reader';
import { default as json } from './parser';


export default class GameSavingLoader {
  load() {
    return (async () => {
      try {
        const resp = await read();
        return resp;
      } catch (err) {
        return new Error(err.message);
      }
    })();
  }

  parsing(datas) {
    return (async () => {
      try {
        const response = await json(datas);
        return response;
      } catch (err) {
        return new Error(err.message);
      }
    })();
  }
}


function pushung() {
  const response = new GameSavingLoader();
  return (async () => {
    const respLoad = await response.load();

    const result = await response.parsing(respLoad);
    return result;
  })();
}
pushung();
