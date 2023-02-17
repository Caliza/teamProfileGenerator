const Engineer = require ('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with a name if provided valid arguments', () => {
            const github ='HommerX';

            const engineer = new Engineer('Hommer', 84,  'engineer@email', github);

            expect(engineer.github).toEqual(github);
        })
        it('should return id with getGithub()', () => {
            const github = 'HommerX';

            const engineer = new Engineer('Hommer', 84, 'engineer@email', github);

            expect(engineer.getGithub()).toEqual(github);
        })
        it('should return string "employee" with getRole()', () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toEqual('Engineer');
        })
        
    })
})
