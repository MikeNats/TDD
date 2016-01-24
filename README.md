## Modules

<dl>
<dt><a href="#module_Person">Person</a></dt>
<dd><p>Exports Preson Class</p>
</dd>
<dt><a href="#module_User">User</a></dt>
<dd><p>Exports User Class</p>
</dd>
</dl>

<a name="module_Person"></a>
## Person
Exports Preson Class

**Since**: 23/01/2016  
**Version**: 1.0  
**Author:** Michail Tsougkranis  

* [Person](#module_Person)
    * [~Person](#module_Person..Person)
        * [new Person(person)](#new_module_Person..Person_new)
        * [.getName()](#module_Person..Person+getName) ⇒ <code>String</code>
        * [.setName(name)](#module_Person..Person+setName)
        * [.getLastName()](#module_Person..Person+getLastName) ⇒ <code>String</code>
        * [.setLastName(lastName)](#module_Person..Person+setLastName)
        * [.getAge()](#module_Person..Person+getAge) ⇒ <code>Number</code>
        * [.setAge(age)](#module_Person..Person+setAge)
        * [.getGender()](#module_Person..Person+getGender) ⇒ <code>String</code>
        * [.gender(gender)](#module_Person..Person+gender)

<a name="module_Person..Person"></a>
### Person~Person
Encaptulates person details.Constractor takes as paramiter an object to set person details.

**Kind**: inner class of <code>[Person](#module_Person)</code>  

* [~Person](#module_Person..Person)
    * [new Person(person)](#new_module_Person..Person_new)
    * [.getName()](#module_Person..Person+getName) ⇒ <code>String</code>
    * [.setName(name)](#module_Person..Person+setName)
    * [.getLastName()](#module_Person..Person+getLastName) ⇒ <code>String</code>
    * [.setLastName(lastName)](#module_Person..Person+setLastName)
    * [.getAge()](#module_Person..Person+getAge) ⇒ <code>Number</code>
    * [.setAge(age)](#module_Person..Person+setAge)
    * [.getGender()](#module_Person..Person+getGender) ⇒ <code>String</code>
    * [.gender(gender)](#module_Person..Person+gender)

<a name="new_module_Person..Person_new"></a>
#### new Person(person)

| Param | Type |
| --- | --- |
| person | <code>Object</code> | 

**Example**  
```js
var personDetails = {		name: 'Michail',		lastName: 'Tsougkranis'		age: 30,		gender: 'male'			},  michail = new Person(personDetails);
```
<a name="module_Person..Person+getName"></a>
#### person.getName() ⇒ <code>String</code>
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: getter for Name  
<a name="module_Person..Person+setName"></a>
#### person.setName(name)
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: setter for name  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_Person..Person+getLastName"></a>
#### person.getLastName() ⇒ <code>String</code>
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: getter for lastName  
<a name="module_Person..Person+setLastName"></a>
#### person.setLastName(lastName)
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: setter for lastName  

| Param | Type |
| --- | --- |
| lastName | <code>String</code> | 

<a name="module_Person..Person+getAge"></a>
#### person.getAge() ⇒ <code>Number</code>
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: getter for age  
<a name="module_Person..Person+setAge"></a>
#### person.setAge(age)
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: setter for age  

| Param | Type |
| --- | --- |
| age | <code>Number</code> | 

<a name="module_Person..Person+getGender"></a>
#### person.getGender() ⇒ <code>String</code>
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: getter for gender  
<a name="module_Person..Person+gender"></a>
#### person.gender(gender)
**Kind**: instance method of <code>[Person](#module_Person..Person)</code>  
**Summary**: setter for gender  

| Param | Type |
| --- | --- |
| gender | <code>String</code> | 

<a name="module_User"></a>
## User
Exports User Class

**Require**: Person  
**Since**: 23/01/2016  
**Version**: 1.0  
**Author:** Michail Tsougkranis  

* [User](#module_User)
    * [~User](#module_User..User) ⇐ <code>[Person](#module_Person..Person)</code>
        * [new User(user)](#new_module_User..User_new)
        * [.getUserName()](#module_User..User+getUserName) ⇒ <code>String</code>
        * [.userName(userName)](#module_User..User+userName)
        * [.getPass()](#module_User..User+getPass) ⇒ <code>String</code>
        * [.setPass(pass)](#module_User..User+setPass)
        * [.getName()](#module_Person..Person+getName) ⇒ <code>String</code>
        * [.setName(name)](#module_Person..Person+setName)
        * [.getLastName()](#module_Person..Person+getLastName) ⇒ <code>String</code>
        * [.setLastName(lastName)](#module_Person..Person+setLastName)
        * [.getAge()](#module_Person..Person+getAge) ⇒ <code>Number</code>
        * [.setAge(age)](#module_Person..Person+setAge)
        * [.getGender()](#module_Person..Person+getGender) ⇒ <code>String</code>
        * [.gender(gender)](#module_Person..Person+gender)

<a name="module_User..User"></a>
### User~User ⇐ <code>[Person](#module_Person..Person)</code>
Encaptulates user details.
Constractor takes as paramiter an object to set user details.

**Kind**: inner class of <code>[User](#module_User)</code>  
**Extends:** <code>[Person](#module_Person..Person)</code>  

* [~User](#module_User..User) ⇐ <code>[Person](#module_Person..Person)</code>
    * [new User(user)](#new_module_User..User_new)
    * [.getUserName()](#module_User..User+getUserName) ⇒ <code>String</code>
    * [.userName(userName)](#module_User..User+userName)
    * [.getPass()](#module_User..User+getPass) ⇒ <code>String</code>
    * [.setPass(pass)](#module_User..User+setPass)
    * [.getName()](#module_Person..Person+getName) ⇒ <code>String</code>
    * [.setName(name)](#module_Person..Person+setName)
    * [.getLastName()](#module_Person..Person+getLastName) ⇒ <code>String</code>
    * [.setLastName(lastName)](#module_Person..Person+setLastName)
    * [.getAge()](#module_Person..Person+getAge) ⇒ <code>Number</code>
    * [.setAge(age)](#module_Person..Person+setAge)
    * [.getGender()](#module_Person..Person+getGender) ⇒ <code>String</code>
    * [.gender(gender)](#module_Person..Person+gender)

<a name="new_module_User..User_new"></a>
#### new User(user)

| Param | Type |
| --- | --- |
| user | <code>Object</code> | 

**Example**  
```js
var userDetails = {
		userName: 'MikeNats',
		pass: 'myPass12345',
		name: 'Michail',
		lastName: 'Tsougkranis',
		age: 30,
		gender: 'male'	
	},
  user = new User(userDetails);
```
<a name="module_User..User+getUserName"></a>
#### user.getUserName() ⇒ <code>String</code>
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: getter for userName  
<a name="module_User..User+userName"></a>
#### user.userName(userName)
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: setter for userName  

| Param | Type |
| --- | --- |
| userName | <code>String</code> | 

<a name="module_User..User+getPass"></a>
#### user.getPass() ⇒ <code>String</code>
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: getter for pass  
<a name="module_User..User+setPass"></a>
#### user.setPass(pass)
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: setter for pass  

| Param | Type |
| --- | --- |
| pass | <code>String</code> | 

<a name="module_Person..Person+getName"></a>
#### user.getName() ⇒ <code>String</code>
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: getter for Name  
<a name="module_Person..Person+setName"></a>
#### user.setName(name)
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: setter for name  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_Person..Person+getLastName"></a>
#### user.getLastName() ⇒ <code>String</code>
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: getter for lastName  
<a name="module_Person..Person+setLastName"></a>
#### user.setLastName(lastName)
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: setter for lastName  

| Param | Type |
| --- | --- |
| lastName | <code>String</code> | 

<a name="module_Person..Person+getAge"></a>
#### user.getAge() ⇒ <code>Number</code>
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: getter for age  
<a name="module_Person..Person+setAge"></a>
#### user.setAge(age)
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: setter for age  

| Param | Type |
| --- | --- |
| age | <code>Number</code> | 

<a name="module_Person..Person+getGender"></a>
#### user.getGender() ⇒ <code>String</code>
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: getter for gender  
<a name="module_Person..Person+gender"></a>
#### user.gender(gender)
**Kind**: instance method of <code>[User](#module_User..User)</code>  
**Summary**: setter for gender  

| Param | Type |
| --- | --- |
| gender | <code>String</code> | 

