---
title: "DataExtensionUpdateResult"
domain: mc-apis
topic: dataextensionupdateresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.427Z
estimatedTokens: 527
keywords: [DataExtensionUpdateResult, error, messages, attempt, extension, message, every, process, opposed, encountered]
---

> The DataExtensionUpdateResult object provides error messages related to an attempt to update a data extension. The object provides one error message for every error in the process, as opposed to just the first error encountered.

# DataExtensionUpdateResult

The DataExtensionUpdateResult object provides error messages related to an attempt to update a data extension. The object provides one error message for every error in the process, as opposed to just the first error encountered.

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
| ParentPropertyName | xsd:string | Identifies parent node of property; populated in nested Create results. Deprecated. |
| RequestID | xsd:string | Unique ID of initial async API call. |
| RequestType | RequestType | Defines request as synchronous or asynchronous API. |
| ResultDetailXML | xsd:string | Contains details of operation result in XML format. |
| ResultType | xsd:string | Defines result as coming from synchronous or asynchronous API. |
| StatusCode | xsd:string | Status of async API request. |
| StatusMessage | xsd:string | Describes the status of an API call. |
| UpdateResults | UpdateResult[] | Indicates error information associated with an update to a data extension. |
| ValueErrors | DataExtensionError[] | Specifies errors associated with field values during operations involving data extensions. This property includes errors involving field values, such as using the wrong characters in the field. |
