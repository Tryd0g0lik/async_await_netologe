import { default as read } from './reader.js';
import { default as json } from './parser.js';


export default class GameSavingLoader {
  load() {
    // const response =
    return (async () => {
      // try {
      const resp = await read();
      const respone = await json(resp);
      return respone;
      // } catch (e) {
      //   throw (e.message);
      // }
    })();
    // return response;
  }
}


function pushung() {
  const response = new GameSavingLoader();
  return (async () => {
    class GameSaving {
      constructor(answer) {
        this.ind = answer.id;
        this.createds = answer.created;
        this.userInfos = {
          "id": answer.userInfo.id,
          "name": answer.userInfo.name,
          "Hitman": answer.userInfo.Hitman,
          "level": answer.userInfo.level,
          "points": answer.userInfo.points,
        };
      }
    };

    const ans = await response.load();
    const newAns = JSON.parse(ans);
    const objClassGameSaving = new GameSaving(newAns);
    console.log("=======>>", objClassGameSaving)

    return objClassGameSaving
  })();
}
pushung();
