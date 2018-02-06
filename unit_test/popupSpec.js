describe("Test suites for popup", function() {
    beforeEach(function() {
        let cookieStr = "82738675_927365";

        class Cookies {
            get(info, callback) {
                if (info["url"] === "http://wikidot.com" && info["name"] === "WIKIDOT_SESSION_ID") {
                    callback.call({value: this.cookies});
                }
                else {
                    callback.call(null);
                }
            }
        }

        class Chrome {
            constructor(chrome) {
                this.chrome = chrome;
            }
        }

        window.chrome = {
            type: "Chrome"
        };

        widow.chrome.cookies = {
            type: "Cookies",
            cookies: cookieStr
        }

    });

    // it("Test getCookies", function() {
    //     var cookie = getCookies("http://wikidot.com", "WIKIDOT_SESSION_ID");
    //     expect(cookie).toEqual(cookieStr);
    // });
});