const Employee = require('../lib/Employee');

const borg = new Employee("Bob", 423, "bob@bob.com")

describe("Employee class", () => {
    it("has a name which is accessible via the getName function", () => {
        expect(borg.getName()).toBe("Bob")
    });
});