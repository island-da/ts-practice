"use strict";
// type User5 = {
//     name: string,
//     age: number,
// }
// function createUser(name: string, age: number): User5 {
//     if (name === '') {
//         throw new Error('名前は空にできません');
//     }
//     return {
//         name, age
//     };
// }
// function getMessage(user: User5, message: string): string {
//     return `${user.name} (${user.age}) 「${message}」`;
// }
class User5 {
    constructor(name, age) {
        if (name === '') {
            throw new Error('名前は空にできません');
        }
        this.name = name;
        this.age = age;
    }
    getMessage(message) {
        return `${this.name} (${this.age}) 「${message}」`;
    }
}
const mike = new User5('mike', 26);
console.log(mike.getMessage('こんにちは'));
