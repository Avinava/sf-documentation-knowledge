---
title: "Group"
domain: mc-apis
topic: group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.503Z
estimatedTokens: 472
keywords: [Group, subscribers, defined, Marketing, Cloud, Interact, groups, via, API, manner, Items, application, interact]
---

> The Group object is a group of subscribers defined in Marketing Cloud. Interact with groups via the API in the same manner as lists.

# Group

The Group object is a group of subscribers defined in Marketing Cloud. Interact with groups via the API in the same manner as lists.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Category | xsd:int | ID of the folder that an item is located in. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Subscribers | Subscriber[] | Indicates subscribers associated with an object. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
