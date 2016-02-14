/**
 * @since 23/01/2016
 * @author Michail Tsougkranis
 * @version 1.0
 * @Description skataaaaa sou lew
 * @module
 * @require Person
 * @exports User
 * @Description Exports User Class
*/

import {Person} from './Person';

/**
 * @class User
 * @extends module:Person~Person
 * @param {Object} user
 * @classdesc Encaptulates user details.
 * Constractor takes as paramiter an object to set user details.
 * @example 
 * var userDetails = {
 * 		userName: 'MikeNats',
 *		pass: 'myPass12345',
 * 		name: 'Michail',
 *		lastName: 'Tsougkranis',
 *		age: 30,
 * 		gender: 'male'	
 *	},
 *   user = new User(userDetails);
*/
class User extends Person {
    constructor(user) {
    	super(user);
        this.userName = user.userName;
        this.pass = user.pass;      
    }

    /**
	 * @method getUserName
	 * @memberof module:User~User.prototype
	 * @return {String}
     * @summary getter for userName
	*/
    getUserName() {
        return this.userName;
    }

    /**
	 * @method userName
	 * @memberof module:User~User.prototype
	 * @param {String} userName
     * @summary setter for userName
	*/    
    setUserName(userName) {
        this.userName = userName;
    }

    /**
	 * @method getPass
	 * @memberof module:User~User.prototype
	 * @return {String}
     * @summary getter for pass
	*/
    getPass() {
        return this.pass;
    }

    /**
	 * @method setPass
	 * @memberof module:User~User.prototype
	 * @param {String} pass
     * @summary setter for pass
	*/    
    setPass(pass) {
        this.pass = pass;
    }    
}

export { User };
