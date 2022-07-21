const Engineer = require('../lib/Engineer'); // make sure we can access the Engineer class

const engineer = new Engineer("Montgomery Scott", 23, "mscott@starfleet.gov", "scottybeams"); // create a new engineer for our tests below

describe("Engineer class", () => {
    it("has a name which is accessible via the getName function", () => {
        expect(engineer.getName()).toBe("Montgomery Scott");
    });

    it("has an ID which is accessible via the getId function", () => {
        expect(engineer.getId()).toBe(23);
    });

    it("has an email which is accessible via the getEmail function", () => {
        expect(engineer.getEmail()).toBe("mscott@starfleet.gov");
    });

    it("has a github handle, accessible via the getGithub function", () => {
        expect(engineer.getGithub()).toBe("scottybeams");
    });

    it("has a role of 'Engineer', accessible via the getRole function", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });
});