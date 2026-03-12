---
title: "Use the ContactsService API"
domain: mobile-offline
topic: use-the-contactsservice-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.942Z
estimatedTokens: 836
keywords: [ContactsService, API, develop, Lightning, web, component, contacts-based, features, selecting, contacts, device’s, address, book, Add, Test]
---

# Use the ContactsService API

> To develop a Lightning web component with contacts-based features, use the
        ContactsService API as your method for selecting contacts from a device’s address
        book.

# Use the ContactsService API

To develop a Lightning web component with contacts-based features, use the ContactsService API as your method for selecting contacts from a device’s address book.

1.  Import ContactsService into your component definition to make the ContactsService API functions available to your code.
2.  Test to make sure ContactsService is available before you call contacts-related functions.
3.  Use the getContacts() function to select and access contacts.

## Add ContactsService to a Lightning Web Component

In your component’s JavaScript file, import ContactsService using the standard JavaScript import statement. Specifically, import the [getContactsService()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-contactsservice-factory.html "HTML (New Window)") factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of ContactsService. With your ContactsService instance, use the utility functions and constants to verify availability. Then use contacts-related functions to select contacts from the device.

## Test ContactsService Availability

ContactsService depends on physical device hardware and platform features. A component that uses ContactsService renders without errors on a desktop computer or in a mobile browser, but contacts-related functions fail. To avoid these errors, check if ContactsService functionality is available before you use it.

```

```

## Select Contacts from Device

It’s straightforward to create a custom contacts processing feature using ContactsService.

1.  Open the contacts selection list view using getContacts().
2.  Your user selects contacts from the list.
3.  Process the results (the contacts data for the selected contacts).

For example:

```

```

See [getContacts(options)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-contactsservice-getcontacts.html "HTML (New Window)") for more details about how to handle contacts data, handle errors, and so on.

## Save a Contact to Device

To save a contact to the device's address book, construct a valid Contact object and pass it to the putContact() method.

1.  Create a Contact object in your JavaScript code with the desired details (name, phone, email, etc.). This data often comes from a Salesforce record.
2.  Call putContact(), passing the Contact object.
3.  Process the result, which is a Contact object of the successfully saved record, or handle the error.

For example:

```

```

See the [ContactsService API reference](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-contactsservice.html) for full details about the Contact object structure.

#### See Also

-   [*Lightning Web Components Developer Guide:* ContactsService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-contactsservice.html "Lightning Web Components Developer Guide: ContactsService
    API - HTML (New Window)")

-   [ContactsService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_example.htm "Here’s a minimal but complete example of a Lightning web component that uses ContactsService to select on-device contacts and then process the contact data in the component.")

## Code Examples

```
import { getContactsService } from 'lightning/mobileCapabilities';
```

```
handleGetContactsClick(event) {
    const myContactsService = getContactsService();
    if(myContactsService.isAvailable()) {
        // Perform contacts-related operations
    }
    else {
        // ContactsService not available, or consuming app hasn’t implemented it 
        // Not running on hardware with contacts, address book, etc.
        // Handle with message, error, beep, and so on
    }
}
```

```
// Select on-device contacts, and then process them
myContactsService.getContacts(options)
.then((results) => {
    // Do something with the contacts data
    this.contacts = results;
    console.log(results);
})
.catch((error) => {
    // Handle cancellation, or selection errors here
    this.contacts = [];
    console.error('Error code: ' + error.code); + 
    console.error('Error message: ' + error.message);
});
```

```
// First, create a contact object from your source data
    const contactToSave = {
        name: {
            familyName: 'Doe',
            givenName: 'John'
        },
        phoneNumbers: [{
            label: 'Work',
            value: '415-555-1212'
        }],
        emails: [{
            label: 'Work',
            value: 'john.doe@example.com'
        }]
};
// Now, save the contact to the device
myContactsService.putContact(contactToSave)
.then((result) => {
    // The contact was successfully saved.
    console.log('Contact saved:', result);
})
.catch((error) => {
// Handle errors here, such as the user denying permission or a failure to save.
    console.error('Error code: ' + error.code);
    console.error('Error message: ' + error.message);
});
```

## Related Topics

- ContactsService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_example.htm)
