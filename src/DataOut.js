"use strict";
const data = `
Mike,26,1
John,17,0
Mary,14,1
`;
// const lines = data.split('\n').filter(line => line !== '');
const users = data
    .split('\n')
    .filter(line => line !== '')
    .map((line) => {
    const [name, age, premiumUser] = line.split(',');
    const user = {
        name: name,
        age: Number(age),
        premiumUser: premiumUser === '1',
    };
    return user;
});
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザです。`);
    }
    else {
        console.log(`${user.name} (${user.age})はプレミアムユーザではありません。`);
    }
}
