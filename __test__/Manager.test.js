const Manager = require ('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object with a name if provided valid arguments', () => {
            const officeNumber = 918;

            const manager = new Manager('Hommer', 84, 'manager@email', officeNumber);

            expect(manager.officeNumber).toEqual(officeNumber);
        })
        it('should return id with getOfficeNumber()', () => {
            const officeNumber = 918;

            const manager = new Manager('Hommer', 84, 'manager@email', officeNumber);

            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        })
        it('should return string "Manager" with getRole()', () => {
            const manager = new Manager();

            expect(manager.getRole()).toEqual('Manager');
        })
        
    })
})
