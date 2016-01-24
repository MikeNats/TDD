/**
 * @module
 * @since 23/01/2016
 * @author Michail Tsougkranis
 * @version 1.0
 * @Description Exports Preson Class
*/

/**
 * @class Person
 * @param {Object} person
 * @classdesc Encaptulates person details.
 * Constractor takes as paramiter an object to set person details.
 * @example
 * var personDetails = {
 * 		name: 'Michail',
 *		lastName: 'Tsougkranis'
 *		age: 30,
 * 		gender: 'male'		
 *	},
 *   michail = new Person(personDetails);
*/
class Person {
    constructor(person) {
        this.name = person.name;
        this.lastName = person.lastName;
        this.age = person.age;
        this.gender = person.gender;        
    }

    /**
	 * @method getName
	 * @memberof module:Person~Person.prototype
	 * @return {String}
     * @summary getter for Name
	*/
    getName() {
        return this.name;
    }

    /**
	 * @method setName
	 * @memberof module:Person~Person.prototype
	 * @param {String} name
     * @summary setter for name
	*/    
    setName(name) {
        this.name = name;
    }

    /**
	 * @method getLastName
	 * @memberof module:Person~Person.prototype
	 * @return {String}
     * @summary getter for lastName
	*/      
    getLastName() {
        return this.lastName;
    } 

    /**
	 * @method setLastName
	 * @memberof module:Person~Person.prototype
	 * @param {String} lastName
     * @summary setter for lastName
	*/         
    setLastName(lastName) {
        this.lastName = lastName;
    }

    /**
	 * @method getAge
	 * @memberof module:Person~Person.prototype
	 * @return {Number}
     * @summary getter for age
	*/      
    getAge() {
        return this.age;
    }

    /**
	 * @method setAge
	 * @memberof module:Person~Person.prototype
	 * @param {Number} age
     * @summary setter for age
	*/    
    setAge(age) {
        this.age = age;
    }

    /**
	 * @method getGender
	 * @memberof module:Person~Person.prototype
	 * @return {String}
     * @summary getter for gender
	*/     
    getGender() {
        return this.gender;
    }

    /**
	 * @method gender
	 * @memberof module:Person~Person.prototype
	 * @param {String} gender
     * @summary setter for gender
	*/        
    setGender(gender) {
        this.gender = gender;
    }
}

/**
 * 
 */
export { Person };