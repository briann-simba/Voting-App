const faker = require('faker');

module.exports = () => {
    const data = {
        customers: [],
        addresses: [],
    }

    for (let i = 1; i <= 100; i++) {
        let customer = {};
        let address = {};

        customer.id = i;
        let name = {};
        name.first = faker.name.firstName();
        name.last = faker.name.lastName();
        customer.name = name;
        data.customers.push(customer);

        address.id = i;
        address.address = faker.address.streetAddress();
        address.state = faker.address.stateAbbr();
        data.addresses.push(address);
    }

    return data;
}