const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Tanesia', 84, 'tthompson8416@gmail', 'UR');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Tanesia', 84, 'tthompson8416@gmail', 'UR');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Tanesia', 84, 'tthompson8416@gmail.com', 'UR');

    expect(intern.getRole()).toEqual("Intern");
}); 