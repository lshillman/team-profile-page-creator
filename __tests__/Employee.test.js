const Employee = require('../lib/Employee'); // make sure we can access the Employee class

const borg = new Employee("Hugh", 35, "hugh@collective.com"); // create a new borg for our tests below

describe("Employee class", () => {
    it("has a name which is accessible via the getName function", () => {
        expect(borg.getName()).toBe("Hugh");
    });

    it("has an ID which is accessible via the getId function", () => {
        expect(borg.getId()).toBe(35);
    });

    it("has an email which is accessible via the getEmail function", () => {
        expect(borg.getEmail()).toBe("hugh@collective.com");
    });

    it("has a role of 'Employee', accessible via the getRole function", () => {
        expect(borg.getRole()).toBe("Employee");
    });
});