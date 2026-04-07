---
title: "SendSummary"
domain: mc-apis
topic: sendsummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.259Z
estimatedTokens: 533
keywords: [SendSummary, retrieve-only, summary, specific, send, event, Items]
---

> The SendSummary object is a retrieve-only object that contains summary information about a specific send event.

# SendSummary

The SendSummary object is a retrieve-only object that contains summary information about a specific send event.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AccountEmail | xsd:string | Specifies email address attached to account |
| AccountID | xsd:int | Identifier for account |
| AccountName | xsd:string | Name of account |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. |
| DeliveredTime | xsd:string | Indicates the time a message was delivered. |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| IsTestAccount | xsd:boolean | Specifies whether an account is a "Test" account |
| ModifiedDate | Nullable`1 | Last time object information was modified. |
| NonTransactional | xsd:int | Specifies number of marketing (non-transactional) messages included as part of a send. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SendID | xsd:int | Contains identifier for a specific send. |
| TotalSent | xsd:int | Indicates total number of messages sent as part of a send. |
| Transactional | xsd:int | Indicates number of transactional messages included in a send. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
