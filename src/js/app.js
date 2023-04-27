import { default as read } from './reader';
import { default as json } from './parser';


export default class GameSavingLoader {
  load() {
    return async () => {
      const resp = read();
      return resp;
    };
  }

  parsing(datas) {
    return async () => {
      try {
        const response = json(datas);
        return response;
      } catch (err) {
        return new Error(err.message);
      }
    }
  }
}
const response = new GameSavingLoader();

async function pushung() {
  let respLoad = null;
  try {
    respLoad = await response.load();
  } catch (err) {
    return new Error(`ERROR: ${message.err}`);
  } try {
    const result = await parsing(respLoad);
    return result;
  } catch (er) {
    return new Error(`ERROR: ${massege.err}`);
  }
}
pushung();
