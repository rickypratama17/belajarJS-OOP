export default class User{
    #password
    constructor(id, name,password){
        this.id=id
        this._name=name
        this.#password=password
    }
    set password(newPassword){
        this.#password=newPassword
    }
    get password(){
        return this.#password
    }
    getData(){
        return {id: this.id ,name: this._name, password:this.#password}
    }
}
class Admin extends User{

}

export class Question {
    constructor(id, message, course, userId) {
        this.id=id
        this.message = message
        this.course = course
        this.userId = userId
    }
}

export class Discusion extends Question{
    constructor(id, message, course, userId, referenceId) {
        super(id, message, course, userId)
        this.referenceId=referenceId
    }
}