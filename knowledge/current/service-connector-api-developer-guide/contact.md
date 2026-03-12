---
title: "Contact"
domain: service-connector-api-developer-guide
topic: contact
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.526Z
estimatedTokens: 760
keywords: [Contact, Functions, Objects]
---

# Contact

> Represents information about a contact.

# Contact

Represents information about a contact.

## Constructor

new Contact(param)

## Functions Where Used

-   [addParticipant()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm "Add a participant to a call.")
-   [dial()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm "Dial a contact.")
-   [getContacts()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcontacts.htm "Get a list of Messaging and phone contacts and contact types.")
-   [getPhoneContacts()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getphonecontacts.htm "Get a list of phone contacts and contact types.")

## Objects Where Used

-   [ContactsResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contactsresult.htm "Represents the result when getting a list of Messaging or phone contacts.")
-   [PhoneCall](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm "Represents information about a phone call.")
-   [PhoneContactsResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecontactsresult.htm "Represents the result when getting a list of phone contacts.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with a contact. |
| param.id | TypestringDescriptionOptional. The unique contact ID. |
| param.listType | TypestringDescriptionOptional. The type of destination list for the contact. One of these values:AllConferenceTransfer |
| param.type | TypestringDescriptionOptional. The type of the contact. One of these values:PhoneBookQueuePhoneNumberAgent |
| param.name | TypestringDescriptionOptional. The label for this contact to be displayed in the UI. |
| param.phoneNumber | TypestringDescriptionOptional. The phone number associated with this contact. |
| param.prefix | TypestringDescriptionOptional. Any prefix to be dialed before dialing the number (for example, “+1”). |
| param.extension | TypestringDescriptionOptional. Any extension to be dialed after dialing the number. |
| param.endpointARN | TypestringDescriptionOptional. |
| param.queue | TypestringDescriptionOptional. The unique ID of the contact center queue. |
| param.availability | Typestring (Constants.AGENT_AVAILABILITY)DescriptionOptional. Value for rep availability. This is only used when SharedCapabilitiesResult.hasAgentAvailability is set to true. Allowed values are:AVAILABLEBUSYOFFLINE |
| param.queueWaitTime | TypestringDescriptionOptional. The estimated queue wait time (measured in seconds) calculated by the telephony, Messaging, or CCaaS provider. |

## Related Topics

- addParticipant() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_addparticipant.htm)
- dial() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_dial.htm)
- getContacts() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getcontacts.htm)
- getPhoneContacts() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getphonecontacts.htm)
- ContactsResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_contactsresult.htm)
- PhoneCall (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecall.htm)
- PhoneContactsResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phonecontactsresult.htm)
- SharedCapabilitiesResult.hasAgentAvailability (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_sharedcapabilitiesresult.htm)
