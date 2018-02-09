describe("Test suites for extractHostname()", function() {
    it("Test extractHostname() with normal url", function() {
        let hostname = extractHostname("www.youtube.com");
        expect(hostname).toEqual("www.youtube.com");
    });

    it("Test extractHostname() with parameterized url", function() {
        let hostname = extractHostname("https://www.google.com/search?q=jasmine+coveralls&oq=jasmine+coveralls&aqs=chrome..69i57j0l2.8999j0j4&sourceid=chrome&ie=UTF-8");
        expect(hostname).toEqual("www.google.com");
    });

    it("Test extractHostname() with ported url", function() {
        let hostname = extractHostname("http://localhost:8080");
        expect(hostname).toEqual("localhost");
    });
});

describe("Test suites for extractRootDomain()", function() {
    it("Test extractRootDomain() with normal url", function() {
        let hostname = extractRootDomain("www.youtube.com");
        expect(hostname).toEqual("youtube.com");
    });

    it("Test extractRootDomain() with parameterized url", function() {
        let hostname = extractRootDomain("https://www.google.com/search?q=jasmine+coveralls&oq=jasmine+coveralls&aqs=chrome..69i57j0l2.8999j0j4&sourceid=chrome&ie=UTF-8");
        expect(hostname).toEqual("google.com");
    });

    it("Test extractRootDomain() with sub domain", function() {
        let hostname = extractRootDomain("http://ilovestudy.wikidot.com");
        expect(hostname).toEqual("wikidot.com");
    });
});
