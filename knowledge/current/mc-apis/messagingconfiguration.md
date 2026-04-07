---
title: "MessagingConfiguration"
domain: mc-apis
topic: messagingconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.912Z
estimatedTokens: 540
keywords: [MessagingConfiguration, deprecated, Items]
---

> The MessagingConfiguration object is deprecated.

# MessagingConfiguration

The MessagingConfiguration object is deprecated.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CallbackUrl | xsd:string | Deprecated. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| Code | xsd:string | Deprecated. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsActive | xsd:boolean | Specifies whether the object is active |
| MediaTypes | xsd:string | Deprecated. |
| MessagingVendorKind | MessagingVendorKind | Deprecated. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Password | xsd:string | Write-only password value; cannot be read (AccountUser) Deprecated (MessagingConfiguration) Reserved for future use (UsernameAuthentication) |
| ProfileID | xsd:string | Reserved for future use. |
| Url | xsd:string | Indicates URL included in an event or configuration. |
| UserName | xsd:string | Specifies username associated with an authentication action. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
