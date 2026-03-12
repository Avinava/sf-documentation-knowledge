---
title: "ContactsService User Experience"
domain: mobile-offline
topic: contactsservice-user-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.945Z
estimatedTokens: 284
keywords: [ContactsService, User, Experience, component, deliver, any, desire, there’s, common, flow, imports, exports, contact, data]
---

# ContactsService User Experience

> Your component can deliver any user experience you desire, but there’s a common flow
    for any component that imports or exports contact data.

# ContactsService User Experience

Your component can deliver any user experience you desire, but there’s a common flow for any component that imports or exports contact data.

1.  A Lightning web component displays a button (or other user interface control) to start a process that uses contacts data.
2.  When the button is tapped, ContactsService opens a list view for the user to select any number of contacts from the device’s native contacts list.![Lightning web component opens device contacts](/docs/resources/img/en-us/260.0?doc_id=images%2Fcontactsservice_ux_step_2.png&folder=mobile_offline)
3.  After the desired contacts are selected, tap the “check” icon or **Done** button to continue.![Lightning web component displays selected contacts](/docs/resources/img/en-us/260.0?doc_id=images%2Fcontactsservice_ux_step_3.png&folder=mobile_offline)
4.  Your Lightning web component receives the data from the selected contacts. Your component can display additional user interface controls to further process the contacts, add the contacts to Salesforce, or otherwise apply whatever custom logic your business process requires.
