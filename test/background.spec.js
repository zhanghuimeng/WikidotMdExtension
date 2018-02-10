describe("Test suites for background.js", function() {
    before(function () {
        const chrome = require('sinon-chrome/extensions');
        console.log(chrome);
        window.chrome = chrome; // for browser context
        global.chrome = chrome; // for nodeJS context
    });

    it("Navigate to normal url", function () {
        let url = "http://www.google.com";
        chrome.windows.create({url: url, focused: true, type: 'normal'});
        expect(isWikidot).equal(false);
    });
});