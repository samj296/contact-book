const contact = [];
/* Contack object {
    id: 0,
    name: "asjdh",
    mobile: 123456,
    address: "gdhsadfc dscfhjas",
    email: "dslkasd@bcjskj.com"
} */
let nextId = 1;
function addContact(item){
    const newContact = {
        id: nextId++,
        name: item.name,
        mobile: item.mobile,
        address: item.address,
        email: item.email
    }    

    contact.push(newContact)

    return newContact
}