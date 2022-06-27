const findTheOldest = function(people) {
    people = people.map((obj) => addAge(obj));
    people.sort((obj1, obj2) => obj1.age - obj2.age);
    // console.table(people);
    return people[people.length - 1];
};

function addAge(obj) {
    let yearOfBirth = obj.yearOfBirth;
    let yearOfDeath = 'yearOfDeath' in obj ? obj.yearOfDeath : new Date().getFullYear();
    obj['age'] = yearOfDeath - yearOfBirth;
    return obj;
}

// Do not edit below this line
module.exports = findTheOldest;
28
49
29
