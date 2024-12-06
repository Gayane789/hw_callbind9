const person = {
    _id: "5d8f881c59acc00a4ad2c76c",
    index: 0,
    guid: "fee2831b-b978-4bbd-8a3d-09fb6bd368b4",
    isActive: true,
    balance: "$3,304.39",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "green",
    name: {
      first: "May",
      last: "Lang",
    },
    company: "KONGENE",
    email: "may.lang@kongene.com",
    phone: "+1 (891) 552-3812",
    address: "159 Minna Street, Bodega, Virginia, 4881",
    registered: "Saturday, March 29, 2014 9:41 PM",
    latitude: "67.175985",
    longitude: "-134.135539",
    tags: ["esse", "minim", "anim", "adipisicing", "nostrud"],
    friends: [
      { id: 0, name: "Lenora Berger" },
      { id: 1, name: "Heath Hess" },
      { id: 2, name: "Fulton Thomas" },
      { id: 3, name: "Cathryn Weiss" },
      { id: 4, name: "King Barker" },
    ],
  };

  const summary = {
    fullName: undefined,
    balance: undefined,
    friendsMap: undefined,
    filteredTags: undefined,
    formattedAddress: undefined,
    coordinates: undefined,
  };


  function getFullName(){
    return `${this.name.first} ${this.name.last}`;
  }

  function getBalance(){
    return this.balance
  }

function getFriendsMap() {
  return new Map(this.friends.map((friend) => [friend.id, friend]));
}

 function getFilteredTags(){
 return this.tags.filter(tag => tag === "anim");
 };
 
function getFormattedAddress() {
  const arr = this.address.split(", ");
 return arr.slice(1 ).join(", ");      
}
// function getFormattedAddress() {
//   const addressParts = this.address.split(", ");
//   return `${addressParts[1]}, ${addressParts[2]}`;
// }

  
  function getCoordinates(){
    return {
      latitude: this.latitude,
      longitude: this.longitude
    };
  }

  summary.fullName = getFullName.call(person);
  summary.balance = getBalance.call(person);
  summary.friendsMap = getFriendsMap.call(person);
  summary.filteredTags= getFilteredTags.call(person);
  summary.formattedAddress = getFormattedAddress.call(person);
  summary.coordinates = getCoordinates.call(person);

console.log(summary);



  // Use this with call, apply, or bind:
  // Do not access the person object directly.
  // Use this to refer to the person properties inside your functions,
  // and use call, apply, or bind to invoke these functions.
  
  // {
  //     fullName: "May Lang",
  //     balance: $3,304.39,
  //     friendsMap: Map(5) {
  //         0 => { id: 0, name: "Lenora Berger" },
  //         1 => { id: 1, name: "Heath Hess" },
  //         2 => { id: 2, name: "Fulton Thomas" },
  //         3 => { id: 3, name: "Cathryn Weiss" },
  //         4 => { id: 4, name: "King Barker" }
  //     },
  //     filteredTags: ["anim"],
  //     formattedAddress: "Bodega, Virginia 4881",
  //     coordinates: { latitude: 67.175985, longitude: -134.135539 }
  // }
  