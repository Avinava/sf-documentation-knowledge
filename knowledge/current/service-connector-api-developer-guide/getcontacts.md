---
title: "getContacts"
domain: service-connector-api-developer-guide
topic: getcontacts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.403Z
estimatedTokens: 190
keywords: [getContacts, Messaging, phone, contacts, contact]
---

# getContacts

> Get a list of Messaging and phone contacts and contact
        types.

# getContacts

Get a list of Messaging and phone contacts and contact types.

This method is called when Messaging transfer or speed dial is clicked to get the rep's contacts.

## Signature

getContacts(filter, workItemId) → Promise.<[ContactsResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contactsresult.htm "Represents the result when getting a list of Messaging or phone contacts.")\>

## Parameters

| Field | Details |
| --- | --- |
| filter | TypeContactsFilterDescriptionCriteria used to limit contact results by search term and contact type.RequiredNo |
| workItemId | TypestringDescriptionThe work item ID associated with the transfer or conference action.RequiredNo |

## Related Topics

- ContactsResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contactsresult.htm)
- ContactsFilter (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contactsfilter.htm)
