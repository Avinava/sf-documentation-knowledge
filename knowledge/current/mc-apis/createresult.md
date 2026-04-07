---
title: "CreateResult"
domain: mc-apis
topic: createresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.085Z
estimatedTokens: 478
keywords: [CreateResult, results, order, acted, upon, array, per, APIObject, Items, holds]
---

> The CreateResult object contains the results of each object in a Create request. The objects are returned in the order acted upon: first in, first out. This array contains one CreateResult object per input APIObject.

# CreateResult

The CreateResult object contains the results of each object in a Create request. The objects are returned in the order acted upon: first in, first out. This array contains one CreateResult object per input APIObject.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| CreateResults | CreateResult[] | Reserved for future use. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| NewID | xsd:int | System identifier for new object. The API returns this property after creating a new object. |
| NewObjectID | xsd:string | System identifier for new object. The application provides this ID after a new object is created. |
| Object | APIObject | Specifies definition of object. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| ParentPropertyName | xsd:string | Identifies parent node of property; populated in nested Create results. Deprecated. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |

## Related Items

[Incoming Date Normalization](atlas.en-us.noversion.mc-apis.meta/mc-apis/incoming_date_normalization.htm)

## Related Topics

- Incoming Date Normalization (atlas.en-us.noversion.mc-apis.meta/mc-apis/incoming_date_normalization.htm)
