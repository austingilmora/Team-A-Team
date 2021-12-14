const Intern = require('../lib/Intern');

test("creates an intern object", () => {
    const intern = new Intern('Rick', '1', 'rickytickytavy@rick.com', 'UNC');

    expect(intern.name).toBe('Rick');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('rickytickytavy@rick.com');
    expect(intern.school).toBe('UNC');
})

test('gets the intern methods', () => {
    const intern = new Intern('Rick', '1', 'rickytickytavy@rick.com', 'UNC');

    expect(intern.getName()).toBe('Rick');
    expect(intern.getID()).toBe('1');
    expect(intern.getEmail()).toBe('rickytickytavy@rick.com');
    expect(intern.getSchool()).toBe('UNC');
    expect(intern.getRole()).toBe('Intern');
})