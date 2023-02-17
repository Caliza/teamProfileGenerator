const Intern = require ('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with a name if provided valid arguments', () => {
            const school ='UC Berkeley';

            const intern = new Intern('Hommer', 84, 'intern@email', school);

            expect(intern.school).toEqual(school);
        })
        it('should return id with getSchool()', () => {
            const school = 'UC Berkeley';

            const intern = new Intern('Hommer', 84, 'intern@email', school);

            expect(intern.getSchool()).toEqual(school);
        })
        it('should return string "Intern" with getRole()', () => {
            const intern = new Intern();

            expect(intern.getRole()).toEqual('Intern');
        })
        
    })
})
