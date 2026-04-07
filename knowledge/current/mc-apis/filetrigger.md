---
title: "FileTrigger"
domain: mc-apis
topic: filetrigger
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.860Z
estimatedTokens: 635
keywords: [FileTrigger, Items]
---

# FileTrigger

# FileTrigger

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ExternalReference | xsd:string | Reserved for future use. |
| FileName | xsd:string | Indicates name of file associated with the object. |
| FileTriggerProgramID | xsd:string | Program ID associated with an instance of a file trigger. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsActive | xsd:boolean | Specifies whether the object is active |
| LastPullDate | xsd:dateTime | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| RequestParameterDetail | xsd:string | Reserved for future use. |
| ResponseControlManifest | xsd:string | Reserved for future use. |
| ScheduledDate | xsd:dateTime | Reserved for future use. |
| Status | xsd:string | Defines status of object. Status of an address. |
| StatusMessage | xsd:string | Describes the status of an API call. |
| Type | xsd:string | Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
