'use strict'

class Contact {
    constructor(firstName, lastName, telephone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.email = email;
    }
}

class ContactBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, telephone, email) {
        const newContact = new Contact(firstName, lastName, telephone, email);
        this.contacts.push(newContact);
    }

    editContact(index, newFirstName, newLastName, newTelephone, newEmail) {
        if (index >= 0 && index < this.contacts.length) {
            const contact = this.contacts[index];
            contact.firstName = newFirstName;
            contact.lastName = newLastName;
            contact.telephone = newTelephone;
            contact.email = newEmail;
        } else {
            console.log("Некоректний індексний номер для зміни");
        }
    }

    deleteContact(index) {
        if (index >= 0 && index < this.contacts.length) {
            this.contacts.splice(index, 1);
        } else {
            console.log("Некоректний індексний номер для видалення");
        }
    }

    displayContacts() {
        console.log("ContactBook:");
        this.contacts.forEach((contact, index) => {
            console.log(`Contact #${index + 1}:\n
            First Name: ${contact.firstName}\n
            Last Name: ${contact.lastName}\n
            Telephone: ${contact.telephone}\n
            Email: ${contact.email}\n
            _____________________________`);
        });
    }
}

const myContactBook = new ContactBook();

myContactBook.addContact("Мілєна", "Безклинська", "098-356-77-77", "bezklinskayamilka@gmail.com");
myContactBook.addContact("Аліна", "Попова", "096-254-55-77", "alinkapopova@gmail.com");
myContactBook.addContact("Олександра","Ярмоленко","098-875-69-89", "olexandrayarm@ukr.net")
myContactBook.editContact(2, "Olexandra", "Yarmolenko", "098-875-69-88", "olexandrayarmolenko@gmail.net");
myContactBook.deleteContact(1);

myContactBook.displayContacts();