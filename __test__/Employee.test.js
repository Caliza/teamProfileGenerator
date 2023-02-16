const Employee = require ('./employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email, and role if provided valid arguments', () => {
            const name ='Hommer';
            const id = '';
            const email = 'employee@email';

            // const employee1 = new Employee(name);

            expect(employee1.name).toEqual(name);


        })
    })
})