const Engineer = require('../lib/Engineer');

test("creates a engineer object", () => {
    const engineer = new Engineer('Rick', '1', 'rickytickytavy@rick.com', 'trickyrickytavvvy');

    expect(engineer.name).toBe('Rick');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('rickytickytavy@rick.com');
    expect(engineer.github).toBe('trickyrickytavvvy');
})

test('gets the engineer methods', () => {
    const engineer = new Engineer('Rick', '1', 'rickytickytavy@rick.com', 'trickyrickytavvvy');

    expect(engineer.getName()).toBe('Rick');
    expect(engineer.getID()).toBe('1');
    expect(engineer.getEmail()).toBe('rickytickytavy@rick.com');
    expect(engineer.getGithub()).toBe('trickyrickytavvvy');
    expect(engineer.getRole()).toBe('Engineer');
})