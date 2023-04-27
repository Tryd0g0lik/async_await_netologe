import { default as GameSavingLoader } from '../app';


describe('the can  ', () => {
  const response = new GameSavingLoader();
  test('0001', async () => {
    const saving = await response.load();

    const resp = await response.parsing(saving);
    expect(resp).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });

  test('0002', async () => {
    const saving = await response.load();

    const resp = await response.parsing(saving);
    expect(resp).not.toBe('{"id":9,"created":1546300800,"userInfo":{"id":2,"name":"Hitman","level":10,"points":2000}}');
  });
});
