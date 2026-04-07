---
title: "ResultMessage"
domain: mc-apis
topic: resultmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.639Z
estimatedTokens: 567
keywords: [ResultMessage, results, asynchronous, call, Items]
---

> The ResultMessage object contains the results of an asynchronous call.

# ResultMessage

The ResultMessage object contains the results of an asynchronous call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CallsInConversation | xsd:int | Number of calls within an async API conversation. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ConversationID | xsd:string | Unique ID of initial async API call. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. |
| ErrorCode | xsd:int | Identifies the error of an API request. |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| ModifiedDate | Nullable`1 | Last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| SequenceCode | xsd:int | Specifies the processing sequence of a multi-step conversation. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
