import { default as read } from './reader';
import { default as json } from './parser';


export default class GameSavingLoader {
  load() {
    return (async () => {
      const resp = await read();
      const ans = await json(resp);
      const answer = JSON.parse(ans);
      class GameSaving {
        constructor() {
          this.ind = answer.id;
          this.createds = answer.created;
          this.userInfos = {
            'id': answer.userInfo.id,
            'name': answer.userInfo.name,
            'level': answer.userInfo.level,
            'points': answer.userInfo.points,
          };
        }
      }
      const respone = new GameSaving();
      return respone;
    })();
  }
}


// function pushung() {
//   return (async () => {
//     const response = await new GameSavingLoader();
//     const i = await response.load();
//     console.log(i.ind);

//   })();
// }
// pushung();
