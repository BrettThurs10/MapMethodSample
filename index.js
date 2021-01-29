const people = [
  {
    gender: "female",
    name: { title: "Ms", first: "Elfi", last: "Schiemann" },
    location: {
      street: { number: 9654, name: "Lessingstraße" },
      city: "Sundern (Sauerland)",
      state: "Mecklenburg-Vorpommern",
      country: "Germany",
      postcode: 95450,
      coordinates: { latitude: "-42.8796", longitude: "150.4639" },
      timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" },
    },
    email: "elfi.schiemann@example.com",
    login: {
      uuid: "4cbcf9d7-f9d0-4d64-93ee-faf0e54dac53",
      username: "whitewolf676",
      password: "titman",
      salt: "L1a1yr2l",
      md5: "8469f663c3f7f1202f1103047e971673",
      sha1: "f66539d8b7f3107679b4c00db0a45ce3b33df6e9",
      sha256:
        "4d0fdb91f8e6f39911f58d9f2215b3144c39421c7ddd42ad4294babbc53bebea",
    },
    dob: { date: "1996-06-26T08:54:48.270Z", age: 25 },
    registered: { date: "2003-02-17T13:24:13.810Z", age: 18 },
    phone: "0328-6731369",
    cell: "0176-8638067",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
    nat: "DE",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Ted", last: "Dansen" },
    location: {
      street: { number: 6550, name: "Pinewood Drive" },
      city: "Birmingham",
      state: "AL",
      country: "USA",
      postcode: 36606,
      coordinates: { latitude: "-19.1178", longitude: "37.0585" },
      timezone: { offset: "-9:00", description: "Alaska" },
    },
    email: "myr.ysmy@example.com",
    login: {
      uuid: "faea5e0a-ca53-4f1a-8aa7-db39f9725012",
      username: "angrybutterfly251",
      password: "fiction",
      salt: "ZSnJ9KBi",
      md5: "7d7a652a09c5365f6f64e3127217fc22",
      sha1: "3c128881b9a30a83a776ad3e4c91372a79165684",
      sha256:
        "ba94ab0dde1d13c40b2eb49dc4bd45bcb29f95881b4312a405857a3d0d45f48e",
    },
    dob: { date: "1952-02-20T17:57:44.847Z", age: 69 },
    registered: { date: "2017-01-27T12:03:08.640Z", age: 4 },
    phone: "045-44776110",
    cell: "0973-441-2069",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/60.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Britney", last: "Lambert" },
    location: {
      street: { number: 3682, name: "London Road" },
      city: "Southampton",
      state: "West Yorkshire",
      country: "United Kingdom",
      postcode: "S62 9SS",
      coordinates: { latitude: "-65.0850", longitude: "125.3379" },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "britney.lambert@example.com",
    login: {
      uuid: "97876bbb-110c-4567-a40a-f8e28d255cfd",
      username: "smallrabbit338",
      password: "mylove",
      salt: "fXMsTq5w",
      md5: "7376f42ff473bc10de66350ef311606e",
      sha1: "d26549de6172516ce1a16f5b521a5217ae67b222",
      sha256:
        "d7af20c398684117e2c93ee4e8383c669703cdbbc495f92eab7f1ffaba84939f",
    },
    dob: { date: "1991-03-01T08:29:16.972Z", age: 30 },
    registered: { date: "2018-01-28T04:17:15.136Z", age: 3 },
    phone: "016974 78431",
    cell: "0789-554-373",
    id: { name: "NINO", value: "XB 02 42 56 C" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Florent", last: "Leclercq" },
    location: {
      street: { number: 7397, name: "Rue de L'Abbé-Patureau" },
      city: "Poitiers",
      state: "Eure-et-Loir",
      country: "France",
      postcode: 88572,
      coordinates: { latitude: "-75.0128", longitude: "110.2228" },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "florent.leclercq@example.com",
    login: {
      uuid: "a4b4e5ac-c4de-4174-9898-40b5544b1d97",
      username: "ticklishkoala662",
      password: "blueball",
      salt: "7kBZF173",
      md5: "3762099cb203a40364725048848e4a7c",
      sha1: "760d12b47342d7bc165bdace8627e9681afa5f6b",
      sha256:
        "119f1437d406813c200d27881a3513ed3ef306cfb06aa7e8aca05e69119a6127",
    },
    dob: { date: "1977-04-27T03:50:57.050Z", age: 44 },
    registered: { date: "2006-11-07T00:08:37.511Z", age: 15 },
    phone: "04-60-35-79-03",
    cell: "06-13-72-71-80",
    id: { name: "INSEE", value: "1NNaN83757930 06" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Gail", last: "Porter" },
    location: {
      street: { number: 8273, name: "Lakeview St" },
      city: "Chandler",
      state: "Oregon",
      country: "United States",
      postcode: 35207,
      coordinates: { latitude: "-58.2310", longitude: "102.5624" },
      timezone: { offset: "+3:30", description: "Tehran" },
    },
    email: "gail.porter@example.com",
    login: {
      uuid: "0b7e411b-6b35-4e78-8962-7844934847af",
      username: "brownfish105",
      password: "hotboy",
      salt: "S7k663QH",
      md5: "d95bd11af77a99ddb692544d0c44b2f0",
      sha1: "ea1565671cc1e1911f3eb9c2b55c21597a7c2db5",
      sha256:
        "4282afede3ce99d5e0a8a11e3279000994dc2cd8ff05ed1f9bbfce0a71a01a83",
    },
    dob: { date: "1985-07-01T06:25:12.799Z", age: 36 },
    registered: { date: "2016-09-05T00:11:24.584Z", age: 5 },
    phone: "(749)-637-2836",
    cell: "(162)-507-2995",
    id: { name: "SSN", value: "173-97-2473" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Hilde", last: "Sollien" },
    location: {
      street: { number: 9439, name: "Brunas vei" },
      city: "Brumunddal",
      state: "Møre og Romsdal",
      country: "Norway",
      postcode: "5534",
      coordinates: { latitude: "68.9908", longitude: "-162.3859" },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "hilde.sollien@example.com",
    login: {
      uuid: "9deecac7-4810-49bd-b519-8beaafdb112b",
      username: "purplemeercat450",
      password: "cang",
      salt: "XeLG6LfS",
      md5: "8d4f6750a1220a0d01e03a38f4753b42",
      sha1: "362db7220a249376ebf6cf20aa671d87399ed555",
      sha256:
        "1f9517cebf15ae260b7beca993b15a1815560ccc1cb53c736c412add5903408c",
    },
    dob: { date: "1989-07-03T13:09:31.806Z", age: 32 },
    registered: { date: "2010-08-29T11:19:33.957Z", age: 11 },
    phone: "35547396",
    cell: "99062697",
    id: { name: "FN", value: "03078903693" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/15.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    },
    nat: "NO",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Amber", last: "Kuhn" },
    location: {
      street: { number: 5464, name: "Queensway" },
      city: "Carlisle",
      state: "Herefordshire",
      country: "United Kingdom",
      postcode: "A6R 8PH",
      coordinates: { latitude: "-68.8002", longitude: "142.3698" },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "amber.kuhn@example.com",
    login: {
      uuid: "fa9ef3c4-1aa2-4e03-884e-d4bd9df8866b",
      username: "crazyzebra244",
      password: "qqqqqqq",
      salt: "fgQKdK7Y",
      md5: "ecfefd09235c92df6db9520881dbd05a",
      sha1: "f2dba39ec3f1b3e0612c026f3a1a3adacc51ab92",
      sha256:
        "9a9cc8a110035a994b5904de2ea4dcbc6e65c6f301844a22f13371bac9b3f4b1",
    },
    dob: { date: "1981-06-05T12:00:05.801Z", age: 40 },
    registered: { date: "2007-09-08T15:28:53.665Z", age: 14 },
    phone: "0111617 528 6108",
    cell: "0764-289-338",
    id: { name: "NINO", value: "NL 35 06 35 X" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
    nat: "GB",
  },
];

let div = document.getElementById("cards");

function userCard(data) {
  return `<div class="card">
  <img src="${data.picture.large}" alt="Avatar" class="image">
  <div class="container">
    <h4><b>${data.name.first} ${data.name.last}</b></h4>
    <p>${data.email}</p>
  </div>
</div>`;
}

let cards = people.map((x) => userCard(x));
div.innerHTML = cards.join(" ");
