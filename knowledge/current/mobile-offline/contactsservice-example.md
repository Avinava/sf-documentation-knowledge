---
title: "ContactsService Example"
domain: mobile-offline
topic: contactsservice-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.937Z
estimatedTokens: 401
keywords: [ContactsService, Here’s, minimal, Lightning, web, component, uses, select, on-device, contacts, process, contact, data]
---

# ContactsService Example

> Here’s a minimal but complete example of a Lightning web component that uses
        ContactsService to select on-device contacts and then process the contact data in the
        component.

# ContactsService Example

Here’s a minimal but complete example of a Lightning web component that uses ContactsService to select on-device contacts and then process the contact data in the component.

The component’s HTML template is minimal, with a button to start selecting contacts, and a place to display results.

```

```

Note the use of the for:each directive and nested template tag to iterate through the list of contacts, and a further nested for:each directive and template to iterate through each contact’s list of phone numbers. You can do the same for email addresses, IM handles, and other contact details.

This example doesn’t import contacts into Salesforce, or otherwise use the contacts data provided from the device. It simply uses ContactsService to allow you to select contacts on the device, and then displays the returned contact data, or a status message when there’s an error.

```

```

The component’s JavaScript logic includes handlers for the export operations. It checks for service availability before calling the export function.

```

```

#### See Also

-   [Use the ContactsService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_in_a_lightning_component.htm "To develop a Lightning web component with contacts-based features, use the ContactsService API as your method for selecting contacts from a device’s address book.")

-   [*Lightning Web Components Developer Guide:* Render Lists](https://developer.salesforce.com/docs/platform/lwc/guide/create-lists.html "Lightning Web Components Developer Guide: Render Lists - HTML (New Window)")

## Code Examples

```
<!-- contactsServiceExample.html -->
<template>

    <!-- User interface control -->
    <lightning-card title="ContactsService Example">
        <div class="slds-var-m-around_medium">
            <lightning-button
                variant="brand"
                label="Process Contacts"
                onclick={handleImportContacts}
                class="slds-var-m-left_x-small">
            </lightning-button>
        </div>
    </lightning-card>

    <!-- After contacts are selected, they're displayed here -->
    <div class="slds-var-m-around_medium">
        <p><b>Contacts Selected</b></p>
        <p><lightning-formatted-text 
            value={contactsResults}></lightning-formatted-text></p>
        <ul class="slds-var-m-around_medium">
            <template for:each={contacts} for:item="contact">
                <li key={contact.Id}>
                    {contact.name.givenName} {contact.name.familyName}
                    <ul class="slds-var-m-around_medium">
                        <template for:each={contact.phoneNumbers} 
                            for:item="phoneNumber">
                            <li key={phoneNumber.value}>
                                {phoneNumber.value} ({phoneNumber.label})
                            </li>
                    </template>
                    </ul>
                </li>
            </template>
        </ul>  
      </div>

</template>
```

```
// contactsServiceExample.js
import { LightningElement } from 'lwc';
import { getContactsService } from 'lightning/mobileCapabilities';

export default class ContactsServiceExample extends LightningElement {

    // Component state: result status, and result contacts data
    contactsResults = 'No contacts selected.';
    contacts = [];

    handleImportContacts() {

        const myContactsService = getContactsService();

        // Make sure ContactsService is available before trying to access contacts
        if(myContactsService.isAvailable()) {

            // Configuration for ContactsService
            let options = {
                "permissionRationaleText": 
                    "Allow access to your contacts to enable contacts processing."
            };

            // Select on-device contacts, and then process them
            myContactsService.getContacts(options)
            .then((results) => {
                this.contacts = results;
                this.contactsResults = 'Number of contacts selected: ' + 
                    this.contacts.length;
            })
            .catch((error) => {
                // Handle cancellation, or selection errors here
                this.contacts = [];
                this.contactsResults = JSON.stringify(error) + 
                    '

Error code: ' + error.code + 
                    '

Error message: ' + error.message;
                console.error(this.contactsResults);
            })
        } else {
            // ContactsService isn't available
            // Are you running in a supported mobile app?
            this.contactsResults = "ContactsService API isn't available.";
        }
    }
}
```

```
handleExportContact() {
    // Get the ContactsService instance.
    const myContactsService = getContactsService();

    // Check if the ContactsService is available on the device.
    if (myContactsService.isAvailable()) {
        // Define options for the contact operation.
        // The permissionRationaleText is displayed to the user if the app
        // needs to request permission to access contacts.
        let options = {
            permissionRationaleText:
                'Allow access to your contacts to enable contacts processing.'
        };

        // Define the contact object to be created or updated on the device.
        let contact = {
            name: {
                familyName: 'Smith',
                givenName: 'John'
            },
            phoneNumbers: [
                {
                    label: 'Work',
                    value: '123-456-7890'
                },
                {
                    label: 'Home',
                    value: '321-654-0987'
                }
            ],
            emails: [
                {
                    label: 'Work',
                    value: 'jsmith@acme.com'
                },
                {
                    label: 'Personal',
                    value: 'jsmith@email.com'
                }
            ]
        };

        // Call putContact to save the contact to the device's address book.
        myContactsService
            .putContact(contact, options)
            .then((result) => {
                // On success, process the result.
                this.contactExportedToDevice = JSON.stringify(
                    result,
                    undefined,
                    2
                );
                console.log(
                    'contactExportedToDevice: ${this.contactExportedToDevice}'
                );

                this.contactExportedResult = `Contact was added to device:

${this.contactExportedToDevice}.`;
                this.showSuccessAlert(
                    'Exported Contact',
                    this.contactExportedResult
                );
            })
            .catch((error) => {
                // On failure, handle the error.
                this.contactExportedToDevice = null;
                this.contactExportedResult = `Error code: ${error.code}

Error message: ${error.message}`;
                
                console.log('error: ' + this.contactExportedResult);
                this.showFailureAlert(
                    'Exported Contact',
                    this.contactExportedResult
                );
            });
    } else {
        // If the service is not available, update the result text.
        this.contactExportedResult = 'No Contacts Service available!';
    }
}
```

## Related Topics

- Use the ContactsService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_in_a_lightning_component.htm)
