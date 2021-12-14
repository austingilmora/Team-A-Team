const { TestWatcher } = require('jest')
const Employee = require('../lib/Employee')

test('creates an Employee object', () => {
    const employee = new Employee('Rick', '1', 'rickytickytavy@rick.com');

    expect(employee.name).toBe('Rick');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('rickytickytavy@rick.com');
})

test('gets the employee methods', () => {
    const employee = new Employee('Rick', '1', 'rickytickytavy@rick.com');

    expect(employee.getName()).toBe('Rick');
    expect(employee.getID()).toBe('1');
    expect(employee.getEmail()).toBe('rickytickytavy@rick.com');
    expect(employee.getRole()).toBe('Employee');
})