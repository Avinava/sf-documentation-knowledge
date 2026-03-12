---
title: "ContactsResult"
domain: service-connector-api-developer-guide
topic: contactsresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.534Z
estimatedTokens: 169
keywords: [ContactsResult, result, getting, Messaging, phone, contacts, Functions]
---

# ContactsResult

> Represents the result when getting a list of Messaging or
        phone contacts.

# ContactsResult

Represents the result when getting a list of Messaging or phone contacts.

## Constructor

new ContactsResult(param)

## Functions Where Used

-   [getAgentConfig()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm "Get configuration information for the rep.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe contacts result. |
| param.contacts | TypeArray<Contact>DescriptionA list of contacts. |
| param.contactTypes | TypeArray of stringsDescriptionA list of contact types. Possible values:PhoneBookQueuePhoneNumberAgentFlow |

## Related Topics

- getAgentConfig() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm)
- Contact (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm)
