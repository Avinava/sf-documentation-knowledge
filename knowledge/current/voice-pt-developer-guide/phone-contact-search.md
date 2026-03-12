---
title: "Phone Contact Search"
domain: voice-pt-developer-guide
topic: phone-contact-search
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.102Z
estimatedTokens: 582
keywords: [Phone, Contact, Search, rep, adds, participant, call, Salesforce, transfer, destinations, Pagination, Pseudo]
---

# Phone Contact Search

> When a rep adds a participant to a call, Salesforce provides a UI to search for
        transfer destinations.

# Phone Contact Search

When a rep adds a participant to a call, Salesforce provides a UI to search for transfer destinations.

![Phone contact search](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_phone_contact_search.png&folder=voice_pt_developer_guide)

The contacts are returned from the vendor when implementing getPhoneContacts().

The API supports a long list of contacts and lets reps search for contacts that they want to transfer to.

## Search and Pagination

getPhoneContacts() is called by Salesforce with a filter argument. The filter object has the keys contains, limit, and offset. limit is a constant set to 50 and offset is calculated by the UI.

If the vendor supports contact search (by specifying AgentConfigResult.hasContactSearch as true), the following events occur.

-   When the transfer UI is shown, getPhoneContacts({limit: 50}) is called and the vendor can return the most recent 50 items.
-   With every search or filtering request, Salesforce calls getPhoneContacts({contains: string, limit: 50, offset: number }).
-   When scrolling down (“progressive loading”), Salesforce calls getPhoneContacts({contains: string, filter: string, limit: 50, offset: calculated}).

Example scenarios:

-   At initialization time: getPhoneContacts({limit: 50}) → \[a1,b2... x50\] (most recent contacts)
-   When searching for "xyz": getPhoneContacts({contains: "xyz", limit: 50, offset: 0}) → \[xyz1,xyz2... xyz50\]
-   When scrolling down: getPhoneContacts({contains: "xyz", offset: 50, limit: 50}) → \[xyz51,xyz52... xyz100\]

## Pseudo Contact Search

A new capability called hasContactSearch is available. When the vendor doesn’t implement contact search, the capability is set to false or undefined. If the capability is false or undefined, Salesforce gets all phone contacts (up to 1000) and stores them in memory. Then, for every scroll or search, Salesforce does a “pseudo search,” or a simple filtering, and shows the data that matches the filter. getPhoneContacts() is called one time.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")
