import { default as GameSavingLoader } from "../app";


describe("the can", () => {
	const response = new GameSavingLoader();
	test("0001", () => response.load().then(
			saving => response.parsing(saving),
		).then(
			data => {
				expect(data).toBe("{'id':9,'created':1546300800,'userInfo':{'id':1,'name':'Hitman','level':10,'points':2000}}");
			},
		));

	test("0002", () => response.load().then(
		saving => response.parsing(saving),
	).then(
		data => {
			expect(data).not.toBe("{'id':9,'created':1546300800,'userInfo':{'id':2,'name':'Hitman','level':10,'points':2000}}");
		},
	));
});
