---
title: "UserAccess"
domain: mc-apis
topic: useraccess
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:21.028Z
estimatedTokens: 423
keywords: [UserAccess, retrieve, Marketing, Cloud, admin, Items]
---

> To update or retrieve the UserAccess object, you must be a Marketing Cloud admin.

# UserAccess

To update or retrieve the UserAccess object, you must be a Marketing Cloud admin.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. |
| Delete | xsd:int | Indicates whether an object is deleted. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| ModifiedDate | Nullable`1 | Last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Value | xsd:string | Defines value to be used in filter or other object. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
