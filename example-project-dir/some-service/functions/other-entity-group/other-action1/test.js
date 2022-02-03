const { it, describe } = require("mocha");
const proxyquire = require("proxyquire");
const { stub } = require("simple-mock");
const { strictEqual, deepStrictEqual } = require("assert");

describe("other-action1", () => {
    it("With Correct data", async () => {
        // Init Data

        // Init Mocks
        const someMethod = stub();
        const requires = {
            "@tutorbot/api-client/src/api/SomeApi": { someMethod },
        };
        // Run
        const handler = proxyquire("./handler", requires);
        await handler(data);

        // Expectations
        strictEqual(someMethod.called, true);
        strictEqual(someMethod.callCount, 1);
        deepStrictEqual(someMethod.lastCall.args, []);
    });
});
