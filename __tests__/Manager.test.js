const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test("creates a manager object", () => {
    const manager = new Manager('Rick', '1', 'rickytickytavy@rick.com', '202');

    expect(manager.name).toBe('Rick');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('rickytickytavy@rick.com');
    expect(manager.officeNum).toBe('202');
})

test('gets the manager methods', () => {
    const manager = new Manager('Rick', '1', 'rickytickytavy@rick.com', '202');

    expect(manager.getName()).toBe('Rick');
    expect(manager.getID()).toBe('1');
    expect(manager.getEmail()).toBe('rickytickytavy@rick.com');
    expect(manager.getOfficeNum()).toBe('202');
    expect(manager.getRole()).toBe('Manager');
})