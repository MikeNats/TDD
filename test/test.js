
import {User} from '../src/User';
import {Person} from '../src/Person';

describe('User', () => {
    let user,
        userDetails;

    beforeEach(() => {
        userDetails = {
            userName: 'MikeNats',
            pass: 'myPass12345',
            name: 'Michail',
            lastName: 'Tsougkranis',
            age: 30,
            gender: 'male'  
        };
        user = new User(userDetails);       
    });

    describe('constructor', () => {
        it('should extend Person', () => {
            expect(Person).toBeDefined(); 
        });
        it('will populate user details', () => {          
            expect(user.getUserName()).toEqual(userDetails.userName);
            expect(user.getPass()).toEqual(userDetails.pass);
            expect(user.getName()).toEqual(userDetails.name);
            expect(user.getLastName()).toEqual(userDetails.lastName);
            expect(user.getAge()).toEqual(userDetails.age);
            expect(user.getGender()).toEqual(userDetails.gender);
        });       
    });
});
