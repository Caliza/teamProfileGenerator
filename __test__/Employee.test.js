const Employee = require ('./employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, email, and role if provided valid arguments', () => {
            const name ='Hommer';


            expect(Employee.name).toEqual(name);


        })
    })
})