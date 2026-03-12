---
title: "Access and Manage Contacts on a Mobile Device"
domain: mobile-offline
topic: access-and-manage-contacts-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.924Z
estimatedTokens: 748
keywords: [Access, Manage, Contacts, Mobile, Device, Lightning, web, component, device’s, features, select, device's, address, book, save]
---

# Access and Manage Contacts on a Mobile Device

> A Lightning web component can use a mobile device’s contacts features to select contacts
  from the device's address book or save new contacts to it. When contacts are selected, they’re
  returned to the Lightning web component that invoked it. Your component can then import the
  contacts into Salesforce, attach contact data to a record, or otherwise process the contacts as
  needed. Your component can also take contact information from Salesforce and export it to create a
  new contact on the device.

# Access and Manage Contacts on a Mobile Device

A Lightning web component can use a mobile device’s contacts features to select contacts from the device's address book or save new contacts to it. When contacts are selected, they’re returned to the Lightning web component that invoked it. Your component can then import the contacts into Salesforce, attach contact data to a record, or otherwise process the contacts as needed. Your component can also take contact information from Salesforce and export it to create a new contact on the device.

Contacts are accessed locally on the mobile device, and ContactsService doesn’t require a network connection. However, ContactsService requires access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

ContactsService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[ContactsService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_intro.htm)**
    Your component can deliver any user experience you desire, but there’s a common flow for any component that imports or exports contact data.
-   **[Use the ContactsService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_in_a_lightning_component.htm)**
    To develop a Lightning web component with contacts-based features, use the ContactsService API as your method for selecting contacts from a device’s address book.
-   **[ContactsService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_example.htm)**
    Here’s a minimal but complete example of a Lightning web component that uses ContactsService to select on-device contacts and then process the contact data in the component.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_compatibility.htm)**
    ContactsService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when ContactsService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_considerations.htm)**
    Keep the following in mind when developing features that use the ContactsService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* ContactsService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-contactsservice.html "Lightning Web Components Developer Guide: ContactsService
    API - HTML (New Window)")

## Related Topics

- ContactsService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_intro.htm)
- Use the ContactsService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_in_a_lightning_component.htm)
- ContactsService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_considerations.htm)
