---
title: "SendAdditionalAttribute"
domain: mc-apis
topic: sendadditionalattribute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.193Z
estimatedTokens: 391
keywords: [SendAdditionalAttribute, another, attribute, send, Items]
---

> The SendAdditionalAttribute object defines another attribute associated with a send.

# SendAdditionalAttribute

The SendAdditionalAttribute object defines another attribute associated with a send.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Defines which account owns the object |
| CorrelationID | xsd:string | Identifies calls involved in a specific asynchronous process |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type |
| Email | Email | Indicates email associated with send |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects |
| ModifiedDate | Nullable | Indicates the last time object information was modified |
| Name | xsd:string | Name of the object or property |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object |
| ObjectState | xsd:string | Reserved for future use |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by client and stored by system. This property is accessible only via API. |
| Value | xsd:string | Indicates value of attribute |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
