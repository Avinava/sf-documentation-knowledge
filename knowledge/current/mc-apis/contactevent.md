---
title: "ContactEvent"
domain: mc-apis
topic: contactevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.700Z
estimatedTokens: 546
keywords: [ContactEvent, associates, event, contact, Items]
---

# ContactEvent

> The ContactEvent object associates information from an event with a contact.

# ContactEvent

The ContactEvent object associates information from an event with a contact.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Defines which account owns the object |
| ContactID | xsd:long | Unique ID for the contact. You must provide a value for contactKey or contactID if the event links directly to the contact. |
| ContactKey | xsd:string | Primary address for the contact. You must provide a value for contactKey or contactID if the event links directly to the contact. |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Data | AttributeSet[] | Any related data associated with the event, passed in as an AttributeSet. To batch multiple items in a single request, include multiple objects that each contain data. Don't include multiple AttributeSets in one object. |
| EventDefinitionKey | xsd:string | Value identifying the event that is used to map event data to the data extension. |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Associate Event Data with a Contact](atlas.en-us.noversion.mc-apis.meta/mc-apis/associate_event_data_with_a_contact.htm)

## Related Topics

- Associate Event Data with a Contact (atlas.en-us.noversion.mc-apis.meta/mc-apis/associate_event_data_with_a_contact.htm)
