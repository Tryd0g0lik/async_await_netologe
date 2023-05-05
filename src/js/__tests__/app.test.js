import { default as GameSavingLoader } from "../app";


describe("the can", () => {
  const response = new GameSavingLoader();
  test("0001", async () => {
    const i = await response.load();
    // console.log(i.ind);
    expect(i.ind).toBe(9);
  });
});
