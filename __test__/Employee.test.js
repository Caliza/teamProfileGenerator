const Employee = require ('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name if provided valid arguments', () => {
            const name ='Hommer';

            const employee = new Employee(name);

            expect(employee.name).toEqual(name);
        })
        it('should create an object with id if provided valid arguments', () => {
            const id = 84;

            const employee = new Employee('Hommer', id);

            expect(employee.id).toEqual(id);
        })
        it('should create an object with id if provided valid arguments', () => {
            const email = 'employee@email';

            const employee = new Employee('Hommer', 84, email);

            expect(employee.email).toEqual(email);
        })
        it('should return name with getName()', () => {
            const name ='Hommer';

            const employee = new Employee(name);

            expect(employee.getName()).toEqual(name);
        })
        it('should return id with getId()', () => {
            const id = 84;

            const employee = new Employee('Hommer', id);

            expect(employee.getId()).toEqual(id);
        })
        it('should return id with getEmail()', () => {
            const email = 'employee@email';

            const employee = new Employee('Hommer', 84,  email);

            expect(employee.getEmail()).toEqual(email);
        })
        it('should return string "employee" with getRole()', () => {
            const employee = new Employee();

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})
