---
title: "PhoneContactsResult"
domain: service-connector-api-developer-guide
topic: phonecontactsresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.594Z
estimatedTokens: 170
keywords: [PhoneContactsResult, result, getting, phone, contacts, Functions]
---

# PhoneContactsResult

> Represents the result when getting a list of phone
        contacts.

# PhoneContactsResult

Represents the result when getting a list of phone contacts.

## Constructor

new PhoneContactsResult(param)

## Functions Where Used

-   [getAgentConfig()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm "Get configuration information for the rep.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe phone contacts result. |
| param.contacts | TypeArray<Contact>DescriptionA list of contacts. |
| param.contactTypes | TypeArray of stringsDescriptionA list of contact types. Possible values:PhoneBookQueuePhoneNumberAgentFlow |

## Related Topics

- getAgentConfig() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm)
- Contact (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contact.htm)
