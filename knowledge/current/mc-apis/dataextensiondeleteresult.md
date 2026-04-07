---
title: "DataExtensionDeleteResult"
domain: mc-apis
topic: dataextensiondeleteresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.387Z
estimatedTokens: 400
keywords: [DataExtensionDeleteResult, error, messages, attempt, extension, primary, key, errors]
---

> The DataExtensionDeleteResult object provides error messages related to an attempt to delete information in a data extension. This object provides information for primary key errors only.

# DataExtensionDeleteResult

The DataExtensionDeleteResult object provides error messages related to an attempt to delete information in a data extension. This object provides information for primary key errors only.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ConversationID | xsd:string | Unique ID of initial async API call. All requests that are processed as a single unit have the same ConversationID. |
| ErrorCode | xsd:int | Identifies the error of an API request via a numeric code. |
| ErrorMessage | xsd:string | Contains a human-readable detailed message that provides more information about the error. For example, row errors for a data extension where rows cannot be found. |
| KeyErrors | DataExtensionError[] | Specifies errors associated with primary keys during operations involving data extensions. For example, using the wrong characters in the field. |
| Object | APIObject | Specifies definition of object. |
| OrdinalID | xsd:int | Defines position of object within an array of information. |
| OverallStatusCode | xsd:string | Represents overall status of conversation via async API. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
