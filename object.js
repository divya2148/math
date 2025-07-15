1.
const student={
    name:"Divya",
    age:24,
    grade:"A",
    greet:function()
    {
        console.log("hi, my name is " + this.name)
    }
}
student.greet();



2.
const movie={
    title:"dada",
    director:"Ganesh K.Babu",
    rating:8.5,
    getsummary:function()
    {
        return `${this.title}  directed by ${this.director} has ${this.rating} rating`;

  }

    }
console.log(movie.getsummary());




3.
const car = {
  brand: "Honda",
  color: "Blue",
  speed: 80
};
console.log(car.brand);
car.speed=100;
console.log(car.speed);
car.isElectric = true;
console.log(car);





4.
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208
};
for (let key in book) {
  console.log(key + ": " + book[key]);
}


5.
const user = {
  username: "John",
  email:"sdivya2740@gmail.com",
  address :{
    city: "gobi",
    zip: 638476
  }
};
console.log(user.address.city);



6.
const rectangle = {
  width: 10,
  height: 5,
  area: function () {
    return this.width * this.height;
  }
};
console.log("rectangle area=" +rectangle.area());


7.
const person = {
  name: "Alice",
  age: 30
};

function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(person,"name"));
console.log(getValue(person,"age"));




8.
const playlist = {
  name: "Chill Vibes",
  songs: ["Song A", "Song B", "Song C"]
};
console.log("second song:"+ playlist.songs[1]);
playlist.songs.push("Song D");
console.log(playlist);
for(let i=0;i<playlist.songs.length;i++){
    console.log(playlist.songs[i]);
}
