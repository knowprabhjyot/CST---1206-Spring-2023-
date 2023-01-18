// An object is a data structure where you can save values in the form of key and values

var name = "Yoyo!";

let student = {
    name: "Mike",
    age: 28,
    address: {
        city: "Vancouver",
        province: "BC"
    },
    courses: ["CST-1206", "CST-1204"],
    speaks: function() {
        console.log(this.name); // Mike
    },
    getName: () => {
        console.log(this.name); // Yoyo
    },
}

console.log(student.address.city);

student.speaks();

student.getName();