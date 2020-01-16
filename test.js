var assert = require("assert");

var { scoreDice } = require("./index");

describe("scoreDice", () => {
    describe("the chance category", () => {
        it("should return the sum of values on the ", () => {
            assert.equal(scoreDice("chance", [1,1,3,3,6]), 14);
        });
    });
});
