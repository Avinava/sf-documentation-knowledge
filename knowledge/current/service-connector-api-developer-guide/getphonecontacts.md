---
title: "getPhoneContacts"
domain: service-connector-api-developer-guide
topic: getphonecontacts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.405Z
estimatedTokens: 151
keywords: [getPhoneContacts, phone, contacts, contact]
---

# getPhoneContacts

> Get a list of phone contacts and contact types.

# getPhoneContacts

Get a list of phone contacts and contact types.

This method is called when speed dial is clicked to get the rep’s phone contacts.

## Signature

getPhoneContacts(filter) → Promise.<[PhoneContactsResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecontactsresult.htm "Represents the result when getting a list of phone contacts.")\>

## Parameters

| Field | Details |
| --- | --- |
| filter | TypeContactsFilterDescription(Optional) Criteria used to filter contacts by search term and contact type. |

## Related Topics

- PhoneContactsResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecontactsresult.htm)
- ContactsFilter (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contactsfilter.htm)
