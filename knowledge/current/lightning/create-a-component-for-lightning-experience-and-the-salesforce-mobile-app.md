---
title: "Create a Component for Lightning Experience and the Salesforce Mobile
   App"
domain: lightning
topic: create-a-component-for-lightning-experience-and-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.906Z
estimatedTokens: 589
keywords: [Component, Lightning, Experience, Salesforce, Mobile, App, Explore, how, custom, loads, contact, data, interacts]
---

# Create a Component for Lightning Experience and the Salesforce Mobile
   App

> Explore how to create a custom UI that loads contact data and interacts with Lightning
  Experience and the Salesforce mobile app.

# Create a Component for Lightning Experience and the Salesforce Mobile App

Explore how to create a custom UI that loads contact data and interacts with Lightning Experience and the Salesforce mobile app.

This tutorial walks you through creating a component that:

-   Displays a toast message (1) using the force:showToast event when all contacts are loaded successfully.
-   Updates the number of contacts (2) based on the selected lead source.
-   Filters the contacts using the lightning:select component (3) when a lead source (referral or social media) is selected.
-   Displays the contact data using the lightning:card component (4).
-   Navigates to the record when the **Details** button (5) is clicked.

![Customize Components in Lightning Experience](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Flex_contactviewer.png&folder=lightning)

Here’s how the component looks in the Salesforce mobile app. You’re creating two components, contactList and contacts, where contactList is a container component that iterates over and displays contacts components. All contacts are displayed in contactList, but you can select different lead sources to view a subset of contacts associated with the lead source.

![Customize Components in the Salesforce mobile app](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2FS1_contactviewer.png&folder=lightning)

In the next few topics, you create the following resources.

| Resource | Description |
| --- | --- |
| Contacts Bundle |  |
| contacts.cmp | The component that displays individual contacts |
| contactsController.js | The client-side controller action that navigates to a contact record using the force:navigateToSObject event |
| contactList Bundle |  |
| contactList.cmp | The component that loads the list of contacts |
| contactListController.js | The client-side controller actions that call the helper resource to load contact data and handles the lead source selection |
| contactListHelper.js | The helper function that retrieves contact data, displays a toast message on successful loading of contact data, displays contact data based on lead source, and update the total number of contacts |
| Apex Controller |  |
| ContactController.apxc | The Apex controller that queries all contact records and those records based on different lead sources |
