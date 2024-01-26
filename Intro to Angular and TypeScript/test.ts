
let isEven: boolean = false

type User = {
    name: string;
    age: number;
}


const userInfo = {
    name: "Hui4o",
    age: 18
} as User;

interface AnotherUser {
    firstName: string;
    id: number;
}

const anotherUsers = [{ firstName: "Hui4o", id: 2 }, { firstName: "Puh4o", id: 3 }, { firstName: "Jango", id: 4 }] as AnotherUser[];


anotherUsers.forEach(user=> {
console.log(`${user.id} ${user.firstName}`);

});