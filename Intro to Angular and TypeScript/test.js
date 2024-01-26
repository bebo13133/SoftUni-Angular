var isEven = false;
var userInfo = {
    name: "Hui4o",
    age: 18
};
var anotherUsers = [{ firstName: "Hui4o", id: 2 }, { firstName: "Puh4o", id: 3 }, { firstName: "Jango", id: 4 }];
anotherUsers.forEach(function (user) {
    console.log("".concat(user.id, " ").concat(user.firstName));
});
