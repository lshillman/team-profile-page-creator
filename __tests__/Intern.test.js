const Intern = require('../lib/Intern'); // make sure we can access the Intern class

const intern = new Intern("Wesley Crusher", 69, "wcrusher@sfa.edu", "Starfleet Academy"); // create a new intern for our tests below

describe("Intern class", () => {
    it("has a name which is accessible via the getName function", () => {
        expect(intern.getName()).toBe("Wesley Crusher");
    });

    it("has an ID which is accessible via the getId function", () => {
        expect(intern.getId()).toBe(69);
    });

    it("has an email which is accessible via the getEmail function", () => {
        expect(intern.getEmail()).toBe("wcrusher@sfa.edu");
    });

    it("has a school, accessible via the getSchool function", () => {
        expect(intern.getSchool()).toBe("Starfleet Academy");
    });

    it("has a role of 'Intern', accessible via the getRole function", () => {
        expect(intern.getRole()).toBe("Intern");
    });
});