const { lookup } = require("../src/1.7.js");

describe("lookup()", () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup("norvig", "likes");
        const expected = ["AI", "Search", "NASA", "Mars"];

        expect(actual).toEqual(expected);
    });
});
