const car = {
  name: 'Corolla',
  year: 2022,
  color: 'white'
}

const ownerContact = {
  phoneContact: "(00) 00000-0000",
  owner: 'Daniel',
}

const infosForSale = {
  ...car,
  ...ownerContact,
  owner: "Daniel Lopes",
  price: 120000,
  onlySale: true
}

console.log(infosForSale);