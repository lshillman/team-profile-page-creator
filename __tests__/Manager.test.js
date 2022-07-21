const Manager = require('../lib/Manager'); // make sure we can access the Manager class

const manager = new Manager("Locutus", 1, "locutus@collective.com", "Cube 0101"); // create a new borg for our tests below

describe("Employee class", () => {
    it("has a name which is accessible via the getName function", () => {
        expect(manager.getName()).toBe("Locutus");
    });

    it("has an ID which is accessible via the getId function", () => {
        expect(manager.getId()).toBe(1);
    });

    it("has an email which is accessible via the getEmail function", () => {
        expect(manager.getEmail()).toBe("locutus@collective.com");
    });

    it("has a role of 'Manager', accessible via the getRole function", () => {
        expect(manager.getRole()).toBe("Manager");
    });
});